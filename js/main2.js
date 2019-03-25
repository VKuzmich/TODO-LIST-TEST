

            // Creating Title of page


            var todoListDiv = document.getElementById("Todo-List");
            todoListDiv.className = "justify-content-center"

            var divTitle = document.createElement("DIV");
            divTitle.setAttribute("id", "Title");
            todoListDiv.appendChild(divTitle);

            var h2 = document.createElement("h2");
            h2.innerHTML = "SIMPLE TODO LISTS";
            divTitle.appendChild(h2);
            h2.style.textAlign = "center";

            var h4 = document.createElement("h4");
            h4.innerHTML = "FROM RUBY GARAGE";
            divTitle.appendChild(h4);
            h4.style.textAlign = "center";
            divTitle.className = "container justify-content-center w-50 p-3 h-25"



            // Table - creating todo lists container
            

            var todoLists = document.createElement("DIV");
            todoLists.setAttribute("id", "todo_item");
            todoLists.className = "container task-container justify-content-center col-md-8 offset-md-2 mb-4 rounded-sm";
            todoListDiv.appendChild(todoLists);

            // Creating head table row
            var divCreateRow = document.createElement("DIV");
            divCreateRow.className = "row task-head task-row"
            divCreateRow.setAttribute("id", "todo-task")
            
                // creating col for calendar icon
                var divCreate = document.createElement("DIV");
                divCreate.className = "col-xsm form-inline";
                 divCreateRow.appendChild(divCreate);

                // creating col for text
                var divCreate1 = document.createElement("DIV");
                divCreate1.className = "col form-inline";
                divCreateRow.appendChild(divCreate1);


                // creating col for edit and trash icon
                var divCreate2 = document.createElement("DIV");
                divCreate2.className = "col-xsm edit-trash form-inline";
                divCreateRow.appendChild(divCreate2);

                // putting row in container
                todoLists.appendChild(divCreateRow);
            

                        // Head elements

                        // calendar icon
                        var calendar = document.createElement("button");
                        calendar.className = "btn far fa-calendar-alt btn"; 
                        divCreate.appendChild(calendar);
                      
                        // text for adding item
                        var pTable = document.createElement("p");
                        pTable.className = "todoItem font-weight-light";
                        pTable.innerHTML = "Complete the test task for Ruby Garage";
                        divCreate1.appendChild(pTable);
                        
                        // editin icon
                        var pencilBtn = document.createElement("button");
                        pencilBtn.className = "btn btn-pencil btn-sm"; 
                        divCreate2.appendChild(pencilBtn);

                        var pencil = document.createElement("i");
                        pencil.className = "fas fa-pencil-alt"; 
                        pencilBtn.appendChild(pencil);

                        // separating line
                        var line = document.createElement("span");
                        line.innerHTML = "|";
                        divCreate2.appendChild(line);  

                        // trash icon
                        var trash = document.createElement("button");
                        trash.className = "btn fas fa-trash-alt trash btn-sm"; 
                        divCreate2.appendChild(trash);




    // Creating 2nd row for adding tasks button
    var divCreateRow1 = document.createElement("DIV");
    divCreateRow1.className = "row button_add"
            

      // creating col for plus icon
    var divPlus = document.createElement("DIV");
    divPlus.className = "col-xsm ";
    divCreateRow1.appendChild(divPlus);

              // creating plus icon
            var plusBtn = document.createElement("button");
            plusBtn.className = "btn btn-plus btn-lg"; 
            divPlus.appendChild(plusBtn);

            var plus = document.createElement("i");
            plus.className = "fa fa-plus"; 
            plusBtn.appendChild(plus);


    // creating col for input field
    var divAddButton = document.createElement("DIV");
    divAddButton.className = "col form-inline input-group m-1 p-1";
    divCreateRow1.appendChild(divAddButton);

    // append 2nd row in container
    todoLists.appendChild(divCreateRow1);
            
                
    // creeating input field
     var input = document.createElement("input");
    input.type = "text";
    input.className = "form-control input-task";
    input.placeholder = "Start typing here to create the task...";
    input.ariaLabel= "Start typing here to create the task...";
    input.ariaDescribedby="basic-addon2";
            divAddButton.appendChild(input);
                        
                        // creating div for button
                        var inputGroup = document.createElement("DIV");
                        inputGroup.className = "input-group-append";
                        
                            // creating button
                            var inputBtn = document.createElement("button");
                            inputBtn.className = "btn btn-outline-secondary text-white add-task";
                            inputBtn.type = "button";
                        
                            // creating text on button
                            var textBtn = document.createTextNode("Add Task");
                            inputBtn.appendChild(textBtn);
                        
                            inputGroup.appendChild(inputBtn);
                            inputBtn.style.backgroundColor = "green";
                        
                            inputBtn.appendChild(textBtn);
                        
                        inputGroup.appendChild(inputBtn);

                     divAddButton.appendChild(inputGroup);



    // creating div for sorting container
    var divForSorting = document.createElement("DIV");
    divForSorting.className = "list-group";
    divForSorting.setAttribute("id", "listWithHandle");
    todoLists.appendChild(divForSorting);


             // creating todo-list tasks row for table (1st)
            var divTaskRow= document.createElement("DIV");
            divTaskRow.className = "row task-row item-lists";
            divTaskRow.setAttribute("id", "todo-task");
            



                    // <div class="col-xsm col1-task d-flex">
                    //     <div class="form-check d-flex align-items-center">
                    //         <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    //         <label class="form-check-label" for="defaultCheck1"></label>
                    //     </div>
                    // </div>


                // creating col for check icon
                var divCheck = document.createElement("DIV");
                divCheck.className = "col-xsm form-inline form-check d-flex align-items-center p-3";
                 divTaskRow.appendChild(divCheck);

                        // creating checkbox
                        var checkBox = document.createElement("input");
                        checkBox.type = "checkbox";
                        checkBox.className = "form-check-input";
                        checkBox.value = "";
                        checkBox.setAttribute("id", "defaultCheck1");
                        divCheck.appendChild(checkBox);
                        
                        var labelCheck = document.createElement("label");
                        labelCheck.className = "form-check-label"; 
                        
                        labelCheck.setAttribute("for", "defaultCheck1");
                        divCheck.appendChild(labelCheck);


                // creating col for text
                var divTask = document.createElement("DIV");
                divTask.className = "col todo-list-text form-inline ml-1";
                divTaskRow.appendChild(divTask);

                        // text for adding item
                        var pTable = document.createElement("p");
                        pTable.className = "task font-weight-light";
                        pTable.innerHTML = "Write todo list";
                        divTask.appendChild(pTable);



                // creating col for sorting, editing and trash icon
                var divSort = document.createElement("DIV");
                divSort.className = "col-xsm sort-edit-trash form-inline";
                divTaskRow.appendChild(divSort);

                    // sort icon

                    var sortBtn = document.createElement("button");
                    sortBtn.className = "btn btn-sort btn-sm"; 
                    divSort.appendChild(sortBtn);

                    var sort = document.createElement("i");
                    sort.className = "fas fa-sort"; 
                    sortBtn.appendChild(sort);


                    var line = document.createElement("span");
                    line.innerHTML = "|";
                    divSort.appendChild(line); 
                    
                    // editing icon
                    var pencilBtn = document.createElement("button");
                    pencilBtn.className = "btn btn-pencil btn-sm"; 
                    divSort.appendChild(pencilBtn);

                    var pencil = document.createElement("i");
                    pencil.className = "fas fa-pencil-alt"; 
                    pencilBtn.appendChild(pencil);

                    // separating line
                    var line = document.createElement("span");
                    line.innerHTML = "|";
                    divSort.appendChild(line);  

                    // trash icon
                    var trash = document.createElement("button");
                    trash.className = "btn fas fa-trash-alt btn-trash btn-sm"; 
                    divSort.appendChild(trash);


                // putting row in container
                divForSorting.appendChild(divTaskRow);
           
            
            // creating todo-list tasks row for table (2st)
            // var divTaskRow= document.createElement("DIV");
            // divTaskRow.className = "row task-row";
            // divTaskRow.setAttribute("id", "todo-task");
                        
            //     // creating col for check icon
            //     var divCheck = document.createElement("DIV");
            //     divCheck.className = "col-xsm form-inline form-check d-flex align-items-center p-3";
            //     divTaskRow.appendChild(divCheck);

            //             // creating checkbox
            //         var checkBox = document.createElement("input");
            //         checkBox.type = "checkbox";
            //         checkBox.className = "form-check-input";
            //         checkBox.value = "";
            //         checkBox.setAttribute("id", "defaultCheck1");
            //         divCheck.appendChild(checkBox);
                    
            //         var labelCheck = document.createElement("label");
            //         labelCheck.className = "form-check-label"; 
            //         labelCheck.for = "defaultCheck1";
            //         divCheck.appendChild(labelCheck);



            //     // creating col for text
            //     var divTask = document.createElement("DIV");
            //     divTask.className = "col todo-list-text form-inline ml-1";
            //     divTaskRow.appendChild(divTask);


            //        // text for adding item
            //         var pTable = document.createElement("p");
            //         pTable.className = "task font-weight-light";
            //         pTable.innerHTML = "Write todo list";
            //         divTask.appendChild(pTable);



            //     // creating col for sorting, editing and trash icon
            //     var divSort = document.createElement("DIV");
            //     divSort.className = "col-xsm sort-edit-trash form-inline";
            //     divTaskRow.appendChild(divSort);

            //         // sort icon
            //         var sortBtn = document.createElement("button");
            //         sortBtn.className = "btn btn-sort btn-sm"; 
            //         divSort.appendChild(sortBtn);

            //         var sort = document.createElement("i");
            //         sort.className = "fas fa-sort"; 
            //         sortBtn.appendChild(sort);

            //         var line = document.createElement("span");
            //         line.innerHTML = "|";
            //         divSort.appendChild(line); 

            //         // editing icon
            //         var pencilBtn = document.createElement("button");
            //         pencilBtn.className = "btn btn-pencil btn-sm"; 
            //         divSort.appendChild(pencilBtn);

            //         var pencil = document.createElement("i");
            //         pencil.className = "fas fa-pencil-alt"; 
            //         pencilBtn.appendChild(pencil);

            //         // separating line
            //         var line = document.createElement("span");
            //         line.innerHTML = "|";
            //         divSort.appendChild(line);  

            //         // trash icon
            //         var trash = document.createElement("button");
            //         trash.className = "btn fas fa-trash-alt btn-trash btn-sm"; 
            //         divSort.appendChild(trash);


    // putting row in sorting container
    divForSorting.appendChild(divTaskRow);
           


    // sorting rows
    Sortable.create(listWithHandle, {
    handle: '.fa-sort',
    animation: 150
    });


