console.log('Hello World!');


function myClock(){
  
  
  var myTime = new Date();
  
  var hr,min = (myTime.getMinutes() < 10 ) ? "0" + myTime.getMinutes() : myTime.getMinutes(),
      sec = (myTime.getSeconds() < 10 ) ? "0" + myTime.getSeconds() : myTime.getSeconds(),
      fMt = (myTime.getHours() <= 12 ) ? "🌥️" : "☁️";
      
  if (myTime.getHours === 0) {
    hr = 12 ;
  }
  
  else if(myTime.getHours() > 12){
    hr = myTime.getHours() - 12 ;
  }
  else{
    hr = myTime.getHours();
  }
  
  
  var myHr = hr ;
  var myMn = min  ;
  var mySe = sec + " " ;
  
  var conTj = fMt ;
  
  document.getElementsByClassName('hrt')[0].innerHTML = myHr ;
  document.getElementsByClassName('mnt')[0].innerHTML = myMn ;
  document.getElementsByClassName('sct')[0].innerHTML = mySe ;
  document.getElementsByClassName('ampm')[0].innerHTML = conTj ;
  
  
  var myDy = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  
      myMt = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      
      myDt = myTime.getDate() ;
      
  var cdtu = myDy[myTime.getDay()] + ", " + myMt[myTime.getMonth()] + " " + myDt ;
  
  document.getElementsByClassName('dfb')[0].innerHTML = cdtu ;
  
}

myClock();

setInterval(function() {
  myClock();
}, 1000);



//  var cuRd = myDay[myDate.getDay()] + ", " + myMonth[myDate.getMonth()] + " " + day ;
