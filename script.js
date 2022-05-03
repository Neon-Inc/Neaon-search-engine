var urlParams = new URLSearchParams(window.location.search);

function search_button_clicked() {
    var next;
    var key = (document.getElementById("search-bar").value).toLowerCase();
    if (key == "webjednoduse") {
        next = "https://webjednoduse.github.io/";
    } else if (key == "webjednoduse") {
        next = "https://webjednoduse.github.io/";
    } else if (key == "youtube") {
        next = "https://youtube.com";
    }  else if (key == "wiki") {
        next = "https://wikipedia.org";
    }  else if (key == "") {
        next = "https://google.com";
    } else {
        next = 'https://google.com/search?q=' + document.getElementById("search-bar").value;
    }
    window.location.replace(next);
}

