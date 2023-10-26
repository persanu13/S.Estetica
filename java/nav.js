navigatie=document.querySelector(".navigatie");
y=150;
x=0;
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > y || document.documentElement.scrollTop > y) {

    if(y>150) {navigatie.style.transform="translateY(-220px)";}else{};
     
     y=document.documentElement.scrollTop;
  } else {y=document.documentElement.scrollTop+1;
    if(y>150){
    navigatie.style.transform="translateY(0px)";;
  }else
    if(y<150){
      navigatie.style.transform="translateY(0px)";

    }

  }
}