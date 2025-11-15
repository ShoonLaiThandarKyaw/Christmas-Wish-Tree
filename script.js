function createSnow(count = 100) {
    let snow = document.getElementById("snow");

    for (let i = 0; i < count; i++) {
        let flake = document.createElement("div");
        flake.className = "flake";

        let size = Math.random() * 5 + 2; 
        flake.style.width = size + "px";
        flake.style.height = size + "px";

        flake.style.left = Math.random() * 100 + "%";
        flake.style.animationDuration = (Math.random() * 3 + 3) + "s"; 
        flake.style.animationDelay = Math.random() * -6 + "s";

        snow.appendChild(flake);
    }
}

createSnow();

let gifts = document.querySelectorAll(".gift");
let wishBox = document.getElementById("wishBox");
let overlay = document.getElementById("overlay");

gifts.forEach(gift => {
    gift.addEventListener("click", (e) => {
        wishBox.textContent = gift.dataset.wish;
        wishBox.style.display = "block";
        overlay.classList.remove("hidden");
    });
});

overlay.addEventListener("click", () => {
    wishBox.style.display = "none";
    overlay.classList.add("hidden");
});



