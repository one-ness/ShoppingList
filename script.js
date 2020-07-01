document.querySelector(".enter").onclick = function() {addItemClick()};
document.querySelector("#userInput").onkeypress = function(event) {addItemEnter(event)};
var item = document.querySelector("#userInput");

function addItemClick() {
	if(item.value) {
		addListItem();
	}
}
function addItemEnter(event) {
	if(item.value && event.keyCode === 13) {
		addListItem();
	}
}

function addListItem() {
	// uppercase each word in userInput
	item.value = capWords();

	// cache list
	var list = document.querySelector(".shoplist");

	// create <div class='row'></div> element
	var row = createRow();
	// create list item
	var li = createListItem();
	// create delete button
	var del_button = createDeleteButton();

	// add list item and button to div
	row.appendChild(li);
	row.appendChild(del_button);

	// add row to list
	list.appendChild(row);

	// reset input value
	item.value = '';

	// add event listeners to the added row elements
	addListeners();
}

function capWords() {
	var items = item.value.split(' ');
	var caps = items[0][0].toUpperCase() + items[0].substr(1,);
	for(var i = 1; i < items.length; i++) {
		caps += ' ' + items[i][0].toUpperCase() + items[i].substr(1,);
	}
	return caps;
}

function createRow() {
	var row = document.createElement("div");
	row.classList.add("row");
	return row;
}

function createListItem() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode('* ' + item.value));
	li.classList.add("listitem");
	li.classList.add("done");
	li.classList.toggle("done");
	return li;
}

function createDeleteButton() {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("x"));
	btn.classList.add("delete");
	return btn;
}

function addListeners() {
	var listItems = document.querySelectorAll(".listitem");
	listItems[listItems.length - 1].onclick = function(event) {
		event.target.classList.toggle("done");
	}
	var delete_buttons = document.querySelectorAll(".delete");
	delete_buttons[delete_buttons.length - 1].onclick = function(event) {
		event.target.previousSibling.remove();
		event.target.remove();
	}
}