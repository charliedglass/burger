$(function() {
    $(".createBurger").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerText").val().trim()
        };

        $("#burgerText").text("");

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            location.reload();
        });
    });

    $(".devourBurger").on("click", function(event){
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(function(){
            location.reload();
        });
    });
});
