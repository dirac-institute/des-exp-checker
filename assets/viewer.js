function createVisualization(){
    var el = $('#wicked-science-visualization').get(0);
    var randomName = chooseRandom();
    const newImg = document.createElement("img");
    newImg.src = 'assets/kbmod-postage-stamps/' + randomName + '.png'
    el.append(newImg);
    var newUrl = window.location.pathname + '?fildid=' + randomName;
    window.history.replaceState(null, "Title", newUrl);
}

function chooseRandom(){
    var dbRow = "";
    $.ajax({
        async: false,
        url: "db.php",
        type: "POST",
        dataType: "json",
        success: function(response) {
            dbRow = response.fileid;
        },
    });
    return dbRow;
}

function newVisualization(){
    var el = $('#wicked-science-visualization').get(0);
    var randomName = chooseRandom();
    const newImg = document.createElement("img");
    newImg.src = 'assets/kbmod-postage-stamps/' + randomName + '.png'
    el.replaceChild(newImg, el.childNodes[0])
    var newUrl = window.location.pathname + '?fildid=' + randomName;
    window.history.replaceState(null, "Title", newUrl);
}
