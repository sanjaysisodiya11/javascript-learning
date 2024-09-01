const allButton  = document.querySelectorAll('.button');
const body = document.querySelector('body');

allButton.forEach(function(button){
    console.log(button);
    button.addEventListener("click",function(event){
        console.log(event)
        console.log(event.target);
        /* if(event.target.id==="grey")
        {
            body.style.backgroundColor = event.target.id;
        }else if(event.target.id==="white"){
            body.style.backgroundColor = event.target.id;
        }else if(event.target.id==="blue"){
            body.style.backgroundColor = event.target.id;
        }else{
            body.style.backgroundColor = event.target.id;
        } */
        switch (event.target.id) {
            case "grey":
                body.style.backgroundColor = event.target.id;
                break;
            case "white":
                body.style.backgroundColor = event.target.id;
                break;
            case "blue":
                body.style.backgroundColor = event.target.id;
                break;    
            default:
                body.style.backgroundColor = event.target.id;
                break;
        }
    });
})