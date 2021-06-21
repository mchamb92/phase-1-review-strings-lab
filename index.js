// Write your code in this file!
let currentUser = 'Grace Hopper';
let welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
let excitedWelcomeMessage = welcomeMessage.toUpperCase() + currentUser + "!";
let shortGreeting = `Welcome, ${currentUser.split('').splice(0,1).join("")}!`;