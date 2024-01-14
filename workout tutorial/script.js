function generateQuote() {
    const quotes = [
        "Strength does not come from the body. It comes from the will. - Unknown",
        "The only bad workout is the one that didn't happen. - Unknown",
        "Your body can stand almost anything. It's your mind that you have to convince. - Unknown",
        "Sweat is just fat crying. - Unknown",
        "It's not about having time; it's about making time. - Unknown",
        "The pain you feel today will be the strength you feel tomorrow. - Unknown",
        "Your health is an investment, not an expense. - Unknown",
        "Fitness is not about being better than someone else; it's about being better than you used to be. - Unknown",
        "The only bad workout is the one you didn't do. - Unknown",
        "Make your body the sexiest outfit you own. - Unknown"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.getElementById("quote").textContent = randomQuote;
}

function addNewPost() {
    const postContent = document.getElementById("post-content").value;
    if (postContent.trim() !== "") {
        const postContainer = document.createElement("div");
        postContainer.className = "post-container";

        const postElement = document.createElement("div");
        postElement.textContent = postContent;

        postContainer.appendChild(postElement);

        document.getElementById("posts").appendChild(postContainer);
        document.getElementById("post-content").value = "";
    }
}
