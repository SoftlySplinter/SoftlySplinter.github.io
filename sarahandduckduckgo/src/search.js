
const search = document.getElementById("search_input")
search.addEventListener("focus", (event) => {
    console.log("focused")
    search.classList.add("focus")
})
search.addEventListener("focusout", (event) =>  {
    console.log("unfocused")
    search.classList.remove("focus")
})

function run_search(form) {
    console.log(form);
    query=search.value;
    fetch(`http://duckduckgo.com/?q=${query}`, {
        method: "POST",
        body: JSON.stringify({q: query})
    })
        .then(response => {
            if (!response.ok) {
                throw Error(response)
            }

            return response.text
        })
        .then(text => console.info(text))
        .catch((error) => console.error(error))
    return false;
}