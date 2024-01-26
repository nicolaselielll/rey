import { useStore } from '~/stores/store.js';

let loadingState = reactive({
    loading: false,
});

export const useForm = () => {
    const store = useStore()

    const end = (form) => {
        loadingState.loading = false
        Object.keys(store.forms[form.name]).forEach(key => {
            store.forms[form.name][key] = null;
        });
        if(!form.fileInputs) return;
        var domForm = document.querySelector('.' + form.name + '-modal-wrapper') // Remember to change if different
        form.fileInputs.forEach((id) => {
            var fileInput = domForm.querySelector('.' + id + '-file-select')
            fileInput.value = ''
        })
    }

    const isEmailValid = (email) => {
        const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]{1,})(\.[a-zA-Z]{1,})?$/;
        if (regex.test(email)) {
            return true;
        } else {
            return false;
        }
    }

    const submit = (form) => {
        const missingFields = [];
        console.log('FORM', form)
        form.requiredFields.forEach(field => {
            document.querySelector('#' + field).classList.remove('invalid')
            if (!store.forms[form.name][field] || store.forms[form.name][field] === '') {
                missingFields.push(field);
            }
        });

        if (missingFields.length > 0) {
            alert(`Täytäthän vaaditut kentät.`);
            missingFields.forEach((field) => {
                document.querySelector('#' + field).classList.add('invalid') // Requires the field to have the same id as the key
            })
            return;
        }

        if (isEmailValid(store.forms[form.name].sposti)) { // Remember to change if key is different
            send(form);
        } else {
            alert('Email is invalid');
            document.querySelector('#sposti').classList.add('invalid')
            console.log(store.forms[form.name].sposti) // Also here
        }
    }

    const send = (form) => {
        loadingState.loading = true
        try {
            let formData = new FormData();

            Object.keys(store.forms[form.name]).forEach((key) => {
                if(form.fileInputs) {
                    if(form.fileInputs.includes(key)) {
                        form.fileInputs.forEach((input) => {
                            var domForm = document.querySelector('.' + form.name + '-modal-wrapper') // Remember to change if different
                            var fileInput = domForm.querySelector('.' + input + '-file-select')
                            var file = fileInput.files[0]
                            console.log(fileInput, file)
                            formData.append(key, file)
                        })
                    } else {
                        formData.append(key, JSON.stringify(store.forms[form.name][key]))
                    }
                } else {
                    formData.append(key, JSON.stringify(store.forms[form.name][key]))
                }
            })

            formData.forEach((value, key) => {
                console.log(key, value);
            });

            setTimeout(() => {
                $fetch(form.endPoint, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        end(form)
                        // Do something on success
                    } else {
                        response.json().then(data => {
                            if (Object.hasOwn(data, 'errors')) {
                                console.log(error)
                                console.log(data["errors"].map(error => error["message"]).join(", "))
                                alert('Jotain meni vikaan. Jos lomake ei toimi, ole yhteydessä sivuston ylläpitäjään.')
                                end(form)
                            } else {
                                end(form)
                            }
                        })
                    }
                }).catch(error => {
                    console.log(error)
                    new Error("Oops! There was a problem submitting the form", error)
                    alert('Jotain meni vikaan. Jos lomake ei toimi, ole yhteydessä sivuston ylläpitäjään.')
                    end(form)
                });
            }, 1000)
        } catch (error) {
            console.log(error)
            new Error("Oops! There was a problem submitting the form", error)
            alert('Jotain meni vikaan. Jos lomake ei toimi, ole yhteydessä sivuston ylläpitäjään.')
            loadingState.loading = false
            end(form)
        }
    }
    return {
        loadingState,
        submit
    }
}