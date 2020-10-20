const domModule = (() => {
    const content = document.querySelector('#content');
    const createMain = () => {
        const main = document.createElement('main');
        const h1 = document.createElement('h1');
        content.appendChild(main);
        main.appendChild(h1);
        h1.textContent = 'Restaurant page'
        return main;
    }
    return {createMain};

}
)()
const homePageLoad = () => {
    domModule.createMain();
}

export {homePageLoad}