// creating button for affing new table
    var button = document.createElement("button");
    button.className = "btn btn-primary btn-md align-self-center"; 
    button.setAttribute("name", "AddingNewTable");

    var text = document.createTextNode("+ Add TODO List");
    button.appendChild(text);
    button.style.backgroundColor = "rgb(46, 134, 193)";
    todoListDiv.appendChild(button);


// creating modal window
    var winModal = document.createElement("DIV")
    winModal.setAttribute("id","forModal");
    todoListDiv.appendChild(winModal);
    var myModal = document.createElement("DIV");
    myModal.setAttribute("id", "myModal");
    myModal.className = "modal fade";
    myModal.setAttribute("tabindex", "-1");
    myModal.setAttribute("role", "dialog");
            
    winModal.appendChild(myModal);

                var myModal1 = document.createElement("DIV");
                myModal1.className = "modal-dialog";
                myModal1.setAttribute("role", "document");
                myModal.appendChild(myModal1);

                    var myModal2 = document.createElement("DIV");
                    myModal2.className = "modal-content";
                    myModal1.appendChild(myModal2);

                        var headerModal = document.createElement("DIV");
                        headerModal.className = "modal-header";
                        myModal2.appendChild(headerModal);

                            var inputModal = document.createElement("button");
                            inputModal.className = "close";
                            inputModal.type = "button";
                            inputModal.setAttribute("data-dismiss", "modal");
                            inputModal.setAttribute("aria-label", "Close");
                            headerModal.appendChild(inputModal)

                                var spanModal = document.createElement("span");
                                spanModal.setAttribute("aria-hidden", "true");
                                inputModal.appendChild(spanModal);

                            var titleModal = document.createElement("h4");
                            titleModal.className = "modal-title";
                            inputModal.appendChild(titleModal);

                            var modalText = document.createTextNode("Write task");
                            titleModal.appendChild(modalText);

                      
                        var bodyModal = document.createElement("DIV");
                        bodyModal.className = "modal-body";
                        myModal2.appendChild(bodyModal);


                            var inputModal1 = document.createElement("input");
                            inputModal1.className = "form-control input-task-edit";
                            inputModal1.type = "text";
                            inputModal1.placeholder="Enter";
                            bodyModal.appendChild(inputModal1)



                        var footerModal = document.createElement("DIV");
                        footerModal.className = "modal-footer";
                        myModal2.appendChild(footerModal);

                            var btnModal = document.createElement("button");
                            btnModal.className = "btn btn-default";
                            btnModal.type = "button";
                            btnModal.setAttribute( "data-dismiss", "modal");

                            var closeText = document.createTextNode("Close");
                            btnModal.appendChild(closeText);
                            
                            footerModal.appendChild(btnModal)
                            
                            var saveModal = document.createElement("button");
                            saveModal.className = "btn btn-primary save-changes"
                            saveModal.setAttribute( "data-dismiss", "modal");
                             
                            var saveText = document.createTextNode("Save changes");
                            saveModal.appendChild(saveText);
                            footerModal.appendChild(saveModal) 


