
# clone dog into dog2
# checkout dog to branch that just logs stuff

# check out to a github pages branch 
ac 'commiting for deployment'
git checkout -b gh-pages
git push origin gh-pages


form #dog-by-breed-form
    select #breed-select-input
div .dog-img-container


# need a form
# inputs: breed -> select with three breeds
# handle success, handle error


@param breedName string 
@return promise that resolves to random image

def fetchRandomImageByBreed(breedName):
 # use breed name to make a url string
 # use axios to fetch basedon that



@param url string
@return jquery html object with image markup

def renderImage(imgUrl):    
    


# gets input from select and calls ...

def handleFormSubmit();
  breedName = #select-input.val()
  imgUrl = fetchRandomImageByBreed(breedName)
  renderImage(imgUrl)



