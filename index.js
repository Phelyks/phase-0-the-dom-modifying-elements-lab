const main = document.getElementById("main");

main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'clap';
newHeader.innerHTML = "Name is the champion";
newHeader.className = "clap";