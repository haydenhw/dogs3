
const BASE_URL = 'https://dog.ceo/api/breeds/image/random';

const fetchRandDogs = (numDogs) => axios(`${BASE_URL}/${numDogs}`);

$(async () => {
  $(document).on('input', '#slider', function() {
    $('#slider_value').html( $(this).val() );
  });

  $('#js-dogs-form').submit(async function (event) {
    event.preventDefault();
    const numDogsInputVal =  $('#slider').val();
    const {data} = await fetchRandDogs(numDogsInputVal);
    const dogImageUrls = data.message;
    console.log(dogImageUrls)
    });


});











