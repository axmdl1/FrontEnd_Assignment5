function HighlightWords(){
    var paragraph = document.getElementById("text");
    var text = paragraph.textContent;
    var words = text.split(/\s+/);

    for (let i = 0; i < words.length; i++){
        let word = words[i];

        if (word.toLowerCase().startsWith("a")){
            words[i] = `<span style="font-style: italic">${word}</span>`;
        }

        if (word.toLowerCase().endsWith("y")){
            words[i] = `<span style="text-decoration: underline">${word}</span>`;
        }
    }
    paragraph.innerHTML = words.join(' ');
}