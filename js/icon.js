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
