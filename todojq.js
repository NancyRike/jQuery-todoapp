// code block for header date
var thedate = new Date();
var arrangedate = thedate.toDateString();
document.getElementById("todate").innerText = `Today ${arrangedate}`
// $('input').append('<input id = "today" type = "datetime-local">')
// code block for input date
let today = new Date().toISOString().substr(0, 10);
// main jQuery code block
$(document).ready(function(){
   // using the add buttton
   $('.addbutton').click(function(){
      // setting empty value
   var output = $('#input').val(); 
   $(this).val(' ');
   var dating = $('#today').val();
          
   //  adding li, delete button, and dynamic date
    $('ol').append('<li>'+ output + dating + '<button class = "del">delete</button>')
    $("li").addClass("list")
   // reseting the input field
   $('input:text').click(function(){
      $(this).val(' ');
   });
      // the delete button
     $('.del').click(function(){
        $(this).closest('.list').fadeOut(1000)
   })
   
});
});
