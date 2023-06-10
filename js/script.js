{
    const onChangeThemeclick = () => {
    const body = document.querySelector(".body");
    const textColor = document.querySelector(".js-textColor");
    const textColor2 = document.querySelector(".js-textColor2");
    const selection = document.querySelector(".js-selection");
    const selection2 = document.querySelector(".js-selection2");
    const selection3 = document.querySelector(".js-selection3");
    const selection4 = document.querySelector(".js-selection4");
    const colorName = document.querySelector(".js-colorName");

    body.classList.toggle("body__backgroundDark");
    textColor.classList.toggle("textColor__darkMode.textColor__darkMode:hover");
    textColor2.classList.toggle("textColor__darkMode.textColor__darkMode:hover");
    selection.classList.toggle("section__background");
    selection2.classList.toggle("section__background");
    selection3.classList.toggle("section__background");
    selection4.classList.toggle("section__background");

    colorName.innerText = body.classList.contains(
        "body__backgroundDark"
    )
        ? "( OFF )"
        : "( ON )";
};

const init = () => {
    const backgroundButton = document.querySelector(".js-backgroundButton");
    backgroundButton.addEventListener("click", onChangeThemeclick);

};

    init();
}