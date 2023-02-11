document.querySelector("#restSignupForm").addEventListener("submit",e=>{
    e.preventDefault();
    const restSignupObj = {
        name:document.querySelector("#restSignupName").value,
        email:document.querySelector("#restSignupEmail").value,
        password:document.querySelector("#restSignupPassword").value,
        open_time:document.querySelector("#opentime").value,
        close_time:document.querySelector("#closetime").value
    }
    console.log(restSignupObj);
    alert("Welcome! Now you may sign-in");
   location.href="/restaurantLogin";
})