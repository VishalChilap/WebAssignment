// alert('hii');
// console.log(countries);

var resultRef = document.getElementById('result');
var h3Ref = document.getElementById('h3');
function fnStart(){

    var inputRef = document.getElementById('input');

    var temp = inputRef.value;

    var temp2 = temp.charAt(0).toUpperCase();

   temp = temp.replace(temp.charAt(0), temp2);

    // console.log(temp);

    var filter = countries.filter(function(ele){

        if(ele.startsWith(temp)){
            return true;
        }

        return false;

    });

    // console.log(filter.length);

    h3Ref.innerHTML = "Counties start with "+temp+" are "+filter.length;

    filter.forEach(function(ele){
        var divRef = document.createElement('div');
        var pRef = document.createElement('p');

        divRef.style.backgroundImage = "url(https://www.agiratech.com/wp-content/uploads/2020/02/Arc-GIS-world-imagery.jpg)";

        pRef.innerText = ele;

        divRef.appendChild(pRef)

        resultRef.appendChild(divRef);

        // console.log(ele);

    });
}

function empty(){
    resultRef.innerHTML = "";
    h3Ref.innerHTML = "";
}


function fnAny(){

    var inputRef = document.getElementById('input');

    var filter = countries.filter(function(ele){

        if(ele.includes(inputRef.value)){
            return true;
        }

        return false;

    });

    h3Ref.innerHTML = "Counties containing letter "+inputRef.value+" are "+filter.length;

    filter.forEach(function(ele){
        var divRef = document.createElement('div');
        var pRef = document.createElement('p');

        divRef.style.backgroundImage = "url(https://www.agiratech.com/wp-content/uploads/2020/02/Arc-GIS-world-imagery.jpg)";

        pRef.innerText = ele;

        divRef.appendChild(pRef);

        resultRef.appendChild(divRef);

        // console.log(ele);

    });

}