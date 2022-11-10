


var formRef = document.getElementById('form');
var resultRef = document.getElementById('result');
var key = 'e76efb1180637439401c4fd3c9966c89';


function fn(e){
    e.preventDefault();
    var inputRef = document.getElementById('input').value;
    console.log(inputRef);
    resultRef.innerHTML = "";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputRef}&appid=${key}`).then(
        function(success){
           return success.json();
        },function(error){}
    ).then(
        function(success){
            // console.log(success);
            // console.log(success.name);
            resultRef.style.display = 'block'

            let hedRef = document.createElement('p');
            hedRef.classList.add('city');
            let condition = document.createElement('p');
            condition.classList.add('condition')
            let temp = document.createElement('p');
            temp.classList.add('temp');
            let speed = document.createElement('p');
            speed.classList.add('speed');

            var city = success.name;
            var co = success.weather[0].description;
            var te = success.main.temp-273;
            var sp = success.wind.speed;

            hedRef.innerHTML = 'Weather of '+`<span>${city}</span>`;
            condition.innerHTML = 'Sky Condition: '+`<span>${co}</span>`;
            temp.innerHTML = 'Tempreture: '+`<span>${te} C</span>`;
            speed.innerHTML = 'Wind Speed: '+`<span>${sp} kh/h</span>`;

            resultRef.appendChild(hedRef);
            resultRef.appendChild(condition);
            resultRef.appendChild(temp);
            resultRef.appendChild(speed);
        },function(error){}
    )
}


formRef.addEventListener('submit', fn);

function empty(){
    resultRef.innerHTML = "";
    resultRef.style.display = 'none';
}