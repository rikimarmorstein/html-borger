let totalPriceSpan = document.getElementById("totalPrice");
// let totalPrice = Number(totalPriceSpan.textContent);

const meetPrice = 5;
const lettucePrice = 2;
const eggPrice = 4;
const onionPrice = 1;
let sumMeetRegular=0;
let sumMeetVegetarian=0;
let sumMeetVegan=0;
let sumOnion=0;
let sumEgg=0;
let sumLettuce=0;
let c=0;
// let c=0;
 function addAllMeet(){
  // }
  if(document.getElementById('regular').checked) {
        // c++;
        // console.log(c);
        addMeetRegular();
}else if(document.getElementById('vegetarian').checked) {

  addMeetVegetarian() 
}else{
  addMeetVegan() 
}
 }
 
function addMeetRegular() {
  // let a = document.getElementById("hobbies");
  // console.log(a);
  // console.log(c);
  //    while (c>0) {
        let meetDiv =  document.getElementById("meetImages");
        let meetImg = document.createElement("img");
        meetImg.src = "./images/meet.png";
        meetImg.alt = "meet";
        meetDiv.appendChild(meetImg);
        let currentTotalPrice = Number(totalPriceSpan.textContent);
        totalPriceSpan.innerHTML = (currentTotalPrice + meetPrice);
        sumMeetRegular=sumMeetRegular+1;
      //         c--;
      //  }
      }
      function addMeetVegetarian() {
        // let a = document.getElementById("hobbies");
        // console.log(a);
        // console.log(c);
        //    while (c>0) {
              let meetDiv =  document.getElementById("meetImages");
              let meetImg = document.createElement("img");
              meetImg.src = "./images/meet.png";
              meetImg.alt = "meet";
              meetDiv.appendChild(meetImg);
              let currentTotalPrice = Number(totalPriceSpan.textContent);
              totalPriceSpan.innerHTML = (currentTotalPrice + meetPrice);
              sumMeetVegetarian=sumMeetVegetarian+1;
            //         c--;
            //  }
            }
            function addMeetVegan() {
              // let a = document.getElementById("hobbies");
              // console.log(a);
              // console.log(c);
              //    while (c>0) {
                    let meetDiv =  document.getElementById("meetImages");
                    let meetImg = document.createElement("img");
                    meetImg.src = "./images/meet.png";
                    meetImg.alt = "meet";
                    meetDiv.appendChild(meetImg);
                    let currentTotalPrice = Number(totalPriceSpan.textContent);
                    totalPriceSpan.innerHTML = (currentTotalPrice + meetPrice);
                    sumMeetVegan=sumMeetVegan+1;
                  //         c--;
                  //  }
                  }
function removeRegular() {
  let meetDiv =  document.getElementById("meetImages");
  if (meetDiv.childElementCount > 0) {
    meetDiv.removeChild(meetDiv.lastElementChild);
    let currentTotalPrice = Number(totalPriceSpan.textContent);
    totalPriceSpan.innerHTML = (currentTotalPrice - meetPrice);
    sumMeetRegular=sumMeetRegular-1;

  }

}
function removeVegetarian() {
  let meetDiv =  document.getElementById("meetImages");
  if (meetDiv.childElementCount > 0) {
    meetDiv.removeChild(meetDiv.lastElementChild);
    let currentTotalPrice = Number(totalPriceSpan.textContent);
    totalPriceSpan.innerHTML = (currentTotalPrice - meetPrice);
    sumMeetVegetarian=sumMeetVegetarian-1;

  }

}
function removeVegan() {
  let meetDiv =  document.getElementById("meetImages");
  if (meetDiv.childElementCount > 0) {
    meetDiv.removeChild(meetDiv.lastElementChild);
    let currentTotalPrice = Number(totalPriceSpan.textContent);
    totalPriceSpan.innerHTML = (currentTotalPrice - meetPrice);
    sumMeetVegan=sumMeetVegan-1;

  }

}
function addLettuce() {
  let lettuceDiv =  document.getElementById("lettuceImages");
  let lettuceImg = document.createElement("img");
  lettuceImg.src = "./images/lettuce.png";
  lettuceImg.alt = "lettuce";
  lettuceDiv.appendChild(lettuceImg);
  let currentTotalPrice = Number(totalPriceSpan.textContent);
  totalPriceSpan.innerHTML = (currentTotalPrice + lettucePrice);
  sumLettuce=sumLettuce+1;

}

