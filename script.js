function hack(value){
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
    value.onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
            return event.target.dataset.value[index];
            }
        
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
        }
        
        iteration += 1 / 3;
    }, 30);
    }
}
hack(document.querySelector(".hacker1"));
hack(document.querySelector(".hacker2"));

// ----------------------------------------------
const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

// --------nav------------
const menuItems = document.querySelectorAll('.menu-item');


menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
   
    menuItems.forEach((item) => {
      item.classList.remove('selected');
    });

    menuItem.classList.add('selected');
  });
});

function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 4100)
}
loaderAnimation()

function visitcount(){
  let visit=document.getElementById("visit");
fetch('https://api.counterapi.dev/v1/ssr/ssr/up')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => visit.innerHTML=data.count)
  .catch(error => console.error('There was a problem with the fetch operation:', error));}
visitcount()

// -----------------cursor follower------------
const cursor = document.querySelector('.cursor-follower');

let mouseX = 0; // Actual mouse X position
let mouseY = 0; // Actual mouse Y position
let followerX = 0; // Cursor follower X position
let followerY = 0; // Cursor follower Y position
const delay = 0.1; // Delay factor (lower is slower, higher is faster)

// Mouse movement
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Smooth animation loop
function animateCursor() {
  followerX += (mouseX - followerX) * delay;
  followerY += (mouseY - followerY) * delay;
  cursor.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;

  requestAnimationFrame(animateCursor); // Continuously update the position
}

// Start the animation loop
animateCursor();

// Hover effect on links
document.querySelectorAll('a').forEach((link) => {
  let className = link.classList.contains('no-hover-cursor') ? "shirnk" : "expand";
  link.addEventListener('mouseenter', () => {
    cursor.classList.add(className);
  });
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove(className);
  });
});

