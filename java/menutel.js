meniutel=document.querySelector(".meniutel");
menutel=document.querySelector(".menutel");
body=document.querySelector("body");
tot=document.querySelector(".tot");
x=0;



    tot.addEventListener("click", function(){
        if(x==1){
    body.style.overflow="visible";
    tot.style.opacity="1";
    menutel.style.display="flex";
    meniutel.style.display="none";
    console.log("mere");
    x=0;
        }
});

menutel.addEventListener("click", function(){
    body.style.overflow="hidden";
    tot.style.opacity="0.9";
    menutel.style.display="none";
    meniutel.style.display="block";
    console.log(x);
    setTimeout(function(){ x=1; }, 100); 
});

$(".servicii").click(function(){
    $(".servici2").toggleClass("red");
  });


startTime();
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

