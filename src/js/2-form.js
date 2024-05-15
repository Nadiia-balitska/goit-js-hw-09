const formEl = document.querySelector('.feedback-form');
const SAVE_KEY = "feedback-form-state";
const formDate = { email: "", message: "" };
//!==================================================================
function saveInData(key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);

}

function loadFromData(key) {
    const data = localStorage.getItem(key);
    try {
        const result = JSON.parse(data);
        return result;
    } catch (error) {
        return data;
    }
}
//!==================================================================


formEl.addEventListener('input', e => {
    const value = e.target.value.trim();
    formData[e.target.name] = value;
    saveInData(SAVE_KEY, formDate)
});


