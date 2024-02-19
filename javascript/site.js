




// Dynamic Welcome Message
document.addEventListener("DOMContentLoaded", function() {
    const hours = new Date().getHours();
    const IsMorning = hours >= 4 && hours < 12;
    const IsAfternoon = hours >= 12 && hours < 17;
    const IsEvening = hours >= 17 || (hours < 4 && hours >= 0);

    function WelcomeMessage(Text) {
      const elem = document.getElementById("Welcome");
      if (elem) {
        elem.innerHTML = Text;
      } else {
        console.error("Element with ID 'welcome' not found.");
      }
    }

    if (IsMorning) {
      WelcomeMessage("Welcome and good morning!");
    } else if (IsAfternoon) {
      WelcomeMessage("Welcome and good afternoon!");
    } else if (IsEvening) {
      WelcomeMessage("Welcome and good evening!");
    }
  });

// Storing Secrete Message in localStorage
var SecreteMessage = "It's dangerous to go alone! Take this.";

localStorage.setItem("It's a secret to everybody.", SecreteMessage);










