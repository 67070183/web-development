
function editName() {
    const input = document.getElementById("name");
    const profileName = document.getElementById("profile-name");
    profileName.textContent = input.value;
    console.log(input.value);
};

function editImage() {
    const imageUrlInput = document.getElementById("profile");
    const profileImage = document.getElementById("profile-img");
    const url = imageUrlInput.value;

    if (url) {
        profileImage.src = url;
        console.log("Image updated to: " + url);
    } else {
        alert("Please enter a valid image URL!");
    }
};

function saveCSV() {
    const csvContent = phonenumber.map(row => row.join(",")).join("\n");
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