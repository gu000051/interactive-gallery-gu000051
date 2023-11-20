const gallery = document.getElementById('imageGallery');
const overlay = document.getElementById('overlay');

// Updated image data with links for thumbnails, full-size images, and captions
const images = [
    { thumbnailSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', fullSizeSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', caption: 'Bulbasaur' },
    { thumbnailSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', fullSizeSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png', caption: 'Ivysaur' },
    { thumbnailSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', fullSizeSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png', caption: 'Venusaur' },
    { thumbnailSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', fullSizeSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png', caption: 'Charmander' },
    { thumbnailSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', fullSizeSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png', caption: 'Charmeleon' },
    { thumbnailSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', fullSizeSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png', caption: 'Charizard' },
    { thumbnailSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', fullSizeSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png', caption: 'Squirtle' },
    { thumbnailSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png', fullSizeSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png', caption: 'Wartortle' },
    { thumbnailSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png', fullSizeSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png', caption: 'Blastoise' },
    { thumbnailSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png', fullSizeSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png', caption: 'Caterpie' },
    { thumbnailSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png', fullSizeSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png', caption: 'Metapod' },
    { thumbnailSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png', fullSizeSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png', caption: 'Butterfree' },
    // ... Add more objects for a total of 12 items
];

function createGallery() {
    images.forEach(function(image, index) {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.thumbnailSrc;
        thumbnail.alt = 'Thumbnail ' + (index + 1);
        thumbnail.addEventListener('click', function() {
            showOverlay(image.fullSizeSrc, image.caption);
        });
        gallery.appendChild(thumbnail);
    });
}

function showOverlay(fullSizeSrc, caption) {
    overlay.innerHTML = '<img src="' + fullSizeSrc + '" alt="HD Image">' +
                         '<p>' + caption + '</p>' +
                         '<span class="close-btn" onclick="closeOverlay()">×</span>';
    overlay.style.display = 'flex';
}

function closeOverlay() {
    overlay.style.display = 'none';
}

// Initialize the gallery
createGallery();
