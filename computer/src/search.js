
const search = document.getElementById("search_input")
search.addEventListener("focus", (event) => {
    console.log("focused")
    search.classList.add("focus")
})
search.addEventListener("focusout", (event) => {
    console.log("unfocused")
    search.classList.remove("focus")
})

async function run_search(form) {
    console.log(form);
    query = search.value;
    response = await fetch(`https://duckduckgo.com/?q=${query}`, {mode: "no-cors"});

    /*
        .then(response => {
            if (!response.ok) {
                throw Error(response)
            }

            return response.text
        })
        .then(text => {
            const re = /vqd=([\d-]+)\&/
            const vqd = re.exec(text);
            return vqd
        })
        .then(vqd => {
            console.log(vqd);
            fetch(`https://duckduckgo.com/i.js?l=en-us&o=json&q=${query}&vqd=${vqd}&f=,,,&p=1&v7exp=a`, {
                mode: "no-cors",
                headers: {
                    'authority': 'duckduckgo.com',
                    'accept': 'application/json, text/javascript, * /*; q=0.01',
                    'sec-fetch-dest': 'empty',
                    'x-requested-with': 'XMLHttpRequest',
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36',
                    'sec-fetch-site': 'same-origin',
                    'sec-fetch-mode': 'cors',
                    'referer': 'https://duckduckgo.com/',
                    'accept-language': 'en-US,en;q=0.9',
                }
            }).then(response => {
                console.log(response);
            })
        })
        .catch((error) => console.error(error))*/
    return false;
}