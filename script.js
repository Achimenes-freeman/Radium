const h1 = document.querySelector('h1'),
      h2 = document.querySelector('h2');

h1.addEventListener('click', (e) => {
    e.target.style.visibility = 'hidden';
});

h2.addEventListener('click', (e) => {
    e.target.style.visibility = 'hidden';
});

document.addEventListener('keydown', (e) => {
    if (e.code == "Space") {
        h1.remove();
        h2.remove();
    }
});