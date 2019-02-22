



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
            "<div class='row row-task'><div class='col-xsm col1-task d-flex align-items-center justify-content-center'><div class='form-check d-flex align-items-center'><input class='form-check-input' type='checkbox' value='' id='defaultCheck1'><label class='form-check-label' for='defaultCheck1'></label></div></div><div class='col col2-task'><p class='task font-weight-light'>" + valueTask + "</p></div><div  class='col-xsm col3-mixer d-flex align-items-center justify-content-center'><div id='row3-mixer' class='row'><div class='col col3-sort'><button class='btn btn-sort'><i class='fas fa-sort'></i></div> <div class='col col3-separator1'><span class='separator separator-task1'></span></div><div class='col col3-pencil'> <button class='btn btn-pencil' ><i class='fas fa-pencil-alt'></i></button></div><div class='col col3-separator2'><span class='separator separator2'></span></div><div class='col col3-trashcan'><button id='trash' class='btn btn-trash' ><i class='far fa-trash-alt'></i></div></div></div></div>";
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
    var valueEditTask = $(this).parents('.task-head').find("p");
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

    addListenerToEditTask1();
function addListenerToEditTask1(){
    $(".btn-pencil").click(function(){
    var valueEditTask = $(this).parents('.list-group').find("p");
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