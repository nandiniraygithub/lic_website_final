document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const form = e.target;
    const statusMessage = document.getElementById("status-message");

    // Use Fetch API to send form data
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                statusMessage.textContent = "Thank you! Your message has been sent.";
                statusMessage.style.display = "block";
                form.reset(); // Clear the form
            } else {
                statusMessage.textContent = "Oops! Something went wrong.";
                statusMessage.style.color = "red";
                statusMessage.style.display = "block";
            }
        })
        .catch((error) => {
            statusMessage.textContent = "Error: Unable to send your message.";
            statusMessage.style.color = "red";
            statusMessage.style.display = "block";
        });
});
