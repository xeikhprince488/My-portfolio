function showSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'flex ';

}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'none';
}


// SIde bar js  

const sidebarLinks = document.querySelectorAll('.sidebar li a');
const menubarLinks = document.querySelectorAll('.menubar li a');
const sections = document.querySelectorAll('section');

function setActiveLink() {
  const scrollPosition = window.scrollY + window.innerHeight / 2; // Center of the viewport

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Check if the scroll position is within the section
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      sidebarLinks.forEach(link => link.classList.remove('active'));
      menubarLinks.forEach(link => link.classList.remove('active'));

      sidebarLinks[index + 1].classList.add('active'); // For sidebar links
      menubarLinks[index].classList.add('active'); // For menubar links
    }
  });
}

// Update active link on click for sidebar
sidebarLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    sidebarLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const targetSection = sections[index]; // Adjust index for sidebar
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth',
    });
  });
});

// Update active link on click for menubar
menubarLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    menubarLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const targetSection = sections[index]; // Adjust index for menubar
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth',
    });
  });
});

// Update active link on scroll
window.addEventListener('scroll', setActiveLink);




// Sending info to my email 



function sendInfo(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values from the form fields
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Define the email address, subject, and body
  const emailAddress = "programmingworld488@gmail.com";
  const body = `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nSubject: ${subject}\nMessage: ${message}`;

  // Open Gmail with the pre-filled email
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=Information from Website&body=${encodeURIComponent(body)}`;
  window.open(gmailLink, "_blank");
}

// Add an event listener to the form submission
document.querySelector("form").addEventListener("submit", sendInfo);


// open link in new window 


document.querySelectorAll('[data-new-window]').forEach(function(link) {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      window.open(this.href, '_blank');
  });
});



const footerLinks = document.querySelectorAll('footer ul li a');
const footerSections = document.querySelectorAll('section'); // Ensure this selects all sections

// Smooth scroll for footer links
footerLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    const targetId = link.getAttribute('href').substring(1); // Get the ID from the href
    const targetSection = document.getElementById(targetId); // Get the corresponding section by ID

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});

// Animate on Scroll for Education Section 


// Get the education section element
const educationSection = document.querySelector('.education');

// Get the viewport height
const viewportHeight = window.innerHeight;

// Add an event listener to the window's scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Get the top position of the education section
  const educationTop = educationSection.offsetTop;

  // Check if the education section is in view
  if (scrollPosition + viewportHeight >= educationTop) {
    // Add the animate-on-scroll class to the education section
    educationSection.classList.add('animate-on-scroll');
  }
});





// Animate on Scroll for Services Section 


// Get the education section element
const servicesSection = document.querySelector('.services');

// Get the viewport height
const servicesviewportHeight = window.innerHeight;

// Add an event listener to the window's scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Get the top position of the education section
  const servicesTop = servicesSection.offsetTop;

  // Check if the education section is in view
  if (scrollPosition + viewportHeight >= servicesTop) {
    // Add the animate-on-scroll class to the education section
    servicesSection.classList.add('animate-on-scroll-services');
  }
});




// Animate on Scroll for Testimonials Section 


// Get the education section element
const testimonialsSection = document.querySelector('.testimonials');

// Get the viewport height
const testimonialsviewportHeight = window.innerHeight;

// Add an event listener to the window's scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Get the top position of the education section
  const testimonialsTop = testimonialsSection.offsetTop;

  // Check if the education section is in view
  if (scrollPosition + viewportHeight >= testimonialsTop) {
    // Add the animate-on-scroll class to the education section
    testimonialsSection.classList.add('animate-on-scroll-testimonials');
  }
});


// Animate on Scroll for Contacts Section 


// Get the education section element
const contactSection = document.querySelector('.contact');

// Get the viewport height
const contactviewportHeight = window.innerHeight;

// Add an event listener to the window's scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Get the top position of the education section
  const contactTop = contactSection.offsetTop;

  // Check if the education section is in view
  if (scrollPosition + viewportHeight >= contactTop) {
    // Add the animate-on-scroll class to the education section
    contactSection.classList.add('animate-on-scroll-contacts');
  }
});





// Animate on Scroll for Footer Section 


// Get the education section element
const footerSection = document.querySelector('.footer');

// Get the viewport height
const footerviewportHeight = window.innerHeight;

// Add an event listener to the window's scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Get the top position of the education section
  const footerTop = contactSection.offsetTop;

  // Check if the education section is in view
  if (scrollPosition + viewportHeight >= footerTop) {
    // Add the animate-on-scroll class to the education section
    footerSection.classList.add('animate-on-scroll-footer');
  }
});










// Sparkling animation on the entire screen



// // Get the canvas element
// const canvas = document.getElementById('sparkle-canvas');
// const ctx = canvas.getContext('2d');

// // Set the animation interval (adjust the value to control the frequency of the sparkle effect)
// const animationInterval = 200; // Longer emergence time (200ms)

// // Define the color for the stars
// const starColor = '#00ffee';

// // Function to generate a random star sparkle animation
// function generateStar() {
//   // Set the star properties
//   const starSize = 0.5; // Even smaller size for the stars
//   const starX = Math.random() * canvas.width; // Random x position
//   const starY = Math.random() * canvas.height; // Random y position
//   const starDirectionX = Math.random() * 0.2 - 0.1; // Slower x direction
//   const starDirectionY = Math.random() * 0.2 - 0.1; // Slower y direction

//   // Draw a completely round star shape
//   ctx.beginPath();
//   ctx.arc(starX, starY, starSize, 0, 2 * Math.PI);
//   ctx.fillStyle = starColor;
//   ctx.fill();

//   // Add a slight glow effect to the star
//   ctx.beginPath();
//   ctx.arc(starX, starY, starSize * 1.2, 0, 2 * Math.PI);
//   ctx.fillStyle = `rgba(0, 255, 238, 0.5)`; // Slightly transparent glow color
//   ctx.fill();

//   // Animate the star
//   starX += starDirectionX;
//   starY += starDirectionY;

//   // Repeat the animation
//   setTimeout(generateStar, animationInterval);
// }

// // Trigger the star animation at regular intervals, but with fewer stars
// setInterval(generateStar, animationInterval * 2); // Generate stars every 400ms















console.log('JavaScript code is being executed');

const canvas = document.getElementById('sparkle-canvas');
const ctx = canvas.getContext('2d');

// set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// define the sparkle effect
class Sparkle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 2;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = `rgba(0, 255, 238, ${Math.random() * 0.8 + 0.2})`; // Neon color #00ffee
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size *= 0.98;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();

    // Add a glow effect to the sparkle
    ctx.fillStyle = `rgba(0, 255, 238, ${Math.random() * 0.5 + 0.1})`; // Softer, glowing neon color
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 1.2, 0, Math.PI * 2);
    ctx.fill();
  }
}

// create an array to store the sparkles
const sparkles = [];

// add event listener to mouse movement
document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  // create a new sparkle at the mouse position
  sparkles.push(new Sparkle(x, y));
});

// add event listener to mouse wheel scrolling
document.addEventListener('wheel', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  // create a new sparkle at the mouse position
  sparkles.push(new Sparkle(x, y));
});

// animate the sparkles
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // update and draw each sparkle
  sparkles.forEach((sparkle, index) => {
    sparkle.update();
    sparkle.draw();

    // remove the sparkle if it's too small
    if (sparkle.size <= 0.5) {
      sparkles.splice(index, 1);
    }
  });

  requestAnimationFrame(animate);
}

animate();