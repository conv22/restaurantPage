import {homePageLoad} from './homePage.js'
import {createVisitPage} from './visitPage.js'
import {menuPage} from './menuPage.js'
homePageLoad();



document.getElementById('home').addEventListener('click',function(){
    wipecontent();
    homePageLoad();

})

document.getElementById('menu').addEventListener('click',function(){
    wipecontent();
    menuPage();

})
document.getElementById('visit').addEventListener('click',function(){
    wipecontent();
    createVisitPage();

})
function wipecontent(){
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild)};
        return content;
        
};
