async function searchWord() {

    let input = document.getElementById("wordInput").value;

    let word = document.getElementById("word");
    let meaning = document.getElementById("meaning");

    if(input === "") {
        word.innerHTML = "Please enter a word";
        meaning.innerHTML = "";
        return;
    }

    try {

        let response = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
        );

        let data = await response.json();

        word.innerHTML = data[0].word;

        meaning.innerHTML =
            data[0].meanings[0].definitions[0].definition;

    }

    catch(error) {

        word.innerHTML = "Word Not Found";

        meaning.innerHTML =
            "Please check spelling and try again.";

    }
}