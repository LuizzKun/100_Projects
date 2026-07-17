let toggler = document.getElementById("switch");

toggler.addEventListener("click", () => {
  // if (toggler.checked === true) {
  //   document.body.style.backgroundColor = 'black'
  // } else {
  //   document.body.style.backgroundColor = 'white'
  // }
  //The following does the same  as the top just in ?ternerary

  toggler.checked === true  
  ? document.body.style.backgroundColor ='black' 
  :document.body.style.backgroundColor = 'white'
});
