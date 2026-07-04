var searchBox = document.getElementById("search-box");
var suggestionBox = document.getElementById("suggestion-box");
searchBox.addEventListener("input", function () {
    var userInput = searchBox.value;
    if (userInput.trim() === "") {
        suggestionBox.innerHTML = "";
    } else {
        var url1 = "https://autosuggest-backend.onrender.com/api/autosuggest?q=";
        var url3 = "&algorithm=brute&limit=10&weighted=false";
        var url = url1 + userInput + url3;
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                var resultArray = data.results;
                var htmlResults = "";
                for (var i = 0; i < resultArray.length; i++) {
                    htmlResults += "<div id='suggestion-item'>" + resultArray[i].text + "</div>";
                }
                suggestionBox.innerHTML = htmlResults;
            });
    }
});
