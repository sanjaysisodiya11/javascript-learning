//generate random color Hexa code

const generateRandom = function() {
    let color = "#";
    let hexCodeString = "0123456789ABCDEF";
    for(let i = 0; i<6; i++)
    {
        color = color + hexCodeString[Math.floor(Math.random()*16)]
    }
    return color;
}


let changeColorId;
const startChangeColor = function(){

    function changeColor(){
        document.body.style.backgroundColor = generateRandom();
    }
    if(changeColorId==null)
    {
        changeColorId = setInterval(changeColor,1000);
    }
    
}
document.querySelector('#start').addEventListener('click',startChangeColor);


const stopChangeColor = function(){
    console.log('stop change color')
    clearInterval(changeColorId);
    changeColorId = null;
}

document.querySelector('#stop').addEventListener('click',stopChangeColor);
