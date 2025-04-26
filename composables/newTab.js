export const newTab = (link) => {
    if(!link) return;
    return window.open(link, '_blank')
}