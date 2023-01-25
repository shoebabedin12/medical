$(document).ready(function () {
  //   dataTable = $("#example").DataTable({
  //     columnDefs: [
  //       {
  //         targets: [5],
  //         visible: false,
  //       },
  //     ],
  //   });
  //   $(".status-dropdown").on("change", function (e) {
  //     var status = $(this).val();
  //     $(".status-dropdown").val(status);
  //     dataTable.column(5).search(status).draw();
  //   });
});

function strike(e) {
  var data = $(e).attr("class");
  data = data.substr(3, data.length);
  if (data == "fa-caret-square-o-right fa-2x") {
    $(e).attr("class", "fa fa-check-square fa-2x");
    $(e).parent().parent().css("color", "#ffa500");
  } else if (data == "fa-check-square fa-2x") {
    $(e).parent().parent().css("text-decoration", "line-through");
    $(e).parent().parent().css("color", "#008000");
    $(e).attr("class", "fa fa-trash fa-2x");
  } else {
    $(e).parent().parent().remove();
  }
  // else{

  //       if(confirm("Do you want to delete this list?")){
  //           $(e).parent().parent().remove();
  //       }
  // }
}

function add() {
  var task = $("#task").val();
  var date = $("#date").val();

  $(".todo-table").append(
    '<div class="row position-relative"><div class="col-lg-6"><div class="mb-5 row"><label for="h-name" class="col-sm-4 col-form-label">Degree</label><div class="col-sm-8 position-relative"><input type="text" class="form-control" id="h-name" placeholder="Degree"/></div></div></div><div class="col-lg-6"><div class="mb-5 row"><label for="h-name" class="col-sm-4 col-form-label">Specialization </label><div class="col-sm-8 position-relative"><input type="text" class="form-control" id="h-name" placeholder="Specialization"/></div></div></div><div class="close-icon"><span class="close-degree" onclick="strike(this)"><p>X</p></span></div></div>'
  );
}
