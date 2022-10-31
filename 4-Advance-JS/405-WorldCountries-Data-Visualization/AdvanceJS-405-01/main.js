

function compare(a,b){
    if(a.population<b.population){
        return -1;
    }
    if(a.population>b.population){
        return 1;
    }
    return 0;
}
countries_data.sort(compare);
console.table(countries_data);

let countries = {};

let sorttable = [];

function lang(){
    countries_data.map((value)=>{
        value.languages.map((language)=>{
            if(countries[language]!=undefined){
                countries[language]=countries[language]+1;
            }
            else countries[language] = 1;
        })
    });

    for(var l in countries){
        sorttable.push([l,countries[l]]);
    }
    sorttable.sort(function(a,b){
        return b[1]-a[1];
    })
}

// console.log(sorttable);
lang();

function myFunction(){
    var table = document.getElementById("tableid");

    sorttable.map((value, ind)=>{
        table.insertRow(ind);

        let row = table.insertRow(ind);
        var cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        cell2.classList.add('middletd');

        var cell3 = row.insertCell(2);

        cell1.innerHtml = value[0];

        cell2.innerHtml = `<div class="tablediv" style="width: ${value[1]}%"></div>`;

        cell3.innerHtml = value[1];

    })


}

myFunction();

let worldpopulation = 7693165599;

var populationtable = document.getElementById('populationtable');

function table_population(){
    countries_data
}