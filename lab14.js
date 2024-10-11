
function editName() {
    const input = document.getElementById("name");
    const profileName = document.getElementById("profile-name");
    profileName.textContent = input.value; // Set h1 to the input value
    console.log(input.value); // Log the input value
}

function editImage() {
    const imageUrlInput = document.getElementById("profile"); // Get the input field for the image URL
    const profileImage = document.getElementById("profile-img"); // Get the profile image element
    const url = imageUrlInput.value; // Get the value (URL) from the input field

    // Check if URL is valid before applying it
    if (url) {
        profileImage.src = url; // Set the image src attribute to the URL value
        console.log("Image updated to: " + url); // Log the new URL
    } else {
        alert("Please enter a valid image URL!"); // Error handling
    }
}

function saveCSV() {
    const csvContent = phonenumber.map(row => row.join(",")).join("\n"); // Convert array to CSV string
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
