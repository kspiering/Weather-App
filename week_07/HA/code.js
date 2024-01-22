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
  // Display temperature
  const tempContainer = document.createElement("div");
  tempContainer.classList.add("display");
  tempContainer.innerHTML = `
  <p>Weather in ${data.name}</p>
  <p>Temperature ${data.main.temp}C°</p>
  <p>Feels like ${data.main.feels_like}C°</p>
  <p>Wind speed ${data.wind.speed}</p>
  `;
  document.querySelector(".output").appendChild(tempContainer);
}
