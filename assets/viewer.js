function createVisualization(){
    var el = $('#wicked-science-visualization').get(0);
    var randomName = chooseRandom();
    const newImg = document.createElement("img");
    newImg.src = 'assets/kbmod-postage-stamps/' + randomName + '.png'
    el.append(newImg);
}

// function chooseRandom(){
//     var queryResult;
//     $.get('db.php', {'release': 'DEEP'}, function(response) {
//         queryResult = response;
//     }, 'json');
//     $(this).val(queryResult);
//     debugger;
// }

function chooseRandom(){
    $.ajax({
        url: "db.php",
        type: "GET",
        dataType: "json",
        success: function(response) {
        alert(response)
        debugger;
        }
    });
}