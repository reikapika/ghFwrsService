'use strict';

let placeHolder = document.getElementsByClassName("result");
let fwrs = document.getElementById('display');

// Ajax call to server for a the user info
document.getElementById("submitbtn").addEventListener("click",
    function(evt){
        evt.preventDefault();
        let username = document.getElementById("username").value;

        $.ajax({
          type: "GET",
          url: "/search.json",
          success: resultHandler,
          data: {username:username},
        });
});

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

    }
}

// pass in Ajax result from server and toss them into the DOM with the a tag redirect
function displayFwrs(result){
    for(var j=0;j<result.fwrs.length;j++){
        let redi = document.createElement('a');
        let avat = document.createElement('img');
        fwrs.appendChild(redi);
        redi.appendChild(avat);
        avat.setAttribute("src", result.fwrs[j].avatar_url);
        redi.setAttribute("href", result.fwrs[j].html_url);
    }

}