addListenerToAddTask();
function addListenerToAddTask(){
        $(".add-task").click(function(){
            var valueTask = $(".input-task").val();
            if(!valueTask.trim()){
                alert("Please, enter your text!")
                return false
            }
            var containerTodo = 
            "<div class='row task-row item-lists' id='todo-task'><div class='col-xsm form-inline form-check d-flex align-items-center p-3'><input type='checkbox' class='form-check-input' value='' id='defaultCheck1'><label class='form-check-label'></label></div><div class='col todo-list-text form-inline ml-1'><p class='task font-weight-light'>" + valueTask + "</p></div><div class='col-xsm sort-edit-trash form-inline'><button class='btn btn-sort btn-sm'><i class='fas fa-sort'></i></button><span>|</span><button class='btn btn-pencil btn-sm'><i class='fas fa-pencil-alt'></i></button><span>|</span><button class='btn fas fa-trash-alt btn-trash btn-sm'></button></div></div>"
            $(".list-group").append(containerTodo);
            $(".input-task").val("");
            addListenerToDeleteTask();
            addListenerToEditTask();
        });}




addListenerToDeleteTask();
    function addListenerToDeleteTask(){
        $(".btn-trash").click(function(){
        $(this).parents(".task-row").remove();
        });
        }

addListenerToDeleteTaskHead();
    function addListenerToDeleteTaskHead(){
        $(".trash").click(function(){
        $(this).parents(".task-container").remove();
        });
        }


    addListenerToEditTask();
