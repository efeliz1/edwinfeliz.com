


// const btnToggle
const themeSwitch = document.getElementsByClassName("onoffswitch-checkbox")[0];

// console.log(themeSwitch);
themeSwitch.addEventListener('change',function (event){
  console.log(event.target.checked);
})
