document.querySelector("#restSignupForm").addEventListener("submit",e=>{
    e.preventDefault();
    const restSignupObj = {
        restaurant_name:document.querySelector("#restSignupName").value,
        open_time:document.querySelector("#opentime").value,
        close_time:document.querySelector("#closetime").value,
        table_capacity:document.querySelector("#maxtable").value,
        email:document.querySelector("#restSignupEmail").value,
        password:document.querySelector("#restSignupPassword").value
       
        
    }
    fetch("/api/owner/",{ 
        method:"POST",
        body:JSON.stringify(restSignupObj),
        headers:{
            "content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            alert("Welcome! You have created a profile");
            location.href="/restaurantLogin"
        }else{
            console.log(restSignupObj);
            alert("wrong email or password")
        }
    })
    
})