function addListenerToEditTask(){
    $(".btn-pencil").click(function(){
    var valueEditTask = $(this).parents('.task-row').find("p");
    $('#myModal').modal('show');
    var inputForEdit = $(".input-task-edit");
    inputForEdit.val(valueEditTask.text());
    $(".save-changes").unbind("click");
    $(".save-changes").click(function(){
        if(!inputForEdit.val().trim()){
            alert("Please, enter your text!")
            return false
        }
        valueEditTask.text(inputForEdit.val());
    });
    
    });
    }

    addListenerToAddTaskTable();
    function addListenerToAddTaskTable() {
        $("button[name='AddingNewTable']").click(function () {
            var domElement = 
            $('<div id="todo_item" class="container task-container justify-content-center col-md-8 offset-md-2 mb-4 rounded-sm"><div class="row task-head" id="todo-task"><div class="col-xsm form-inline"><button class="btn far fa-calendar-alt btn"></button></div><div class="col form-inline"><p class="todoItem font-weight-light">Complete the test task for Ruby Garage</p></div><div class="col-xsm edit-trash form-inline"><button class="btn btn-pencil btn-sm"><i class="fas fa-pencil-alt"></i></button><span>|</span><button class="btn fas fa-trash-alt trash btn-sm"></button></div></div><div class="row button_add"><div class="col-xsm "><button class="btn btn-plus btn-lg"><i class="fa fa-plus"></i></button></div><div class="col form-inline input-group m-1 p-1"><input type="text" class="form-control input-task" placeholder="Start typing here to create the task..."><div class="input-group-append"><button class="btn btn-outline-secondary text-white add-task" type="button" style="background-color: green;">Add Task</button></div></div></div><div class="list-group" id="listWithHandle"><div class="row task-row item-lists" id="todo-task"><div class="col-xsm form-inline form-check d-flex align-items-center p-3"><input type="checkbox" class="form-check-input" value="" id="defaultCheck1"><label class="form-check-label"></label></div><div class="col todo-list-text form-inline ml-1"><p class="task font-weight-light">Write todo list</p></div><div class="col-xsm sort-edit-trash form-inline"><button class="btn btn-sort btn-sm"><i class="fas fa-sort"></i></button><span>|</span><button class="btn btn-pencil btn-sm"><i class="fas fa-pencil-alt"></i></button><span>|</span><button class="btn fas fa-trash-alt btn-trash btn-sm"></button></div></div></div></div>');
            $(this).before(domElement);
        });
    }


