//check off specific to-do's by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
})


//click on X to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").on("keypress", function (event) {
	if (event.which === 13) {
		let text = $(this).val();
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + text + "</li>")
		$(this).val("");
	}
})

$(".fa-plus").on("click", function() {
	$("input[type='text']").fadeToggle(100);
})