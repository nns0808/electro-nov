// create a footer and add it to the body
const footer = document.createElement("footer");
const body = document.querySelector("body");
body.appendChild(footer);

// add a copyright to the footer
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = `${thisYear}`;
footer.appendChild(copyright);

// add skills section
const skills = [
  "Heavy Machinery Wiring & Maintenance",
  "Control Panels & Automation Systems",
  "Electrical Safety Inspections & Compliance",
  "Power Distribution & High-Voltage Solutions",
  "Office & Retail Wiring",
  "EV Charging Stations",
  "Lighting Fixtures & Equipment",
  "Hot Tub Electrical Wiring",
  "LED Lighting & Energy Efficiency Upgrades",
  "SPElectrical Panel Upgrades & MaintenanceSS",
  "Backup Generators & Surge Protection",
  "Fire Alarm & Security System Wiring",
];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}
// create message form
const messageForm = document.querySelector("form");
messageForm.addEventListener("submit", handleSubmit);
const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector("ul");


function handleSubmit(e) {
  e.preventDefault();
  const name = e.target.userName.value;
  const email = e.target.userEmail.value;
  const message = e.target.userMessage.value;

  console.log("Name: ", name);
  console.log("Email: ", email);
  console.log("message: ", message);

// display messages in list
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href = "mailto:${email}"> ${name} </a> <span>wrote: ${message}</span>`;

// create remove button
  let removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.className = "remove-button";
  removeButton.addEventListener("click", () => {
    let entry = removeButton.parentNode;
    entry.remove();
    if (messageList.childElementCount === 0) {
      messageSection.hidden = true;
      
    }
  });
// create edit button
  let editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.type = "button";
  editButton.className = "edit-button";
  editButton.addEventListener("click", () => {
    let update = prompt('Edit Message');
    let updatedMessage = newMessage.querySelector('span');
    updatedMessage.textContent = `wrote: ${update}`;
  });  
  newMessage.appendChild(removeButton);
  newMessage.appendChild(editButton);
  messageList.appendChild(newMessage);
  messageSection.hidden = false;
  messageForm.reset();
}

// DOM selectors
const projectSection = document.getElementById("projects");
// const projectList = projectSection.querySelector("ul");

fetch("https://api.github.com/users/nns0808/repos")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((repositories) => {
    console.log("repositories: ", repositories);
    for (let i = 0; i < repositories.length; i++){
      const project = document.createElement("li");
      project.innerHTML = `<a href="${repositories[i].html_url}" target="_blank">${repositories[i].name}</a>`;
      projectList.appendChild(project); 
  }
})

.catch((error) => {
  console.error("Fetch error:", error);
  });

 