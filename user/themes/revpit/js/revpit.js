$(document).ready(function() {

    $("a[target='_blank']").each(function() {
        $(this).attr("rel", "noopener noreferrer");
    });

    $(".faq-accordion").accordion({
        active: false,
        collapsible: true,
        heightStyle: "content"
    });

});