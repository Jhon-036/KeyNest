const bar = document.getElementById("bar");
const navBar = document.getElementById("navBar");
const closeBar = document.getElementById("close");

bar.addEventListener("click", () => {
    navBar.classList.add('navBarOpen');
});

closeBar.addEventListener("click", () => {
    navBar.classList.remove('navBarOpen');
});