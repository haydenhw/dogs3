const BASE_URL = 'https://dog.ceo/api/breed';

const fetchRandDogByBreed = (breedName) => axios(`${BASE_URL}/${breedName}/images/random`);
const renderImg = (imgUrl) => $(`<img src=${imgUrl} class="dog-image">`);

$(async () => {
  $('.js-dog-form').submit(async function (event) {
    event.preventDefault();

    let breedName = $('.js-breed-input').val();
    breedName = breedName.trim().toLowerCase();
    try {
      const {data} = await fetchRandDogByBreed(breedName);
      const dogImg = renderImg(data.message);
      $('.js-dog-img-container').html(dogImg)
      $('.js-hide').removeClass('hidden')
    } catch(err) {
      if (err.response.status === 404) {
        $('.js-error').html('Sorry, we couldn\'t find any dogs of breed ' + breedName);
      }
    }
  });
});








