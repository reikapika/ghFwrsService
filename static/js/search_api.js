'use strict';

let placeHolder = document.getElementsByClassName("result");
let fwrs = document.getElementById('display');
let submitBtn = document.getElementById("submitbtn");
let clicked = false;

function submitSuccess(evt){
    evt.preventDefault();
    let username = document.getElementById("username").value;
// Ajax call to server for a the user info
    $.ajax({
      type: "GET",
      url: "/search.json",
      success: resultHandler,
      data: {username:username},
    });
}

submitBtn.addEventListener("click", submitSuccess);
submitBtn.removeEventListener("click", submitSuccess);

// Callback for successful Ajax
function resultHandler(result){

    let msg = document.getElementById('msg');

    if(result.result == 'Null'){
        // console.log(msg);
        msg.innerHTML = "<strong>Oops! User not exist.</strong> Please confirm the username and try again."
        $(".alert").addClass("alert-warning");
    } else if(result.reuslt == 'Error'){
        msg.innerHTML = "<strong>Sorry! Something's wrong with internal server. Please come back later.</strong>"
        $(".alert").addClass("alert-danger");
    } else {
        document.getElementById("info").innerHTML = "Github Handle: " + result.user.login;
        document.getElementById("count").innerHTML = "Followers Count: " + result.user.followers;
        displayFwrs(result);
        loadMore(result);
    }

}

// pass in Ajax result from server and toss them into the DOM with the a tag redirect
function displayFwrs(result){

    for(let j=0;j<result.fwrs.length;j++){
        let redi = document.createElement('a');
        let avat = document.createElement('img');
        fwrs.appendChild(redi);
        redi.appendChild(avat);
        avat.setAttribute("src", result.fwrs[j].avatar_url);
        redi.setAttribute("href", result.fwrs[j].html_url);
    }

}

function loadMore(result){
  //maximum payload is equivalent to total followers count divided by 30 which is the limit of each fetch
    let max_page = Math.ceil(result.user.followers / 30);
    let page = 2;

    document.getElementById('load').addEventListener('click',
        function(evt){
            console.log(result.user.followers_url);
            page += 1;

            $.get(result.user.followers_url, { 'page': page }, function(result){
                      for(let j=0;j<result.length;j++){
                          let redi = document.createElement('a');
                          let avat = document.createElement('img');
                          fwrs.appendChild(redi);
                          redi.appendChild(avat);
                          avat.setAttribute("src", result[j].avatar_url);
                          redi.setAttribute("href", result[j].html_url);
                      }
            });

    });

}
