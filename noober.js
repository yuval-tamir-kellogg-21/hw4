async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides

for(i=0; i<json.length; i++) {
  
    if (json[i].length > 1) {
      levelOfService = "Noober Pool"
      borderColor = "border-gray-900"
    } else if (json[i][0].numberOfPassengers > 3) {
      levelOfService = "Noober XL"
      borderColor = "border-gray-900"
    } else if (json[i][0].purpleRequested = true) {
      levelOfService = "Noober Purple"
      borderColor = "border-purple-500"
    } else {
      levelOfService = "Noober X"
      borderColor = "border-gray-900"
    } 

  for(j=0; j<json[i].length; j++) {
    
    passengerName = json[i][j].passengerDetails.first + " " + json[i][j].passengerDetails.last
    phoneNumber = json[i][j].passengerDetails.phoneNumber
    pickupLocationLine1 = json[i][j].pickupLocation.address
    pickupLocationLine2 = json[i][j].pickupLocation.city + " " + json[i][j].pickupLocation.state + " " + json[i][j].pickupLocation.zip
    dropoffLocationLine1 = json[i][j].dropoffLocation.address
    dropoffLocationLine2 = json[i][j].dropoffLocation.city + " " + json[i][j].dropoffLocation.state + " " + json[i][j].dropoffLocation.zip
    numberOfPassengers = json[i][j].numberOfPassengers


    let outputElement = document.querySelector('.rides')
    outputElement.insertAdjacentHTML('beforeend', 
    
    `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
    </h1>

    <div class="border-4 ${borderColor} p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">(312) ${phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pickupLocationLine1}</p>
          <p>${pickupLocationLine2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${dropoffLocationLine1}</p>
          <p>${dropoffLocationLine2}</p>
        </div>
      </div>
    </div>
    `
    
    )


    }
  }
}

window.addEventListener('DOMContentLoaded', pageLoaded)

