
const buttons = document.querySelectorAll(".button");


function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}


for (const button of buttons) {
    button.addEventListener("click", () => {

        const buttonColor = button.style.backgroundColor;


        changeBackgroundColor(buttonColor);
    });
}
