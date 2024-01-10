const url = "https://cataas.com/cat?type=square";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getCatData = () => {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then((data) => {
            generateCat(data);
        })
        .catch(error => {
            console.error('Error fetching cat data:', error);
        });
}

let generateCat = (data) => {
    const imageUrl = URL.createObjectURL(data);

    card.innerHTML = `
    <h2>neko collection</h2>
    <div class="img-container" id="image-container">
        <img src=${imageUrl} alt="Cat Image">
    </div>
    `;
}

btn.addEventListener("click", getCatData);
window.addEventListener("load", getCatData);
