// const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
// .then((res) => {
//   console.log(res);
//   return res.json();
// })
// .then(data => {
//     console.log(data[0]);
//     document.write(data[0].email)
//     return data[0];
// });

// let fetchUrl = async () =>{
//     const url2 = await fetch(url);
//     const jsonData = await url2.json();
//     console.log(jsonData);
//     const data = jsonData;
//     console.log(data[0].name)
// }

// fetchUrl()

const weather = {
  apiKey: "14638bc28adc3ee1c8960e1a5a42bc36",
  url: "http://api.openweathermap.org/data/2.5/weather?q=",
};

// const e = "andheri";

// function getWeatherReport(e){
// fetch(`${weather.url}${e}&APPID=${weather.apiKey}&units=metric`)
// .then((res) => {
//   console.log(res);
//   return res.json()
// })
//   .then(data =>{
//     console.log(data.main.temp)
//   })
// }

// getWeatherReport(e);
// const xhr = new XMLHttpRequest();


const city = document.getElementById("city");
const btn = document.getElementById("btn");
// console.log(btn)
const cityName = document.getElementById("cityName");
const cityTemp = document.getElementById("cityTemp");


btn.addEventListener("click", (e)=>{
  e.preventDefault();
  console.log(city.value);
  cityName.innerHTML = city.value;
  getWeatherData(`${city.value}`);
  // console.log("you clicked")
})

async function getWeatherData(city){
  const url = await fetch(`${weather.url}${city}&APPID=${weather.apiKey}&units=metric`)
  const data = await url.json();
  console.log(data)
  const weatherData = data;
  cityTemp.innerHTML = `${weatherData.main.temp}°C ${weatherData.sys.country}`;
}
