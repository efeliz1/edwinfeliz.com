//scroll animation

//help from https://cssanimation.rocks/scroll-animations/
let scroll = window.requestAnimationFrame ||  
            function (callback) { window.setTimeout(callback, 100/60)};

let elementToShow = document.querySelectorAll('.show-on-scroll');


let loop = () => {

  elementToShow.forEach(function(element){
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

loop();


// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

//scroll button

let githubBtn = document.getElementById('githubBtn');

window.onscroll = ()=>{
  scrollFunction();
}

function scrollFunction () {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
  {
     githubBtn.style.display = "inline";
  }else{
    githubBtn.style.display = "none";
  }
}


function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
