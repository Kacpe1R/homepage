{
    console.log("Hello");
const onChangeThemeclick = (backgroundButton) => {
    const body = document.querySelector(".body");

    body.classList.toggle("body__backgroundDark");

    backgroundButton.innerText = body.classList.contains(
        "body__backgroundDark"
    )
        ? "OFF"
        : "ON";
};

const init = () => {
    const backgroundButton = document.querySelector(".js-backgroundButton");
    backgroundButton.addEventListener("click", onChangeThemeclick);

};

    init();
}