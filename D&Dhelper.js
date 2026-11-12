//load the saved Home button click count
let homeClicks = Number(localStorage.getItem("homeClicks"))||0;
//Find the counter on the page
const counter = document.getElementById("homeCounter");
//Display the current count
if (counter) {
    counter.textContent = "Home clicks: " + homeClicks;
}
// Find every link that leads to the Home page
document.querySelectorAll('a[href="D&Dhelper.html"]').forEach(link => {
link.addEventListener("click", function () {
homeClicks++;
   // Save the updated count
    localStorage.setItem("homeClicks", homeClicks);
});

});