function removeLettuce() {
  let lettuceDiv =  document.getElementById("lettuceImages");
  if (lettuceDiv.childElementCount > 0) {
    lettuceDiv.removeChild(lettuceDiv.lastElementChild);
    let currentTotalPrice = Number(totalPriceSpan.textContent);
    totalPriceSpan.innerHTML = (currentTotalPrice - lettucePrice);
    sumLettuce=sumLettuce-1;

  }
}
  function addEgg() {
    let eggDiv =  document.getElementById("eggImages");
    let eggImg = document.createElement("img");
    eggImg.src = "./images/egg.png";
    eggImg.alt = "egg";
    eggDiv.appendChild(eggImg);
    let currentTotalPrice = Number(totalPriceSpan.textContent);
    totalPriceSpan.innerHTML = (currentTotalPrice + eggPrice);
    sumEgg=sumEgg+1;

  }
  
  function removeEgg() {
    let eggDiv =  document.getElementById("eggImages");
    if (eggDiv.childElementCount > 0) {
      eggDiv.removeChild(eggDiv.lastElementChild);
      let currentTotalPrice = Number(totalPriceSpan.textContent);
      totalPriceSpan.innerHTML = (currentTotalPrice - eggPrice);
      sumEgg=sumEgg-1;

    }
  
}
function addOnion() {
  let onionDiv =  document.getElementById("onionImages");
  let onionImg = document.createElement("img");
  onionImg.src = "./images/onion.png";
  onionImg.alt = "egg";
  onionDiv.appendChild(onionImg);
  let currentTotalPrice = Number(totalPriceSpan.textContent);
  totalPriceSpan.innerHTML = (currentTotalPrice + onionPrice);
  sumOnion = sumOnion+1;
}

function removeOnion() {
  let onionDiv =  document.getElementById("onionImages");
  if (onionDiv.childElementCount > 0) {
    onionDiv.removeChild(onionDiv.lastElementChild);
    let currentTotalPrice = Number(totalPriceSpan.textContent);
    totalPriceSpan.innerHTML = (currentTotalPrice - onionPrice);
    sumOnion = sumOnion-1;

  }

}
let endFail ="Must choose a main ingredient";
let endSeccessuly ="Your order has been successfully received";
function sum(){
  document.getElementById("End").innerHTML=
  "<table style='background-color: rgb(238, 188, 79); border: 1px dotted black;'>"+"<tr >"+"<td>"+
  sumMeetRegular +"</td>"+"<td>" +" Regular"+"</td>"+
      "</tr>"+
      "<tr>"+"<td>"+
      sumMeetVegetarian +"</td>"+"<td>" +" Vegetarian"+"</td>"+
      "</tr>"+
      "<tr>"+"<td>"+
      sumMeetVegan +"</td>"+"<td>" +" Vegan"+"</td>"+
      "</tr>"+
      "<tr>"+"<td>"+
      sumLettuce +"</td>"+"<td>" +" lettuce"+"</td>"+
      "</tr>"+
      "<tr>"+"<td>"+
      sumEgg +"</td>"+"<td>" +" egg"+"</td>"+
      "</tr>"+
      "<tr>"+"<td>"+
      sumOnion +"</td>"+"<td>" +" onion"+"</td>"+
      "</tr>"
      // +sumMeetVegetarian +" Vegetarian"+"<br>"+
      // sumMeetVegan +" Vegan"+"<br>"+

      // sumLettuce +" lettuce"+
      // "<br>"+sumEgg +" egg"+"<br>"+sumOnion +" onion"</table>;
}
function end(){
  let meetDiv =  document.getElementById("meetImages");
  if(meetDiv.childElementCount<1){
    document.getElementById("failedEnd").innerHTML=endFail;
      } else{  
       
      document.getElementById("failedEnd").innerHTML=endSeccessuly +
      sum();
      // "<br>"+sumMeetRegular +" Regular"+"<br>"
      
      // "<br>"+sumMeetVegetarian +" Vegetarian"+"<br>"+
      // "<br>"+sumMeetVegan +" Vegan"+"<br>"+

      // sumLettuce +" lettuce"+
      // "<br>"+sumEgg +" egg"+"<br>"+sumOnion +" onion";
     }
}
