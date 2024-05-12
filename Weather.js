const deg = document.querySelector("#head");
const para = document.querySelector("#para");
const para2 = document.querySelector("#para2");

const API_KEY = '22923e12eec082e5f8938eac75ebe3a3';



const weather = async (city) => {
    try{
    const url = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(data.main.temp);
    let temp = data.main.temp;
    console.log(data.name);
    let name=data.name;
    console.log(data.weather[0].description);
    deg.innerHTML = temp;
    para.innerHTML=name;
    para2.innerHTML=data.weather[0].description;
    }
    catch(err){
        alert("Enter Valid city");
    }
}

let cit;
function deva() {
    cit = document.getElementById("ip").value;
    console.log(cit);
    weather(cit);
}