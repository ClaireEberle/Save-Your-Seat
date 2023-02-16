const allRsv= document.querySelectorAll(".rsv-link")
console.log(allRsv)
for (let i =0; i<allRsv.length; i++){
    let rsvNo = allRsv[i].name
    console.log(rsvNo)
    allRsv[i].href=`/seereservation/${rsvNo}`
}