(()=>{"use strict";const e=(()=>{const e=document.querySelector("#content");return{createMain:()=>{const t=document.createElement("main"),n=document.createElement("h1");return e.appendChild(t),t.appendChild(n),n.textContent="Restaurant page",t}}})(),t=()=>{e.createMain()};function n(){const e=document.querySelector("#content");for(;e.firstChild;)e.removeChild(e.firstChild);return e}t(),document.getElementById("home").addEventListener("click",(function(){n(),t()})),document.getElementById("menu").addEventListener("click",(function(){n(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("h1");t.id="container",e.appendChild(t),t.style.margin="auto",t.style.marginTop="-40px",t.style.width="730px",t.style.height="90vh",t.style.backgroundColor="white",t.appendChild(n),n.style.textAlign="center",n.style.fontSize="40px",n.textContent="MENU"})()})),document.getElementById("visit").addEventListener("click",(function(){n(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("h1"),c=document.createElement("p"),o=document.createElement("h2");e.appendChild(t),t.id="container",t.style.backgroundColor="White",t.style.width="730px",t.style.height="90vh",t.style.margin="auto",t.style.marginTop="-40px",t.appendChild(n),n.textContent="HOURS & LOCATION",n.style.textAlign="center",t.appendChild(c),c.style.textAlign="center",c.style.marginTop="120px",c.innerHTML="1906 14th Street NW,<br> Washington, DC 20009, <br> (202) 518-7926 <br> info@brescadc.com",t.appendChild(o),o.style.textAlign="center",o.textContent="Dine In",o.style.marginTop="250px"})()}))})();