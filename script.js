// Remove event listeners
document.querySelectorAll('*').forEach((element) => {
    element.oncopy = null;
    element.oncut = null;
    element.onpaste = null;
    element.oncontextmenu = null;
    element.onselectstart = null;
    element.ondragstart = null;
});

// Remove CSS properties that prevent text selection and copying
const style = document.createElement('style');
style.innerHTML = `
    * {
        user-select: text !important;
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
    }
`;
document.head.appendChild(style);

// Override possible existing JavaScript that resets the handlers
window.addEventListener('load', () => {
    document.querySelectorAll('*').forEach((element) => {
        element.oncopy = null;
        element.oncut = null;
        element.onpaste = null;
        element.oncontextmenu = null;
        element.onselectstart = null;
        element.ondragstart = null;
    });
});
