const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const closeBtn = document.getElementById("close");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
};

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        nav.classList.remove("active");
    });
};

/* Shop Product P */
// Change img src
let mainImg = document.getElementById('mainImg');
let smallImg = document.getElementsByClassName('sm-img');

smallImg[0].onclick = () => {
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = () => {
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = () => {
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = () => {
    mainImg.src = smallImg[3].src;
}