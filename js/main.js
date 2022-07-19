console.log('Working')
document.querySelector('#hot-searchBtn').addEventListener("click", search)

document.querySelector('#hot-searchBar').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
      // Enter pressed
	  search()
      return false;
    }
  }

function search(){
    const searchTerms = document.querySelector('#hot-searchBar').value
    const result = fetch("/api/"+searchTerms)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        document.querySelector('#msg').hidden = false
        document.querySelector('#hTitle').innerText = "Hotel Name: " + data[0].name;
        document.querySelector('#hAddress').innerText = "Hotel Address: " + data[0].address;
        document.querySelector('#hCity').innerText = "Hotel City: " + data[0].city;
        document.querySelector('#hPhone').innerText = "Hotel Phone: " + data[0].phone;
    })
    .catch(err=> console.log(`Error: ${err}.`))

}