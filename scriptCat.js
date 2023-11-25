document.addEventListener('DOMContentLoaded', () => 
{
    const buttonCat = document.getElementById('buttonCat');
    const catImageDiv = document.getElementById('catImage');
  
    buttonCat.addEventListener('click', () => 
    {

      fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())

        .then(data => {

          const catImageUrl = data[0].url;
  
          const catImgElement = document.createElement('img');

          catImgElement.src = catImageUrl;

          catImgElement.alt = 'Random Cat';

          catImgElement.classList.add('cat-image');
  
          catImageDiv.innerHTML = '';

          catImageDiv.appendChild(catImgElement);
        })
        .catch(error => {
          console.log('Error fetching cat image:', error);
        });
    });
  });
  