const challenges = {

    "JACKFWEH": {
        number: "1",
        title: "STARTING WITH A CLASSIC",
        description: "Provide a fit pic with an album recommendation, making the two of them match.",
        modifier: "Modifier: None"
    },

    "DREWFWEH": {
        number: "9",
        title: "NO I IN TEAM",
        description: "Dress up as a femboy and ask Zeb to give your outfit a rating out of 10 - needs to be at least an 8 to pass.",
        modifier: "Modifier: Spider-Man It Up - Incorporate Spider-Man into your completion of the challenge for it to count."
    },

    "ZEBFWEH": {
        number: "2",
        title: "E G G",
        description: "Cook an egg in a way nobody else in the Quiz Victims GC has.",
        modifier: "Modifier: Double Points"
    },

    "ENDRYLFWEH": {
        number: "1",
        title: "STARTING WITH A CLASSIC",
        description: "Provide a fit pic with an album recommendation, making the two of them match.",
        modifier: "Modifier: None"
    },

    "HAMZAFWEH": {
        number: "4",
        title: "TRAINING ARC",
        description: "Log at least 5 workouts on Hevy",
        modifier: "Modifier: Double Points"
    }

};


function showChallenge() {

    // Get the code entered by the user

    const code = document
        .getElementById("code-input")
        .value
        .trim()
        .toUpperCase();


    // Find the challenge associated with the code

    const challenge = challenges[code];


    // If the code doesn't exist

    if (!challenge) {

        document.getElementById("error-message").textContent =
            "Invalid code. Please try again.";

        document
            .getElementById("challenge-section")
            .classList.add("hidden");

        return;
    }


    // Clear error message

    document.getElementById("error-message").textContent = "";


    // Display challenge number

    document.getElementById("challenge-number").textContent =
        challenge.number;


    // Display challenge title

    document.getElementById("challenge-title").textContent =
        challenge.title;


    // Display challenge description

    document.getElementById("challenge-description").textContent =
        challenge.description;


    // Display modifier

    document.getElementById("challenge-modifier").textContent =
        challenge.modifier;


    // Show challenge

    document
        .getElementById("challenge-section")
        .classList.remove("hidden");


    // Hide login screen

    document
        .getElementById("login-section")
        .classList.add("hidden");

}