document.querySelector("#restLoginForm").addEventListener("submit",e=>{
    e.preventDefault();
    const loginObj = {
        email:document.querySelector("#restLoginEmail").value,
        password:document.querySelector("#restLoginPassword").value
    }

   location.href="/restaurants"
})

document.querySelector("#restSignupForm").addEventListener("submit",e=>{
    e.preventDefault();
    const loginObj = {
        name:document.querySelector("#restSignupName").value,
        email:document.querySelector("#restSignupEmail").value,
        password:document.querySelector("#restSignupPassword").value
    }
   location.href="/newrestaurant"
})

