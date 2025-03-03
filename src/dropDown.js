

function DropDown(element, hiddenClassName, id) {
    this.DocNode = element;
    this.hideClass = hiddenClassName;
    this.id = id;


    this.hide = function() {
        this.DocNode.classList.add(this.hideClass);
    };

    this.show = function() {
        this.DocNode.classList.remove(this.hideClass);
    };

    this.toggle = function() {
        this.DocNode.classList.toggle(this.hideClass);
    };
}


export default DropDown;