document.addEventListener('DOMContentLoaded', function() {
    // Function to change opacity of all images to 0.5
    function setAllImageOpacities() {
        var images = document.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            images[i].style.opacity = '0.5';
        }
    }

    // Call the function to set opacity of all images to 0.5
    setAllImageOpacities();

    // Function to trigger AJAX request to load data from a given HTML file
    function ajax(filepath) {
        var xhr = new XMLHttpRequest();

        xhr.onload = function() {
            if (xhr.status === 200) {
                document.getElementById("details").innerHTML = xhr.responseText;
            } else {
                console.error("Error:", xhr.statusText);
            }
        };

        xhr.open('GET', filepath, true);
        xhr.send();
    }

    // Event listener for the "Don Quixote" image
    document.getElementById("don-quixote-img").addEventListener('click', function(){
        ajax('data/cervantes-data.html');
        setAllImageOpacities(); // Set opacity of all images to 0.5
        this.style.opacity = '1';
    });

    // Event listener for the "A Tale of Two Cities" image
    document.getElementById("two-cities-img").addEventListener('click', function(){
        ajax('data/dickens-data.html');
        setAllImageOpacities(); // Set opacity of all images to 0.5
        this.style.opacity = '1';
    });

    // Event listener for the "The Lord of the Rings" image
    document.getElementById("lotr-img").addEventListener('click', function(){
        ajax('data/tolkien-data.html');
        setAllImageOpacities(); // Set opacity of all images to 0.5
        this.style.opacity = '1';
    });
});
