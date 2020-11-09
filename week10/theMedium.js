let theBody = document.querySelector('body');
let theButton = document.querySelector("button");
let theTxt = document.querySelector('h2');
//
// triggering an event with a callback function
theButton.addEventListener('click', theContent);
theTxt.addEventListener('mouseover', mouseOver);
theTxt.addEventListener('mouseout', mouseOut);
theTxt.addEventListener('onmousedown',size1);

function theContent(){
 theBody.style.backgroundColor = 'pink';
 theBody.style.color = 'white';
 theTxt.style.fontFamily ='cursive';
 theTxt.style.textAlign='left';
 document.querySelector('h2').textContent = "shjdmansdnasjdijkdmkasdasdasmdkasdskadasmdakdmskdnksandaskjdnasjdnaksdjnasjnasdknaskdnkasdasdjknasdjnasdjsadnaskdsdjnasdk";
 
//  document.addEventListener('keydown', theEvent =>{    
//     if (theEvent.keyCode === 32){        
//     theTxt.textContent = "you pressed space";        
// }
// }

}

function size1() {
    // if (onmousedown(theButton)){
        document.querySelector("button").style.color="grey";
    // } 
    
}
function mouseOver() {
    document.querySelector("h2").style.color = "hotpink";
    document.querySelector("h1").style.color = "hotpink";
  }
  
  function mouseOut() {
    document.querySelector("h2").style.color = "lightcoral";
    document.querySelector("h1").style.color = "lightcoral";
  }

  function mouseDown() {
    document.querySelector("h2").style.color = "red";
  }
  
  function mouseUp() {
    document.querySelector("h2").style.color = "green";
  }