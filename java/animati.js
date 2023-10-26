anime.set('.text h2', {
   translateY:100,
   opacity:0,

  });
  anime.set('.text p', {
    translateY:100,
    opacity:0,
 
   });

anime.set('.cerc1', {
  background: 'var(--color3)',
  });
anime.set('.cerc2', {
  background: 'var(--color1)',
  }); 
anime.set('.cerc3', {
  background: 'var(--color1)',
  });

anime({
    targets: '.text h2',
    translateY:0,
    opacity:1,
    easing: 'linear',
    duration:700,
  });
  

anime({
    targets: '.text p',
    translateY:0,
    opacity:1,
    easing: 'linear',
    duration:500,
    delay:200,
  }); 


//animatie fake coment

 nr=1;

  sageata1=document.querySelector(".sageata");
  sageata2=document.querySelector(".sageata2");

  
sageata1.addEventListener("click", function(){
  target=".coment"+nr;
anime({
  targets:".coment",
  keyframes: [
    {translateX:"100%", duration: 300,},
    { translateX:"-100%",duration: 5,},
    { translateX:"0%", duration: 300,},
   
  ],
 
 
  easing: 'linear',
}); 
anime({
  targets:target,
  opacity:0,
  duration: 300,
  easing: 'linear',
}); 
target2=".cerc"+nr;

anime({
  targets:target2,
  background: 'var(--color1)',
  duration: 300,
  easing: 'linear',
  delay:350,
}); 

  if(nr==1){
    nr=3;
  }else{
    nr-=1;
  }
  target=".coment"+nr;
  target2=".cerc"+nr;
  anime({
    targets:target,
    opacity:1,
    duration: 300,
    easing: 'linear',
    delay:350,
  }); 

  anime({
    targets:target2,
    background: 'var(--color3)',
    duration: 300,
    easing: 'linear',
    delay:350,
  }); 
});





 

sageata2.addEventListener("click", function(){
  target=".coment"+nr;
  anime({
    targets:".coment",
    keyframes: [
      {translateX:"-100%", duration: 300,},
      { translateX:"+100%",duration: 5,},
      { translateX:"0%", duration: 300,},
     
    ],
   
   
    easing: 'linear',
  }); 
  anime({
    targets:target,
    opacity:0,
    duration: 300,
    easing: 'linear',
  }); 
  target2=".cerc"+nr;

anime({
  targets:target2,
  background: 'var(--color1)',
  duration: 300,
  easing: 'linear',
  delay:350,
}); 
  if(nr==3){
    nr=1;
  }else{
    nr+=1;
  }
  target=".coment"+nr;
  target2=".cerc"+nr;
  anime({
    targets:target,
    opacity:1,
    duration: 300,
    easing: 'linear',
    delay:350,
  }); 
  anime({
    targets:target2,
    background: 'var(--color3)',
    duration: 300,
    easing: 'linear',
    delay:350,
  }); 
});




var nr2 = 1;
Redare();
setInterval(Redare , 5700,)

function Redare(){
       $(".imagini").attr("src", "imagini/img" + nr2 + ".jpeg");

       if(nr2==13){
         nr2 = 1;
       }else{
         nr2 +=1;
       }
  anime.set('.imagini', {
   translateX:"-110%",
   scale:0.9,
  });
  anime({
    targets: '.imagini',
    keyframes:[
       {translateX: "0%",duration:2000},
       {scale:1,duration:600,},
       {scale:0.9,duration:600,delay:2000,},
       {translateX: "150%",duration:2000},
    ],
    elasticity: 500,  
  });           
}






