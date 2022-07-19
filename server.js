const express = require('express')
const app = express()
const fs = require('fs')
const csv=require('csvtojson');
const search = require("data-search")
const dataFile = "./data/tthotels.csv"
const PORT = 1800
let hotels = []
let hotelSearch

function readCSVtoSearch(){
    csv({delimiter:','})
    .fromFile(dataFile)
    .then((json)=>{
        json.forEach((row,i)=> {
            hotels.push(row);
            hotels[i].id = i+1;
        })
        processHotels(hotels);

        hotelSearch = search.dataSetGenerate({
            array: hotels, 
            nameId: 'id',
            attributes: ['name','address','city','website'],
            ignoreInTags:['hotel','resort','guesthouse']
        })
        //console.log(hotelSearch)
    })
}

function processHotels(hot){
    console.log(`\nHotels, Guesthouses and Resorts Included: ${hot.length}`)
    //hotels.forEach((h,i)=> console.log(`${h.id}: ${h.name}`));
}

readCSVtoSearch()

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/js/main.js', (request, response)=>{
    response.sendFile(__dirname + '/js/main.js')
})
app.get('/api/:hNameSearch', (request,response)=>{
    const hotelName = request.params.hNameSearch//.toLowerCase()
    console.log(hotelName)
    let results = search.search(hotelSearch, hotelName, false)
    console.log(results.result)
    response.send(JSON.stringify(results.result))
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`)
})