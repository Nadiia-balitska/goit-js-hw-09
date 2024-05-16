const formEl = document.querySelector('.feedback-form');
const SAVE_KEY = "feedback-form-state";

let formData = JSON.parse(localStorage.getItem(SAVE_KEY)) || { email: "", message: "" } ;


//!==================================================================
formEl.addEventListener('submit', e => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value.trim();
    const message = e.currentTarget.elements.message.value.trim();

    if (!email|| !message) {
        return alert('email or message is empty');
    }
    const userData = {
           email, message,
    } 
    console.log(userData);
    // formData.elements.email= '';
    // formData.elements.message = '';
    
     e.target.elements.email.value= '';
        e.target.elements.message.value= '';

    localStorage.removeItem(SAVE_KEY);
    e.target.reset();
    formData = {};
})


formEl.addEventListener('input', e => {
    const value = e.target.value.trim();
    formData[e.target.name] = value;
    saveInStorage(SAVE_KEY, formData);

});




//!==================================================================
function saveInStorage(key, value) {
    try {
        const json = JSON.stringify(value);
        localStorage.setItem(key, json);
    } catch (error) {
        console.log(error.message);
    }
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key);
    try {
        const result = JSON.parse(data);
        return result;
    } catch (error) {
        return data;
    }
}
//!==================================================================
function init() {
    const data = loadFromStorage(SAVE_KEY) || {};
    formEl.elements.email.value = data.email || '';
    formEl.elements.message.value = data.message || '';

    // formData = {
    //     email, message
    // }
}
init()

//!==================================================================








