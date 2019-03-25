$.get("http://localhost:3000/todo_lists").done(
function(data) {
	console.log(data);
	for (i=0; i<data.length; i++) {
		//console.log(data[i]);
		var containerDiv = document.createElement("div.container.task-container");
		var headDiv = document.createElement("div.row.task-head");  
		var title = document.createElement("p.task-head-written"); 
  // and give it some content 
        var titleText = document.createTextNode(data[i]['title']); 
      // add the text node to the newly created div
        title.appendChild(titleText); 
        headDiv.appendChild(title); 
        containerDiv.appendChild(headDiv);  
    
  // add the newly created element and its content into the DOM 
      var cont = document.getElementsByClassName("container")[0]; 
    cont.appendChild(containerDiv); 
      //document.body.insertBefore(cont, containerDiv);
	}
});