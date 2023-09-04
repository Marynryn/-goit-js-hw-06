const input = document.querySelector("#validation-input");
input.addEventListener("blur", handleBlur);
function handleBlur(event){
    input.classList.remove("invalid", "valid");
    if (event.target.value.length === Number(input.dataset.length)){
        input.classList.add("valid");
    } else{
        input.classList.add("invalid");
        
    }

}
