var movement = ["top","right","left"];
var randomPosition = positionGenerator();

document.querySelector(".no").addEventListener("mouseover",function(){
   
   document.querySelector(".no").classList.add(randomPosition);

   document.querySelector(".no").addEventListener("mouseover",function(){

    document.querySelector(".no").classList.remove(randomPosition);
    randomPosition = positionGenerator();
    document.querySelector(".no").classList.add(randomPosition);
    
 });

});

document.querySelector(".yes").addEventListener("click",function(){
    document.querySelectorAll("button")[0].classList.add("hidden");
    document.querySelectorAll("button")[1].classList.add("hidden");
    document.querySelector("h1").innerHTML = "I know you are.";

}); 

document.querySelector(".no").addEventListener("click",function(){

    this.innerHTML = "Nonce.";

    document.querySelectorAll("button")[0].classList.add("hidden");

    document.querySelector("h1").innerHTML = "You are a";

});

function positionGenerator(){

    var randomNumber = Math.round(Math.random()*2);

    return movement[randomNumber];;

}