// document.querySelector("#custSignupForm").addEventListener("submit",e=>{
//     e.preventDefault();
//     const signupObj = {
//         // name:document.querySelector("#custSignupName").value,
//         email:document.querySelector("#custSignupEmail").value,
//         password:document.querySelector("#custSignupPassword").value
//     }
//     //TODO:Change for Sign-up
//     fetch("/api/user/",{
//         method:"POST",
//         body:JSON.stringify(signupObj),
//         headers:{
//             "content-Type":"application/json"
//         }
//     }).then(res=>{
//         if(res.ok){
//             location.href="/customers"
//         }else{
//             alert("sign-up failed")
//         }
//     })

// })