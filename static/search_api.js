'use strict';

console.log("hey");

const FWRS = {}
let placeHolder = document.getElementsByClassName("result");
let fwrs = document.getElementById('display');


document.getElementById("submitbtn").addEventListener("click",
    function(evt){
      let username = document.getElementById("username").value;
      evt.preventDefault();

      $.ajax({
        type: "GET",
        url: "/search.json",
        success: resultHandler,
        data: {username:username},
      });
  });


function resultHandler(result){
  document.getElementById("info").innerHTML = result.user.login;
  document.getElementById("count").innerHTML = result.user.followers;

  handleSuccess(result);
  }

function handleSuccess(result){
  for(var j=0;j<result.fwrs.length;j++){
    let redi = document.createElement('a');
    let avat = document.createElement('img');
    fwrs.appendChild(redi);
    redi.appendChild(avat);
    avat.setAttribute("src", result.fwrs[j].avatar_url);
    redi.setAttribute("href", result.fwrs[j].html_url);
  }
  
}
