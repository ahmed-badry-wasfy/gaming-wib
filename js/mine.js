// open nav
let iconnNav = document.getElementById("iconN");
let ulNav = document.getElementById("ulNav");
let container = document.querySelectorAll(".container");

// opne nav onclick
iconnNav.onclick = openNav;
function openNav() {
  ulNav.classList.toggle("openTop");
}

// // transform

window.onscroll = transform;

function transform() {
  for (let i = 0; i < container.length; i++) {
    let scrol = container[i].getBoundingClientRect().top < window.innerHeight;

    if (scrol) {
      container[i].classList.remove("transform");
    } else {
      container[i].classList.add("transform");
    }
  }
}

// top
let topClick = document.querySelector(".top button");

topClick.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};

window.addEventListener("scroll", () => {
  if (this.scrollY >= 700) {
    topClick.style.right = "10px";
  } else {
    topClick.style.right = "-100px";
  }
});
