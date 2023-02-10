document.querySelector("#custLoginForm").addEventListener("submit",e=>{
    e.preventDefault();
    const loginObj = {
        email:document.querySelector("#custLoginEmail").value,
        password:document.querySelector("#custLoginPassword").value
    }
    location.href="/customers"
   
})

document.querySelector("#custSignupForm").addEventListener("submit",e=>{
    e.preventDefault();
    const loginObj = {
        name:document.querySelector("#custSignupName").value,
        email:document.querySelector("#custSignupEmail").value,
        password:document.querySelector("#custSignupPassword").value
    }
   location.href="customers"
})

