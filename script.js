// script.js

document.addEventListener("DOMContentLoaded", function () {
  // --- Home Page ---

  // Set dynamic headline
  const headline = document.querySelector(".hero-content h1");
  if (headline) {
    headline.textContent = "Welcome to My Portfolio!"; // Example dynamic headline
  }

  // Add a simple skill animation (example)
  const skillsSummary = document.querySelector(".hero-content p");
  if (skillsSummary) {
    let skills = ["Web Developer", "Front end technology", "Problem Solver"];
    let skillIndex = 0;

    setInterval(() => {
      skillsSummary.textContent = skills[skillIndex];
      skillIndex = (skillIndex + 1) % skills.length;
    }, 2000); // Change skill every 2 seconds
  }

  // --- About Me Section ---

  // Example dynamic content (replace with your data)
  const aboutMeContent = document.querySelector(".about .container p");
  if (aboutMeContent) {
    aboutMeContent.innerHTML = `
            <p>I'm a passionate web developer with a strong foundation in front-end technologies like HTML, CSS, and JavaScript. My educational background in Computer Science has provided me with a solid understanding of software development principles.</p>
            <p>My core skills lie in front-end development, specifically HTML5, CSS3, and JavaScript. I'm proficient in creating responsive designs that adapt seamlessly across devices, ensuring a consistent user experience.</p>
             <p> I'm constantly exploring new design trends and best practices to enhance my skills.</p
        `;
  }

  // --- Contact Section ---

  // Example form submission handling (replace with your server-side logic)
  const contactForm = document.querySelector(".contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      const name = contactForm.querySelector('input[name="name"]').value;
      const email = contactForm.querySelector('input[name="email"]').value;
      const message = contactForm.querySelector(
        'textarea[name="message"]'
      ).value;

      // Example: Log the form data to the console
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);

      // Add your logic here to send the form data (e.g., using fetch or XMLHttpRequest)
      // ...

      alert("Message sent successfully!"); // Example success message
      contactForm.reset(); // Clear the form
    });
  }
});
