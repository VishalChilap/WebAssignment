function fn(e){

    document.getElementById('keycode').innerText = e.code;

    document.getElementById('key').innerText = e.key;

    console.log(e.code, e.key);
}