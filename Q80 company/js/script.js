// Setting custom tracker for the cursor
const kur = new kursor ({
  type: 4,
  color: "#6CD5C1"
});





// Build projects tabs navigation
let tabs = Array.from(document.querySelectorAll(".projects-container ul li"))
let all = document.querySelectorAll(".all-content .content")


tabs.forEach((ele) => {
  ele.addEventListener("click", (e) => {

    tabs.forEach((ele) => {
      ele.classList.remove("active")
    })

    all.forEach((div) => {
      div.style.display = "none";
    })

    let current = e.currentTarget;
    current.classList.add("active")

    let indx = tabs.indexOf(current);
    all[indx].style.display = "block";
    all[indx].classList.add("animate__zoomIn");
  })
}) 





// Fade up animation setting
function fadeUp(section, posY) {
  let selector = document.querySelector(section)

  if (this.scrollY > posY) {
      selector.style.setProperty("visibility", "visible");
      selector.style.setProperty("animation-duration", "1.2s");
      selector.style.setProperty('animation-name', 'fadeInUp');
  };
};



function getPosY(section) {
  let selection = document.querySelector(section);
  let pos = selection.offsetTop;
  return pos - 500;
};



let sections = [".features",".services",".projects",".about",".contact",];
window.onscroll = () => {
    for (let i=0; i < sections.length; i++) {
        fadeUp(sections[i], getPosY(sections[i]));
    };
};






// Menu button
let menu = document.getElementById("menu");
let cross = document.getElementById("close");
let nav = document.querySelector("nav");

menu.onclick = () => {
  menu.style.display = 'none';
  cross.style.display = "block";
  nav.style.display = "block";
  nav.classList.add("animate__fadeInDown");
};



cross.onclick = () => {
  menu.style.display = 'block';
  cross.style.display = "none";
  nav.style.display = "none";
};




// Reload the page after submitting form
let send = document.querySelector(".send")
send.onclick = (() => {
  location.reload()
})





// setting copy right year
let element = document.querySelector("#year");
let date = new Date();
let year = date.getFullYear();
element.innerHTML = year;