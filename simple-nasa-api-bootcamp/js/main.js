//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// create an event listiner for click

// set varibles for and url 
// fetch fuction
//fuction 1. pull user input display image and description
document.querySelector('button').addEventListener('click', getPicture)

async function getPicture(){
 
  let dateInput = document.querySelector('input').value 
  let url = `https://api.nasa.gov/planetary/apod?api_key=0oYVAOXz5TwEXFSd0Q769o6hv52YKp5X9GtPUGTM&date=${dateInput}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.date 
      document.querySelector('img').src = data.hdurl
      document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
});
}
 
/* document.querySelector('h2').innerText = data.drinks[0].strDrink
document.querySelector('img').src = data.drinks[0].strDrinkThumb
document.querySelector('h3').innerText = data.drinks[0].strInstructions*/