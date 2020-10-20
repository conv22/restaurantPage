const menuPage = () =>{
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    container.id = 'container';
    content.appendChild(container);
    container.style.margin = 'auto';
    container.style.marginTop = '-40px';
    container.style.width = '730px';
    container.style.height = '90vh';
    container.style.backgroundColor = 'white';
    container.appendChild(h1);
    h1.style.textAlign = 'center';
    h1.style.fontSize = '40px';
    h1.textContent = 'MENU'

};
export {menuPage};

