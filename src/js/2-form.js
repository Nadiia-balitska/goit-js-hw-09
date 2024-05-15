const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
const formDate = { email: "", message: "" };

function saveFromData(key, value) {
    
}

function loadFromData(key) {
    
}


formEl.addEventListener('input', e => {
    const value = e.target.value.trim();
    formData[e.target.name] = value;

})
