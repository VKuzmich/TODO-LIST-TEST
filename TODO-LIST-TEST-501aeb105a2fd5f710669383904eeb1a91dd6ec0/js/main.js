// List with handle
Sortable.create(listWithHandle, {
    handle: '.fa-sort',
    animation: 150
  });


addListenerToAddTask();
    function addListenerToAddTask(){
        $(".add-task").click(function(){
            var valueTask = $(".input-task").val();
            if(!valueTask.trim()){
                alert("Please, enter your text!")
                return false
            }
            var containerTodo = 
            "<div id='todo-table' class='row row-task'><div class='col-xsm col1-task d-flex align-items-center justify-content-center'><div class='form-check d-flex align-items-center'><input class='form-check-input' type='checkbox' value='' id='defaultCheck1'><label class='form-check-label' for='defaultCheck1'></label></div></div><div class='col col2-task'><p class='task font-weight-light'>" + valueTask + "</p></div><div  class='col-xsm col3-mixer d-flex align-items-center justify-content-center'><div id='row3-mixer' class='row'><div class='col col3-sort'><button class='btn btn-sort'><i class='fas fa-sort'></i></div> <div class='col col3-separator1'><span class='separator separator-task1'></span></div><div class='col col3-pencil'> <button class='btn btn-pencil' ><i class='fas fa-pencil-alt'></i></button></div><div class='col col3-separator2'><span class='separator separator2'></span></div><div class='col col3-trashcan'><button id='trash' class='btn btn-trash' ><i class='far fa-trash-alt'></i></div></div></div></div>";
            $(".list-group").append(containerTodo);
            $(".input-task").val("");
            addListenerToDeleteTask();
            addListenerToEditTask();
        });}


addListenerToDeleteTask();
function addListenerToDeleteTask(){
    $(".btn-trash").click(function(){
    $(this).parents(".row-task").remove();
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
    var valueEditTask = $(this).parents("#todo-table").find("p");
    $("#myModal").modal("show");
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
            $('<div class="container task-containerontainer center col-md-6 offset-md-3 task-container"><div id="todo-table" class="row task-head"><div class="col-xsm task-head-icon"><button class="btn btn-calendar"><i class="far fa-calendar-alt"></i></div><div class="col task-head-text text-white"><p class="task-head-written"> Write HTML & CSS </p></div><div class="col-xsm task-head-edit"><div class="row task-head-pencil"><div class="col col3-pencil"><button class="btn btn-pencil"><i class="fas fa-pencil-alt"></i></div><div class="col col3-separator2"><span class="separator separator2"></span></div><div class="col col3-trashcan"><button class="btn btn-trash trash"><i class="far fa-trash-alt"></i></div></div></div></div><div  class="row row-button-field"><div class="col-xsm button-plus"><button class="btn button-plus-task"><i class="fas fa-plus fa-lg"></i></div><div class="col"><div class="input-group mb-2"><input type="text" class="form-control input-task" placeholder="Start typing here to create the task..." aria-label="Start typing here to create the task..." aria-describedby="button-addon2"><div class="input-group-append"><button class="btn btn-outline-secondary text-white add-task" type="button" id="button-addtask">Add Task</button></div></div></div></div><div id="listWithHandle" class="list-group"><div id="todo-table" class="row row-task"><div class="col-xsm col1-task d-flex align-items-center justify-content-center"><div class="form-check d-flex align-items-center"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1"></label></div></div><div class="col col2-task"><p class="task font-weight-light"> "Write todo list" </p></div><div  class="col-xsm col3-mixer d-flex align-items-center justify-content-center"><div id="row3-mixer" class="row"><div class="col col3-sort"><button class="btn btn-sort"><i class="fas fa-sort"></i></div><div class="col col3-separator1"><span class="separator separator-task1"></span></div><div class="col col3-pencil"><button class="btn btn-pencil" ><i class="fas fa-pencil-alt"></i></button></div><div class="col col3-separator2"><span class="separator separator2"></span></div><div class="col col3-trashcan"><button id="trash" class="btn btn-trash" ><i class="far fa-trash-alt"></i></div></div></div></div></div></div></br></br>');
            $(this).before(domElement);
        });
    }


