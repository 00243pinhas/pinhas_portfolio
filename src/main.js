import './scss/index.scss'

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }
    // setup back to top link
  
    if (scrollHeight > 500) {

      console.log(scrollHeight)
      // topLink.classList.add("show-link");
    } else {
        
      // topLink.classList.remove("show-link");
    }
  });



  // ********** Links scrolling  ************



  const contactBtn = document.getElementById('contactBtn')

  console.log(contactBtn)

  contactBtn.addEventListener('click',function(){
    
    window.location.href = "http://localhost:5173/#contact";
  })

  


