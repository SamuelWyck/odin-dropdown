import dropDownManager from "./dropDownFactory.js";
import "./styles.css";



const app = (function() {
    const header = document.querySelector("header");
    const dropDownBtn = document.querySelector(".dropdown-1-btn");

    const links = {
        "Home": "#",
        "Store": "#",
        "Contact Us": "#"
    };

    const dropDown1 = dropDownManager.createDropDown(links, 1);
    header.appendChild(dropDown1.DocNode);

    dropDownBtn.addEventListener("click", function() {
        dropDown1.toggle();
    });
})();