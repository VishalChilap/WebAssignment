

function fn(e){

    e.preventDefault();

    var amountRef = document.getElementById('amount');

    var peopleRef = document.getElementById('people');

    var selectRef = document.getElementById('select');

    console.log(selectRef.value);

    var amount;

    if(selectRef.value==30){
        amount = amountRef.value*0.3;
    }
    else if(selectRef.value==20){
        amount = amountRef.value*0.2;
    }
    else if(selectRef.value==10){
        amount = amountRef.value*0.1;
    }
    else if(selectRef.value==5){
        amount = amountRef.value*0.05;
    }

    amount = amount/peopleRef.value;

    var disRef = document.getElementById('dis');

    disRef.innerText = "$ "+amount;

    // amountRef.value = "";

    // peopleRef.value = "";
}