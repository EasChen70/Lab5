document.addEventListener('DOMContentLoaded', function() {
    // Function to change opacity of all images to 0.5
    function setAllImageOpacities() {
        var images = document.querySelectorAll('.book-layout img');
        for (var i = 0; i < images.length; i++) {
            images[i].style.opacity = '0.5';
        }
    }

    // Call the function to set opacity of all images to 0.5
    setAllImageOpacities();

    // Function to trigger AJAX request to load data from a given XML file
    function ajax(filepath, index) {
        var xhr = new XMLHttpRequest();

        // Clear the content of the "details" div
        document.getElementById("details").innerHTML = '';

        xhr.onload = function() {
            if (xhr.status === 200) {
                var xmlDoc = xhr.responseXML;
                var books = xmlDoc.getElementsByTagName("book");

                if (index >= 0 && index < books.length) {
                    var book = books[index];
                    var title = book.getElementsByTagName("title")[0].textContent;
                    var author = book.getElementsByTagName("author")[0].textContent;
                    var sold = book.getElementsByTagName("sold")[0].textContent;
                    var description = book.getElementsByTagName("description")[0].textContent;

                    // Create elements for displaying book information
                    var titleElement = document.createElement("h3");
                    titleElement.textContent = title;

                    var authorElement = document.createElement("p");
                    authorElement.textContent = "Author: " + author;

                    var soldElement = document.createElement("p");
                    soldElement.textContent = "Sold: " + sold;

                    var descriptionElement = document.createElement("p");
                    descriptionElement.textContent = description;

                    // Append elements to the "details" div
                    var detailsDiv = document.getElementById("details");
                    detailsDiv.appendChild(titleElement);
                    detailsDiv.appendChild(authorElement);
                    detailsDiv.appendChild(soldElement);
                    detailsDiv.appendChild(descriptionElement);
                } else {
                    console.error("Index out of range");
                }
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
