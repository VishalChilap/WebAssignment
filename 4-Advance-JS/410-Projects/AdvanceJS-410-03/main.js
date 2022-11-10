var resultRef = document.getElementById('result');

function fn(){
    var inputRef = document.getElementById("input");
    // console.log(inputRef.value);

    var serch = inputRef.value;

    // console.log(serch.length);
    if(serch.length===0){
        resultRef.style.display = "none";
        resultRef.innerHTML = "";
        return
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${serch}`).then(
        function(success){
            return success.json();
        }
    ).then(
        function(success){
            // console.log(success);
            resultRef.style.display = "flex";
            resultRef.innerHTML = "";
           
            success.meals.forEach(function(ele){

                let divRef = document.createElement('div');
                let imageRef = document.createElement('img');
                let pRef = document.createElement('p');

                imageRef.src = ele.strMealThumb;
                pRef.innerHTML = ele.strMeal;

                divRef.appendChild(imageRef);
                divRef.appendChild(pRef);

                resultRef.appendChild(divRef);
            })
        }
    )
}