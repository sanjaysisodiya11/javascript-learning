const clock = document.getElementById('clock');
//console.log(clock)

//const date = new Date();
//console.log(date.toLocaleTimeString())

// for display time
setInterval(function(){
   const date = new Date();
   clock.textContent = date.toLocaleTimeString();
},1000);
