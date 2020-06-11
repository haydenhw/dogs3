const BASE_URL = 'https://dog.ceo/api/breed';

const fetchRandDogByBreed = (breedName) => axios(`${BASE_URL}/${breedName}/images/random`);
const renderImg = (imgUrl) => $(`<img src=${imgUrl} class="dog-image">`);

$(async () => {
  $(document).on('input', '#slider', function () {
    $('#slider_value').html($(this).val());
  });

  $('.js-dog-form').submit(async function (event) {
    event.preventDefault();
    const breedName = $('.js-select-input').val();
    try {
      const {data} = await fetchRandDogByBreed(breedName);
      const dogImg = renderImg(data.message);
      $('.js-dog-img-container').html(dogImg)
    } catch(err) {
      $('.js-dog-img-container').html('Sorry, we couldn\'t find any dogs of breed ' + breedName);
    }
  });
});











