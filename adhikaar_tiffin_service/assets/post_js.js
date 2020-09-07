
  var span = $("<span>")
  .css("display", "inline-block")
  .css("word-break", "break-all")
  .appendTo("body")
  .css("visibility", "hidden");
function initSpan(textarea) {
  span
    .text(textarea.text())
    .width(textarea.width())
    .css("font", textarea.css("font"));
}
$("textarea").on({
  input: function() {
    var text = $(this).val();
    span.text(text);
    $(this).height(text ? span.height() : "1.1em");
  },
  focus: function() {
    initSpan($(this));
  },
  keypress: function(e) {
    //cancel the Enter keystroke, otherwise a new line will be created
    //This ensures the correct behavior when user types Enter
    //into an input field
    if (e.which == 13) e.preventDefault();
  }
});


var imagewidth = document.getElementById("post-images").offsetWidth;
document.getElementById("post-single-image").style.width =
  imagewidth + "px";
console.log(imagewidth);
