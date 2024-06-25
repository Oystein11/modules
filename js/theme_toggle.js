function theme_toggle () {
    const body = document.querySelector ("#theme_toggle");
    console.log (body);

    body.classList.toggle ("dark");
}

export {theme_toggle};