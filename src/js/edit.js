var editHtml = 'start html';

$(".edit").click(function() {
  //$('body input').each(function() {
      //$(this).replaceWith(updateHtml(editHtml));
  //});
  var id = $(this).attr('id');
  var text = $(this).text();
  $(this).replaceWith("<input type='text' value='"+text.trim()+"'>");
});

function stripTags(html) {
  editHtml = $(this).html();
  startTag = editHtml.split(">")[0] + ">";
  finishTag = "<" + editHtml.split("<").slice(-1)[0];
}

function updateHtml(editHtml) {
  return '<div class="edit"><h1>Hello</h1></div>';
}
//$("body").click(function() {
//  $('body input').each(function() {
//    $(this).replaceWith("<p>replaced</p>");
//  });
//});
