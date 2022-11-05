

// alert('hiii');

// console.log(emojiList);

var inputRef = document.getElementById('input');
var tableRef = document.getElementById('table');

function fn(){

    tableRef.innerHTML = "";
}

function serch(event){

    event.preventDefault();

    display(inputRef.value);
}

function display(ans){

    var filter = emojiList.filter(function(e){
        if(e.description.indexOf((ans))>=0){
            return true;
        }

        if(e.aliases.some(function(elem){
            if(elem.startsWith(ans)){
                return true;
            }
        })){
        
            return true;

        };
    });

    filter.forEach(function(vis){

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');

        td1.innerHTML = vis.emoji;
        td2.innerHTML = vis.aliases.join(',');
        td3.innerHTML = vis.description;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tableRef.appendChild(tr);


    });

}

display("");