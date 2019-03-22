addListenerToEdit1Task();
function addListenerToEdit1Task(){
    $(".btn-pencil").click(function(){
    var valueEditTask1 = $(this).parents('.row-task').find("p");
    $("#myModal").modal("show");
    var inputForEdit1 = $(".input-task-edit");
    inputForEdit1.val(valueEditTask1.text());
    $(".save-changes").unbind("click");
    $(".save-changes").click(function(){
        if(!inputForEdit1.val().trim()){
            alert("Please, enter your text!")
            return false
        }
        valueEditTask1.text(inputForEdit1.val());
    });
    
    });
    }