

function addItem() {
	var listItem = document.getElementById('content');

	var toAdd = document.getElementById('inputItem').value;
	
	//to create a new list item and show them using javascript.
	var li = document.createElement('li');
	var txt = document.createTextNode(toAdd);
	li.appendChild(txt);
	document.getElementById('content').appendChild(li);

	// to add the 'done it' button.
	 var btn = document.createElement("button");
	 var btnTxt = document.createTextNode('Did it!');
	 btn.appendChild(btnTxt);
	 document.getElementById('content').appendChild(btn);

	 //to remove the element from the list when clicked on did it button. 
	 btn.addEventListener("click", function() {
	 	txt.nodeValue="";
	 	btn.style.display="none";

 	})

	// to reset the value of input element.
	document.getElementById('inputItem').value = "";

}
