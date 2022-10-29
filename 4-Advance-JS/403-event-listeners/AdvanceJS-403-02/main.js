

var arr = document.getElementsByClassName('img');

console.log(arr);

for(var i=0;i<arr.length;i++){

    if(i==0){
        arr[i].addEventListener('click', function(){
            let a = new Audio('sounds/crash.mp3');
            a.play();
        }); 
    }
    else if(i==1){
        arr[i].addEventListener('click', function(){
            let a = new Audio('sounds/kick-bass.mp3');
            a.play();
        }); 
    }
    else if(i==2){
        arr[i].addEventListener('click', function(){
            let a = new Audio('sounds/snare.mp3');
            a.play();
        }); 
    }
    else if(i==3){
        arr[i].addEventListener('click', function(){
            let a = new Audio('sounds/tom-1.mp3');
            a.play();
        }); 
    }
    else if(i==4){
        arr[i].addEventListener('click', function(){
            let a = new Audio('sounds/tom-2.mp3');
            a.play();
        }); 
    }
    else if(i==5){
        arr[i].addEventListener('click', function(){
            let a = new Audio('sounds/tom-3.mp3');
            a.play();
        }); 
    }
    else if(i==6){
        arr[i].addEventListener('click', function(){
            let a = new Audio('sounds/tom-4.mp3');
            a.play();
        }); 
    }

}