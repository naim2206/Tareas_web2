async function main() {
    let toSearch = document.getElementById("toSearch").value;
    // const response = await axios({
    //     method: "GET",
    //     url: "http://localhost:3000/" + toSearch,
    // });
    // console.log(response.data.articles[0]);
    location.href = "http://localhost:3000/" + toSearch;
}

var input = document.getElementById("toSearch");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("search").click();
    }
});
