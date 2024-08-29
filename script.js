const model = document.querySelector('.model');
const overlay = document.querySelector('.overlay');

// openModel() function

const openModel = () => {
    console.log("Model is open");
    model.classList.add("active");
    overlay.classList.add("overlayactive")
};

// clsoeModel() function
const closeModel = () => {
    model.classList.remove("active");
    overlay.classList.remove("overlayactive");
};