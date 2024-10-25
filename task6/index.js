const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerText
    .split(' ')
    .map(word => word.length > 7 ? `<span style="background-color: blue">${word}</span>` : word)
    .map(word => word.length < 3 ? `<span style="font-weight: bold">${word}</span>` : word)
    .join(' ');