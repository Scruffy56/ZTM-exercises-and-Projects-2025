var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//



function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);  
    

    li.addEventListener("click", function() {
        var finished = this.classList.toggle("done");
        var removeButton = document.createElement("button");
        removeButton.classList.add("deleteButton");

        if (finished) {
            removeButton.appendChild(document.createTextNode("del"));
            removeButton.classList = "deleteButton";
            li.appendChild(removeButton);

            removeButton.addEventListener("click", function() {
                this.parentElement.remove();
            });
        } else {
            this.getElementsByClassName("deleteButton")[0].remove();
        }
    });

    input.value = "";

}


function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }        
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();

    }        
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


// Add checkboxes to existing list items
document.querySelectorAll('ul li').forEach(function(li) {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.insertBefore(checkbox, li.firstChild);
});

//
// li.addEventListener("hover") {
// 	if ()
// }