// <div id="todo_item" class="container task-container justify-content-center col-md-8 offset-md-2 mb-4 rounded-sm"><div class="row task-head" id="todo-task"><div class="col-xsm form-inline"><button class="btn far fa-calendar-alt btn"></button></div><div class="col form-inline"><p class="todoItem font-weight-light">Complete the test task for Ruby Garage</p></div><div class="col-xsm edit-trash form-inline"><button class="btn btn-pencil btn-sm"><i class="fas fa-pencil-alt"></i></button><span>|</span><button class="btn fas fa-trash-alt trash btn-sm"></button></div></div><div class="row button_add"><div class="col-xsm "><button class="btn btn-plus btn-lg"><i class="fa fa-plus"></i></button></div><div class="col form-inline input-group m-1 p-1"><input type="text" class="form-control input-task" placeholder="Start typing here to create the task..."><div class="input-group-append"><button class="btn btn-outline-secondary text-white add-task" type="button" style="background-color: green;">Add Task</button></div></div></div><div class="list-group" id="listWithHandle"><div class="row task-row" id="todo-task"><div class="col-xsm form-inline form-check d-flex align-items-center p-3"><input type="checkbox" class="form-check-input" value="" id="defaultCheck1"><label class="form-check-label"></label></div><div class="col todo-list-text form-inline ml-1"><p class="task font-weight-light">Write todo list</p></div><div class="col-xsm sort-edit-trash form-inline"><button class="btn btn-sort btn-sm"><i class="fas fa-sort"></i></button><span>|</span><button class="btn btn-pencil btn-sm"><i class="fas fa-pencil-alt"></i></button><span>|</span><button class="btn fas fa-trash-alt btn-trash btn-sm"></button></div></div></div></div>



// "<div id='todo_item' class='container task-container justify-content-center col-md-8 offset-md-2 mb-4 rounded-sm'><div class='row task-head' id='todo-task'><div class='col-xsm form-inline'><button class='btn far fa-calendar-alt btn'></button></div><div class='col form-inline'><p class='todoItem font-weight-light'>Complete the test task for Ruby Garage</p></div><div class='col-xsm edit-trash form-inline'><button class='btn btn-pencil btn-sm'><i class='fas fa-pencil-alt'></i></button><span>|</span><button class='btn fas fa-trash-alt trash btn-sm'></button></div></div><div class='row button_add'><div class='col-xsm'><button class='btn btn-plus btn-lg'><i class='fa fa-plus'></i></button></div><div class='col form-inline input-group m-1 p-1'><input type='text' class='form-control input-task' placeholder='Start typing here to create the task...'><div class='input-group-append'><button class='btn btn-outline-secondary text-white add-task' type='button' style='background-color: green;'>Add Task</button></div></div></div><div class='list-group' id='listWithHandle'><div class='row task-row' id='todo-task'><div class='col-xsm form-inline form-check d-flex align-items-center p-3'><input type='checkbox' class='form-check-input' value='' id='defaultCheck1'><label class='form-check-label'></label></div><div class='col todo-list-text form-inline ml-1'><p class='task font-weight-light'>Write todo list</p></div><div class='col-xsm sort-edit-trash form-inline'><button class='btn btn-sort btn-sm'><i class='fas fa-sort'></i></button><span>|</span><button class='btn btn-pencil btn-sm'><i class='fas fa-pencil-alt'></i></button><span>|</span><button class='btn fas fa-trash-alt btn-trash btn-sm'></button></div></div></div></div>"




