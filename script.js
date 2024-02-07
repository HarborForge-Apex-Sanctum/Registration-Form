var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("submitBtn").style.display = "inline";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

//Test form
const frontQuestion = document.getElementById("frontend-btn");
const backQuestion = document.getElementById("backend-btn");
const managerQuestion = document.getElementById("manager-btn");
const designerQuestion = document.getElementById("designer-btn");

const buttonContainer = document.getElementById("questions-btn");
const questions = document.getElementById("questions");

const registrationInfo = () => {
  return `
      <div class="inner-tab">Name:
          <p><input type="text" placeholder="First name..." name="FirstName"></p>
          <p><input type="text" placeholder="Last name..." name="LastName"></p>
      </div>

      <div class="inner-tab">Contact Info:
            <p><input type="email" placeholder="E-mail..." name="Email"></p>
            <p><input type="number" placeholder="Phone..." name="Phone-Number"></p>
            <p><input placeholder="state..." name="State"></p>
            <p><input placeholder="Country..." name="Country"></p>
        </div>

        <div class="inner-tab">skills:
            <p><input placeholder="Tech Title..." name="Tech-Title"></p>
            <p><input placeholder="language(s)..." name="Tech-Language"></p>
            <p><input placeholder="experience year.." name="Experience"></p>
        </div>

        <div class="inner-tab">whatsapp Info:
            <p><input placeholder="whatsapp name..." name="Whatsapp-Name"></p>
            <span>Input your picture:</span>
            <p><input type="file" placeholder="input your picture" name="Picture"></p>
        </div>
  `;
};

const regInfo = registrationInfo();

frontQuestion.addEventListener("click", () => {
  buttonContainer.remove();
  questions.innerHTML = `
  <div>${regInfo}</div>
  <h3>Frontend Developer Interview Questions</h3>
  <ol>
      <li>Can you explain the difference between HTML, CSS, and JavaScript?</li>
      <input type="text" name="Frontanswer1">
      <li>How do you ensure your code is responsive and compatible with different devices and browsers?</li>
      <input type="text" name="Frontanswer2">
      <li>Can you discuss your experience with frontend frameworks like React, Angular, or Vue.js?</li>
      <input type="text" name="Frontanswer3">
      <li>How do you optimize the performance of a web application from a frontend perspective?</li>
      <input type="text" name="Frontanswer4">
      <li>Can you provide examples of your work that demonstrate your proficiency in building intuitive user interfaces?</li>
      <input type="text" name="Frontanswer5">
      <li>How do you handle cross-browser compatibility issues in your projects?</li>
      <input type="text" name="Frontanswer6">
      <li>Can you discuss a challenging frontend problem you encountered and how you approached solving it?</li>
      <input type="text" name="Frontanswer7">
      <li>What tools and libraries do you commonly use for frontend development, and why?</li>
      <input type="text" name="Frontanswer8">
      <li>How do you collaborate with designers and backend developers during the development process?</li>
      <input type="text" name="Frontanswer9">
      <li>Can you discuss your approach to debugging and troubleshooting frontend issues?</li>
      <input type="text" name="Frontanswer10">
  </ol>
`;
});
backQuestion.addEventListener("click", () => {
  buttonContainer.remove();
  questions.innerHTML = `
  <div>${regInfo}</div>
  <h3>Backend Developer Interview Questions</h3>
  <ol>
      <li>Can you explain the role of a backend developer in a web application development project?</li>
      <input type="text" name="Backendanswer1">
      <li>How do you ensure the security of a web application from a backend perspective?</li>
      <input type="text" name="Backendanswer2">
      <li>Can you discuss your experience with backend frameworks like Django, Flask, Ruby on Rails, or Node.js?</li>
      <input type="text" name="Backendanswer3">
      <li>How do you optimize database queries and overall database performance?</li>
      <input type="text" name="Backendanswer4">
      <li>Can you provide examples of your work that demonstrate your proficiency in building scalable and maintainable backend systems?</li>
      <input type="text" name="Backendanswer5">
      <li>How do you handle authentication and authorization in your projects?</li>
      <input type="text" name="Backendanswer6">
      <li>Can you discuss a challenging backend problem you encountered and how you approached solving it?</li>
      <input type="text" name="Backendanswer7">
      <li>What tools and technologies do you commonly use for backend development, and why?</li>
      <input type="text" name="Backendanswer8">
      <li>How do you ensure the reliability and resilience of backend systems?</li>
      <input type="text" name="Backendanswer9">
      <li>Can you discuss your approach to API design and documentation?</li>
      <input type="text" name="Backendanswer10">
  </ol>
`;
});
designerQuestion.addEventListener("click", () => {
  buttonContainer.remove();
  questions.innerHTML = `
  <div>${regInfo}</div>
  <h3>UI/UX Designer Interview Questions</h3>
        <ol>
            <li>Can you walk me through your design process from initial concept to final product?</li>
            <input type="text" name="UIUXanswer1">
            <li>How do you ensure your designs are user-centered and intuitive?</li>
            <input type="text" name="UIUXanswer2">
            <li>Can you discuss a challenging design problem you encountered and how you solved it?</li>
            <input type="text" name="UIUXanswer3">
            <li>How do you stay updated with the latest design trends and technologies?</li>
            <input type="text" name="UIUXanswer4">
            <li>Can you provide examples of your work that demonstrate your ability to create engaging user interfaces?</li>
            <input type="text" name="UIUXanswer5">
            <li>How do you approach user research and incorporate feedback into your designs?</li>
            <input type="text" name="UIUXanswer6">
            <li>Can you discuss a project where you had to balance aesthetics with functionality? How did you manage it?</li>
            <input type="text" name="UIUXanswer7">
            <li>What tools and software do you use for UI/UX design, and why?</li>
            <input type="text" name="UIUXanswer8">
            <li>How do you collaborate with other team members, such as developers and project managers, during the design process?</li>
            <input type="text" name="UIUXanswer9">
            <li>Can you discuss a project where you had to prioritize accessibility in your designs? How did you ensure inclusivity?</li>
            <input type="text" name="UIUXanswer10">
        </ol>
    `;
});
managerQuestion.addEventListener("click", () => {
  buttonContainer.remove();
  questions.innerHTML = `
  <div>${regInfo}</div>
  <h3>Project Manager Interview Questions</h3>
  <ol>
      <li>How do you plan and organize projects to ensure they are delivered on time and within budget?</li>
      <input type="text" name="PManswer1">
      <li>Can you discuss a time when you had to resolve conflicts within a project team? How did you handle it?</li>
      <input type="text" name="PManswer2">
      <li>How do you prioritize tasks and allocate resources effectively?</li>
      <input type="text" name="PManswer3">
      <li>Can you describe your approach to risk management in project planning and execution?</li>
      <input type="text" name="PManswer4">
      <li>How do you ensure clear communication and alignment among team members throughout a project?</li>
      <input type="text" name="PManswer5">
      <li>Can you provide an example of a successful project you managed from initiation to completion?</li>
      <input type="text" name="PManswer6">
      <li>How do you adapt your project management style to different project types or team dynamics?</li>
      <input type="text" name="PManswer7">
      <li>What tools and methodologies do you use for project management, and why?</li>
      <input type="text" name="PManswer8">
      <li>How do you handle changes in project scope or requirements?</li>
      <input type="text" name="PManswer9">
      <li>Can you discuss a time when you had to manage a project with tight deadlines? How did you ensure timely delivery without compromising quality?</li>
      <input type="text" name="PManswer10">
  </ol>
`;
});
