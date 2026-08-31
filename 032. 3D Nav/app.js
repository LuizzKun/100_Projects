const container = document.querySelector('.page-container')
const pages = document.querySelectorAll('.page')
const togleBtn  = document.querySelector('.toggle-btn')
const ul = document.querySelector(".nav-list")
const overlay = document.querySelector(".overlay");
const links  = document.querySelectorAll(".link")

let pageIndex = 0;

togleBtn.addEventListener('click', () => {
  togleBtn.classList.toggle('active')  ;
  container.classList.toggle('active');
  ul.classList.toggle("show");
})


links.forEach((item,  i )  => {
  item.addEventListener('click', () => {
    nextPage(i)
  })
})



function nextPage(index) {
  overlay.style.animation = 'slide 1s linear 1'
  setTimeout(() => {
    pages[pageIndex].classList.remove('active')
    pages[index].classList.add('active')
    pageIndex =index
  }, 500)

  setTimeout(() => {
    overlay.style.animation = null
  }, 1000)
}