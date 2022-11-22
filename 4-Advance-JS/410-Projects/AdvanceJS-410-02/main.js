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

                    // let audio = document.createElement('audio');

                    // audio.classList.add('audio')

                    // audio.src = "https://media.merriam-webster.com/audio/prons/en/us/mp3/p/pajama02.mp3";

                    // resultRef.appendChild(audio);

                    console.log(success[0].hwi.prs[0].sound.audio)

                    let temp = success[0].hwi.prs[0].sound.audio;

                    let ref;

                    if(temp.indexOf('bix')===0){
                        console.log('bix');
                        ref = 'bix';
                    }
                    else if(temp.indexOf('gg')===0){
                        console.log('gg');
                        ref = 'gg';
                    }
                    else if(temp.indexOf('0')===0 || temp.indexOf('1')===0 || temp.indexOf('2')===0 || temp.indexOf('3')===0
                    || temp.indexOf('4')===0 || temp.indexOf('5')===0 || temp.indexOf('6')===0 || temp.indexOf('8')===0
                    || temp.indexOf('9')===0 || temp.indexOf('7')===0 || temp.indexOf('_')===0){
                        console.log('number')
                        ref = 'number';
                    }
                    else{
                        console.log('letter');
                        ref = temp.charAt(0);
                    }

                    let a = new Audio(`https://media.merriam-webster.com/audio/prons/en/us/mp3/${ref}/${success[0].hwi.prs[0].sound.audio}.mp3`)
                    a.play();

                    

                }
            }, function(error){});

}

function empty(){
    resultRef.innerText = "";
    h3.innerText = "";

    console.log('called');
}


document.getElementById('form').addEventListener('submit', fn);