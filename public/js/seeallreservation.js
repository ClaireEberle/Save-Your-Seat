const allRsv= document.links

for (let i =0; i<allRsv; i++){
    let rsvNo = allRsv[i].name
    allRsv[i].hrf=`/seereservation/${rsvNo}`
}