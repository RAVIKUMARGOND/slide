const images = [
    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpgie+1',
    'https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg',
    'https://upload.wikimedia.org/wikipedia/en/1/19/Kedarnath_film_Poster.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDIlPZyzaH0m5Gsd6R9WDeXEIdg7a8CT6RQ&s',
    'https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg'
];

let currentIndex = 0;
const slideshow = document.getElementById('slideshow');


slideshow.src = images[currentIndex];

function updateSlideshow() {
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.src = images[currentIndex];
    
}


setInterval(updateSlideshow, 2000);
