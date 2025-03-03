import DropDown from "./dropDown.js";

const dropDownFactory = (function() {

    let createLink = function(text, url, id, dropDownClass) {
        const link = document.createElement("a");
        link.classList.add(`${dropDownClass}-link-${id}`);
        link.href = url;
        link.textContent = text;
        return link;
    };

    let createDropDown = function(links, id, dropDownClass="dropdown", hideClass="hidden") {
        const dropDownDiv = document.createElement("div");
        dropDownDiv.classList.add(`${dropDownClass}-${id}`);
        dropDownDiv.dataset.id = id;

        for (let key in links) {
            const link = createLink(key, links[key], id, dropDownClass);
            dropDownDiv.appendChild(link);
        }

        return new DropDown(dropDownDiv, hideClass, id);
    };

    let getDropDown = function(element, hideClass, id=null) {
        return new DropDown(element, hideClass, id);
    };

    return {
        "createDropDown": createDropDown,
        "getDropDown": getDropDown,
    };
})();


export default dropDownFactory;