

function fn(e){

    e.preventDefault();
    document.getElementById('result').innerHTML = "";

    var inputRef = document.getElementById('input').value;

    fetch("https://api.github.com/users/" + inputRef).then((result) => result.json()).then((data) => {
        document.getElementById('result').style.display = "flex";
        document.getElementById("result").innerHTML = 
        ` <a target="_blank" href="https://github.com/${inputRef}"> <img src=${data.avatar_url} alt="No user found"/> <a/> <p>${inputRef}</p>`;
      }, function(success){});
}


document.getElementById('submit').addEventListener('submit', fn);