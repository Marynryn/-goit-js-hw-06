const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
       event.preventDefault();
    
      const {email, password} = event.currentTarget.elements;
    
      const info = {
        email: email.value,
        password: password.value,
        
      };
    
      console.log(info);
      event.currentTarget.reset();
    }
    
