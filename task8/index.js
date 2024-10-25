var paragraph =  document.getElementById('text');
paragraph.innerHTML = paragraph.innerHTML.split(/(?<=[.?!])\s*/).join('<br>');