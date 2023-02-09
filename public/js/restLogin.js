document.querySelector("#restLoginForm").addEventListener("submit",e=>{
    e.preventDefault();
    const loginObj = {
        email:document.querySelector("#restLoginEmail").value,
        password:document.querySelector("#restLoginPassword").value
    }
   
})

document.querySelector("#restSignupForm").addEventListener("submit",e=>{
    e.preventDefault();
    const loginObj = {
        name:document.querySelector("#restLSignupName").value,
        email:document.querySelector("#restLSignupEmail").value,
        password:document.querySelector("#restSignupPassword").value
    }
   
})

