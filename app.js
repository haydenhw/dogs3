
const BASE_URL = 'https://dog.ceo/api/breeds/image/random';

const fetchRandDogs = (numDogs) => axios(`${BASE_URL}/${numDogs}`);

$(async () => {
  $("#js-dogs-form").submit(async function (event) {
    event.preventDefault();
    const numDogsInputEl = $(".js-num-dog-input");
    const numDogsInputVal =  numDogsInputEl.val()
    const {data} = await fetchRandDogs(numDogsInputVal);
    const dogImageUrls = data.message;
    console.log(dogImageUrls)
    });
});











