function saywelcome (){
alert("welcome to kim bakery")
}
function changeText(){
    document.getElementById(message).innerHTML="order your delicious cake today!";
}


function openTab(tabName){
    const tabs =document.querySelectorAll(".tabcontent");
    tabs.forEach(tab=> tab.computedStyleMap.display="none");
    document.getElementById(tabName).style.display="block";
}
const modal =document.getElementById("modal");
document.getElementById("openmodal"). onclick=() =>{
    modal.style.display="block";
};
document.getElementById("close"). onclick =() => {
    modal.style.display ="none";
};

document.getElementById("myDiv").classList.add("fade-in");

const container = document.getElementById("container");

const newCard = document.createElement("div");
newCard.classList.add("card");
newCard.innerHTML = "<h3>New Item</h3>";

container.appendChild(newCard);

// lightbox
const image = document.querySelectorAll(".gallery-img");


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Get the modal
var  myModal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) 
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

  function openmodal(){
    document.getElementById('mymodal').style.display='black'
  }
function closemodal(){
  document.getElementById('mymodal').style.display='none'
}
var slideIndex= 1;
function currentslide(n){
  showslide(slideIndex+=n);
}
function showslide(n){
  var i;
  var slides =
  document.getElementsByClassName("myslides");
  if(n>slides.length) {slideIndex=1}
  if(n<1) {slideIndex=slides.length}
  for (i=0; i<slides.length; i+++) {
    slides[i].style.display="none"
  }
  slides[slideIndex-1].style.display="block"
  }









































































































