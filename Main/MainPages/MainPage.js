
let cycleThroughElements = [
    '<h1 id = "changedElement">This is h1!</h1>',
    '<h2 id = "changedElement">This is h2!</h2>',
    '<h3 id = "changedElement">This is h3!</h3>',
    '<h4 id = "changedElement">This is h4!</h5>',
    '<h5 id = "changedElement">This is h5!</h5>',
    '<p id = "changedElement">This is p!</p>'

]



let i = 0;

let cycleForward = () => {
        document.getElementById("firstDiv").innerHTML = cycleThroughElements[i];
        if(i === cycleThroughElements.length-1){
            i = 0;
        }else{
            i++;
        }        
    }

let cycleBack = () => {
        document.getElementById("firstDiv").innerHTML = cycleThroughElements[i];
        if(i === 0){
            i = cycleThroughElements.length-1;
        }else{
            i--;
        }        
    }

    let cycleRandom = () => {
        
        document.getElementById("firstDiv").innerHTML = cycleThroughElements[Math.floor(Math.random() * cycleThroughElements.length)];
             
    }

    function mouseOver() {
        document.getElementById("linkToAvorlion").style.color = "white";
        document.getElementById("linkToAvorlion").style.textDecoration = "underline";
      }
      
      function mouseOut() {
        document.getElementById("linkToAvorlion").style.color = "black";
        document.getElementById("linkToAvorlion").style.textDecoration = "none";
      }





