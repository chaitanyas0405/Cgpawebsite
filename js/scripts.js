/*!
* Start Bootstrap - One Page Wonder v6.0.3 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function cgpa() {
        var x = document.getElementById("myNumber").value;
        document.getElementById("demo1").innerHTML = x;
        var percentage=(x*9.4);
        window.alert("Submitted CGPA,Please Wait Your marks are displaying on screen");
       // document.write("Your percentage is",percentage)
        document.getElementById("demo1").innerHTML =
      "Your Percentage is " + percentage;
      window.alert("Before seeing Your Percentage my humble request to you : Please Scroll down and see our another website")
        
      }
      let timer = setTimeout(delayedFunction, 2000);
function myFunction() {
  window.alert("Hi buddy :)")
    var person = prompt("Please enter your name", "Name");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "<b>Hello </b>" + person + "<b>! Thanks For coming here' <3!</b>";    
      }
  }
 /* function about(){
      document.writeln("Hi,I am Chaitanya Giram Engineering student of well known Engineerin College.")
      document.writeln("This is m second time where i am building website by my own.For more you can visit to my linkedin.")
  }*/
  function ShowAndHide() {
    var x = document.getElementById('SectionName');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
document.querySelectorAll("img").forEach((item) => {
  item.addEventListener("click", (event) => {
    const image = event.target.getAttribute("data-src");
    event.target.setAttribute("src", image);
  });
});
