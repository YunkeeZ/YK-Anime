
document.addEventListener("DOMContentLoaded", function() {
    fetch('animeData.json')
        .then(response => response.json())
        .then(data => displayAnime(data));
});

function displayAnime(animeList) {
    const main = document.getElementById('recommendations');
    animeList.forEach(anime => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${anime.title}</h3><p>${anime.synopsis}</p>`;
        main.appendChild(div);
    });
}
