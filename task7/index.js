Array.from(document.querySelectorAll('p'))
    .forEach(p => {
        p.innerHTML = p.innerHTML
            .replace(/\?/, '*')
            .replace(/\!/, '@');
    })