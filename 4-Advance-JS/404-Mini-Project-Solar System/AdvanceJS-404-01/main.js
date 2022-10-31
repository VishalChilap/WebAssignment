

function fn(){

    var inputRef = document.getElementById('mass');
    var selectRef = document.getElementById('planet');
    var imgRef = document.getElementById('img');
    var spanRef = document.getElementById('span');
    var result = document.getElementById('resultWeight');

    document.getElementById('div').style.display = 'flex'
    document.getElementById('div').style.justifyContent = 'center'
    document.getElementById('div').style.alignItems = 'center'

    var ans;

    if(selectRef.value==='Earth'){
        imgRef.src = './ProjectImage/earth.png';

        ans = inputRef.value*9.80665;

        result.innerText = ans+"N";

        spanRef.innerText = 'Earth';
    }
    else if(selectRef.value==='Jupiter'){
        imgRef.src = './ProjectImage/jupiter.png';

        ans = 2.53*inputRef.value*9.80665;

        result.innerText = ans+"N";

        spanRef.innerText = 'Jupiter';
    }
    else if(selectRef.value==='Mars'){
        imgRef.src = './ProjectImage/mars.png';

        ans = 0.38*inputRef.value*9.80665;

        result.innerText = ans+"N";

        spanRef.innerText = 'Mars';
    }
    else if(selectRef.value==='Mercury'){
        imgRef.src = './ProjectImage/mercury.png';

        ans = 0.38*inputRef.value*9.80665;

        result.innerText = ans+"N";

        spanRef.innerText = 'Mercury';
    }
    else if(selectRef.value==='Moon'){
        imgRef.src = './ProjectImage/moon.png';

        ans = 0.17*inputRef.value*9.80665;

        result.innerText = ans+"N";

        spanRef.innerText = 'Moon';
    }
    else if(selectRef.value==='Neptune'){
        imgRef.src = './ProjectImage/neptune.png';

        ans = 1.14*inputRef.value*9.80665;

        result.innerText = ans+"N";

        spanRef.innerText = 'Neptune';
    }
    else if(selectRef.value==='Pluto'){
        imgRef.src = './ProjectImage/pluto.png';

        ans = 1.14*inputRef.value*9.80665;

        result.innerText = ans+"N";

        spanRef.innerText = 'Pluto';
    }
    else if(selectRef.value==='Saturn'){
        imgRef.src = './ProjectImage/saturn.png';

        ans = 1.06*inputRef.value*9.80665;

        result.innerText = ans+"N";

        spanRef.innerText = 'Saturn';
    }
    else if(selectRef.value==='Uranus'){
        imgRef.src = './ProjectImage/uranus.png';

        ans = 0.89*inputRef.value*9.80665;

        result.innerText = ans+"N";

        spanRef.innerText = 'Uranus';
    }
    else if(selectRef.value==='Venus'){
        imgRef.src = './ProjectImage/venus.png';

        ans = 0.90*inputRef.value*9.80665;

        result.innerText = ans+"N";

        spanRef.innerText = 'Venus';
    }
}