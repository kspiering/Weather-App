const apiKey = "269f87ecaa7fa9471b94f39745a161c5";

document.querySelector("#wetter").addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = document.querySelector("#inputCity").value;
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=metric`;
  getData(apiURL);
});

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
}
