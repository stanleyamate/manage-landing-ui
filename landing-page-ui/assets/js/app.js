
const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger')
  hamburger.onclick = function () {
    hamburger.classList.toggle('active');
    if(hamburger.classList.contains('active')){
      body.classList.add('active')
    }
    else{
      body.classList.remove('active')
    }
}