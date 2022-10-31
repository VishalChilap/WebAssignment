

function fn(){

    var inpuRef = document.getElementById('input');
    var bodyRef = document.getElementById('body');

    var trRef = document.createElement('tr');

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    td1.innerText = inpuRef.value;
    td2.innerHTML = `<button onClick="dataDelete(this)">Delete</button>`

    inpuRef.value = "";

    td1.style.fontSize = '18px';
    td1.style.fontWeight = '800';
    
    trRef.appendChild(td1);
    trRef.appendChild(td2);

    bodyRef.appendChild(trRef);
}

function dataDelete(e){
    e.parentElement.parentElement.remove();
}