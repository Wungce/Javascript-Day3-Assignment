const page_wrapper = document.createElement('div');

document.body.appendChild(page_wrapper);


// Create trshirtButton of button.
const tshirtButton = document.createElement('button');

document.body.appendChild(tshirtButton);

tshirtButton.innerHTML = "Tshirt 50%";

tshirtButton.addEventListener("click",somethingdo);

tshirtButton.setAttribute("value", "Tshirt 50%");



// Create pantButton of button.
const pantButton = document.createElement('button');

document.body.appendChild(pantButton);

pantButton.innerHTML = "Pant 30%";

pantButton.addEventListener("click",somethingdo);

pantButton.setAttribute("value", "Pant 30%");



//Create ballButton Of button.
const ballButton = document.createElement('button');

document.body.appendChild(ballButton);

ballButton .innerHTML = "Ball 2%";

ballButton.addEventListener("click",somethingdo);

ballButton.setAttribute("value", "Ball 2%");



//Create vollyballButton of button.
const volleyballButton = document.createElement('button');

document.body.appendChild(volleyballButton);

volleyballButton.innerHTML = "ValleyBall 0%";

volleyballButton.addEventListener("click",somethingdo);

volleyballButton.setAttribute("value", "ValleyBall 0%");


  

  //create function 
function totalButton(name, price, discount){

    console.log("Name " + name);

    console.log("Price:" + " " + price);

    console.log("Discount:" + " " + discount);


}


function somethingdo(event){

    if(event.target.value == "Tshirt 50%"){

        totalButton("Tshirt", 1000, 500);



    }else if(event.target.value == "Pant 30%"){

        totalButton("Pant", 2000, 1800);

    }else if(event.target.value == "Ball 2%") {

        totalButton("Ball", 500, 450);

    }else if(event.target.value == "ValleyBall 0%") {

        totalButton("ValleyBall", 3000, 3000);

    }else{

        console.log("Thank You for visiting.");
    }

}
  