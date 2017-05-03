$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});




//BASIC SYNTAX FOR AJAX



// $(document).ready(function () {

//   // PSEUDO-CODE:
//   //   1- intercept the form submission event using jQuery
//   $("form").on("submit", function(e){
//   //   2- prevent the default action for that event from happening
//     e.preventDefault();
//     var formInputs = $(this);
//     var inputSides = formInputs.serialize();
//     // debugger
//   //   3- use jQuery to submit an AJAX post to the form's action
//     $.ajax({
//       method: formInputs.attr("method"),
//       url:    formInputs.attr("action"),
//       data:   inputSides
//     })

//   //   4- when the AJAX post is done, display the new die roll using jQuery
//     .done(function(response) {
//       $(".roll").empty();
//       $(".roll").append(response);
//     })
//  });
// });









// For the AJAX USER LOGIN AND SIGNUP PAGE



// $(document).ready(function() {
//   $('#homepage-signup').on('click', "a", function(e){
//     e.preventDefault();
//     var link = $(this);
//     $.ajax({
//       url:    link.attr("href")
//     })
//     .done(function(response){
//       $('#homepage-signup').empty();
//       $('#homepage-login').append(response);
//     })
//   });

//   $('#homepage-login').on('click', "a", function(e){
//     e.preventDefault();
//     var link = $(this);
//     $.ajax({
//       url:    link.attr("href")
//     })
//     .done(function(response){
//       $('#homepage-login').empty();
//       $('#homepage-signup').append(response);
//     })
//   });
// });




//  Check-point challenge:   Error ajax message and traversing keys



// $('#homepage').on("submit", "#new-horse-form", function(e){
//     e.preventDefault();
//     var form = $(this)
//     $.ajax({
//       method: $(this).attr("method"),
//       url:    form.attr("action"),
//       data:   $(this).serialize()
//     })
//     .done(function(response){
//       $('.list').append(response)
//       form.remove();
//       $('#add-horse').show();
//     })
//     .fail(function(eresponse){
//       alert(eresponse.responseText);
//     })
//   });

//   $('.list').on("click", "a", function(e){
//     e.preventDefault();
//     var name = $(this);
//     if (name.next().attr('class') != 'list') {
//       $.ajax({
//         url:    name.attr("href"),
//       })
//       .done(function(response){
//         name.after(response);
//       })
//     } else {
//       name.next().remove();
//     }
//   });
