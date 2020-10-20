const createVisitPage = () => {
        const content = document.querySelector('#content');
        const createDiv = document.createElement('div');
        const createH1 = document.createElement('h1');
        const createP = document.createElement('p');
        const createH2 = document.createElement('h2');
        content.appendChild(createDiv);
        createDiv.id = 'container';
        createDiv.style.backgroundColor = 'White';
        createDiv.style.width = '730px';
        createDiv.style.height = '90vh';
        createDiv.style.margin = 'auto';
        createDiv.style.marginTop = '-40px'
        createDiv.appendChild(createH1);
        createH1.textContent = 'HOURS & LOCATION';
        createH1.style.textAlign = 'center';
        createDiv.appendChild(createP);
        createP.style.textAlign = 'center'
        createP.style.marginTop = '120px';
        createP.innerHTML = '1906 14th Street NW,<br> Washington, DC 20009, <br> (202) 518-7926 <br> info@brescadc.com'
        createDiv.appendChild(createH2);
        createH2.style.textAlign = 'center';
        createH2.textContent = 'Dine In'
        createH2.style.marginTop = '250px';
        return createDiv
    }
export {createVisitPage}

