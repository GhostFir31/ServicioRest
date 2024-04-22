const url="https://api.thecatapi.com/v1/images/search"

const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    
    const img = document.querySelector('img');
    img.src = data[0].url;
};

fetchData();