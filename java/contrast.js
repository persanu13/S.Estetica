contrast=document.querySelector(".contrast");
elemente=document.querySelector("body");
i=document.querySelector(".contrast i");
box2=document.querySelector(".box2")

contrast.addEventListener("click", function(){
   
       
        elemente.classList.toggle("mystyle");
        contrast.classList.toggle("style2");
        i.classList.toggle("style3");
        $(".box2").toggleClass("style2");
        $(".box1 .linie").toggleClass("style2");
        $(".box1 h2").toggleClass("style4");
});
