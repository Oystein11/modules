function return_name () {
    const user_name = "Oystein";

    const display_name = document.querySelector ("#display_name");
    console.log (display_name);

    const text_display = document.createElement ("h1");

    text_display.textContent = user_name;

    display_name.appendChild (text_display);
}

export {return_name};