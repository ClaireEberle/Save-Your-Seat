document.querySelector("#viewresBtn").addEventListener("click",e=>{
    e.preventDefault();
 location.href='/viewReservations'
})

   //TODO:display reservations on page

   document.querySelector("#updateMenuBtn").addEventListener("click",e=>{
    e.preventDefault();
 location.href="/updateMenu"
})

//TODO: Create menu page with update options

document.querySelector("#updateTablesBtn").addEventListener("click",e=>{
    e.preventDefault();
 location.replace('/updateTables')
})