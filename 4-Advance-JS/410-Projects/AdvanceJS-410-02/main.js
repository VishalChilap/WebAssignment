// alert('hii')

function fn(e){
    e.preventDefault();
    var inputRef = document.getElementById('input').value;
    // console.log(inputRef);

    getData(inputRef);

}

var key = "afba424c-f2da-469f-ba7d-d6563acbfd90"
var resultRef = document.getElementById('result');
let h3 = document.getElementById('h3');

function getData(inputRef){

    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${inputRef}?key=${key}`).then(
        function(sucess){
            // console.log(sucess);
            return sucess.json();
        }, function(error){}).then(
            function(success){
                console.log(success);
                resultRef.innerHTML = "";
                inputRef.innerHTML = "";
                if(typeof success[0]==='string'){
                    
                    h3.innerHTML = "Did you mean ?";
                    // resultRef.appendChild(h3);

                    success.forEach(function(ele){
                        let sugges = document.createElement('span');
                        sugges.classList.add('suggestion');
                        sugges.innerHTML = ele;

                        resultRef.appendChild(sugges);
                    });
                    return;
                    
                }
                else{
                    let p = document.createElement('p');
                    p.classList.add('defination');
                    p.innerHTML = success[0].shortdef[0];

                    resultRef.appendChild(p);

                    let audio = document.createElement('audio');

                    audio.classList.add('audio')

                    audio.src = "success[0].hwi.prs[0].sound.audio";

                    resultRef.appendChild(audio);
                }
            }, function(error){});

}

function empty(){
    resultRef.innerText = "";
    h3.innerText = "";

    console.log('called');
}


document.getElementById('form').addEventListener('submit', fn);