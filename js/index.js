function watchForm(){
	let todo = document.getElementsByClassName("todoForm");
	todo[0].addEventListener("submit", function(event){
		event.preventDefault();
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.style.display="inline";
		checkbox.className="todoItem";
		var label = document.createElement("label");
		label.innerHTML = document.getElementsByClassName("newTodo form-control")[0].value;
		label.style.display="inline";
		label.style.padding= "5px";
		label.className="todoItem";
		let listTodos = document.getElementsByClassName("panel-body")[1];
		var br = document.createElement("br");
		br.className="todoItem";
		listTodos.appendChild(checkbox);
		listTodos.appendChild(label);
		listTodos.appendChild(br);
		document.getElementsByClassName("newTodo form-control")[0].value="";
	});
}

function watchButtons(){
	let btns = document.getElementsByTagName("button");
	btns[1].addEventListener("click", function(event){
		let checkboxes = document.getElementsByTagName("input");
		for(i in checkboxes){
			if(checkboxes[i].type == "checkbox"){
				checkboxes[i].checked = false;
			}
		}
	});
	btns[2].addEventListener("click", function(event){
		let checkboxes = document.getElementsByTagName("input");
		for(i in checkboxes){
			if(checkboxes[i].type == "checkbox"){
				checkboxes[i].checked = true;
			}
		}
	});
	btns[3].addEventListener("click", function(event){
		let checkboxes = document.getElementsByClassName("todoItem");
		while(checkboxes.length!==0){
			checkboxes[0].remove();
		}
	});
}

function init(){
	watchForm();
	watchButtons();
}

init();