const apiKey = "269f87ecaa7fa9471b94f39745a161c5";

document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();
  const userInput = document.querySelector("#inputCity").value;
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=metric`;
  getData(apiURL);
});

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  displayData(data);
}

function displayData(data) {
  // Display
  if (document.querySelector(".display")) {
    document.querySelector(".display").remove();
  }

  const tempContainer = document.createElement("div");
  tempContainer.classList.add("display");
  const template = `
  <p>Weather in <span id="name">${data.name}</span></p>
  <p>Temperature <span id="temp">${data.main.temp}C°</span></p>
  <p>Feels like ${data.main.feels_like}C°</p>
  <p>Wind speed ${data.wind.speed}</p>
  <p> Today you'll see a <span id="description">${data.weather[0].description}</span></p>
  `;
  tempContainer.innerHTML = template;

  document.querySelector(".output").appendChild(tempContainer);
}
