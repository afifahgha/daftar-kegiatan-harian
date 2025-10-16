const form = document.getElementById("itemForm");
const input = document.getElementById("itemInput");
const errorMessage = document.getElementById("errorMessage");
const list = document.getElementById("daftar");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const itemText = input.value.trim();
    if (itemText === "") {
        input.classList.remove('invalid','valid')
        errorMessage.textContent = "Field tidak boleh kosong"; 
        input.classList.add("invalid");
        input.focus();
        return; 
    } else {
        errorMessage.textContent = ""; 
        input.classList.remove("invalid");
        input.classList.add("valid"); 
        const newItem = document.createElement("li"); 
        newItem.textContent = itemText; 
        list.append(newItem); 
        input.value = ""; 
    }
});