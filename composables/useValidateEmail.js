export const useValidateEmail = (email) => {
    const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]{1,})(\.[a-zA-Z]{1,})?$/;
    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}