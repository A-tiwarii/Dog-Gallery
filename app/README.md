
# Dog Gallery

Simple React website which consumes data from ( https://dog.ceo/dog-api/documentation/) and provides Gallery view.

- Note: This project is for ICICI Innovation Labs Recruitment Process


## Author

- [@A-tiwarii](https://github.com/A-tiwarii)



## Installation

Install my-project with npm

```bash
  npm i
 
  npm start

 -->Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.
You will also see any lint errors in the console.
  cd Dog-Gallery-Website-main
```
## Production
    npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
## Features

- Gallery view
- Custom search
- Inbuilt search bar
- pop-up view for Subbread and more images of dog



## Screenshots (please open to see full image)

![Sample](https://github.com/A-tiwarii/Dog-Gallery/blob/main/app/Screenshot%20(531).png)
![test](https://github.com/A-tiwarii/Dog-Gallery/blob/main/app/Screenshot%20(522).png)
![sample](https://github.com/A-tiwarii/Dog-Gallery/blob/main/app/Screenshot%20(532).png)
![test](https://github.com/A-tiwarii/Dog-Gallery/blob/main/app/Screenshot%20(523).png)
![sample](https://github.com/A-tiwarii/Dog-Gallery/blob/main/app/Screenshot%20(523).png)
![all test](https://github.com/A-tiwarii/Dog-Gallery/blob/main/app/Screenshot%20(524).png)
![all test](https://github.com/A-tiwarii/Dog-Gallery/blob/main/app/Screenshot%20(526).png)
![all test](https://github.com/A-tiwarii/Dog-Gallery/blob/main/app/Screenshot%20(527).png)
![all test](https://github.com/A-tiwarii/Dog-Gallery/blob/main/app/Screenshot%20(528).png)
![all test](https://github.com/A-tiwarii/Dog-Gallery/blob/main/app/Screenshot%20(529).png)
![all test](https://github.com/A-tiwarii/Dog-Gallery/blob/main/app/Screenshot%20(534).png)


## Given Task (✔ /❌)

- Build a Dog Gallery website. ✔
- The website should show all the dog breeds along with an image (See below
  image for reference). ✔
- Users should be able to filter the dog list by entering the breed name.✔
- When the user clicks on a breed, he/she should be able to see the sub-breeds of
  the dog along with more images of the breed. (See below image for reference) ✔
- When the user clicks on the “Custom Search” button, he/she should be able to
  see the provided number of images of the selected breed. (See below image for
  reference) ✔
 ## Technicals:
- Create a Dog Gallery Home Page. ✔
- Fetch the list of breeds using the API - https://dog.ceo/api/breeds/list/all (Check
  Documentation)✔
- For each breed, Fetch a Random image of the dog by breed-
  https://dog.ceo/api/breed/<dog-breed>/images/random (Check Documentation) ✔
- Implement Search. Users should be able to filter the list of breeds by breed
  name. (You will have to write a function to filter the list of breeds) ✔
- On Click of a Dog Breed, Show a Modal with Header as the Dog Breed Name. ✔
- The Modal should have two sections 
  a. Sub-Breeds Section:
  i. Fetch the list of sub-breeds of a dog breed.
  https://dog.ceo/api/breed/<dog-breed>/list (Check Documentation)
  ii. If the dog breed has sub-breeds, Show the list of sub-breeds, as
  shown in the image above.
  iii. Show a Random image of each sub-breed.
  https://dog.ceo/api/breed/<dog-breed>/<sub-breed>/images/rando
  m
  b. More Images Section:
  i. Fetch 3 more images of dog-breed from API -
  https://dog.ceo/api/breed/<dog-breed>/images/random/3
  ii. Show the images under the More Images section.  ✔
- On Click of the “Custom Search” button, Show a Modal. ✔
- The Model should have two sections
  a. Breed Selection Form:
  i. Have a dropdown field to select a breed from the dog breeds list.
  ii. Have a number field to enter the number of images to load.
  iii. Have a button with the name - “Get Images”
  b. Images Section:
  i. On click of “Get Images”, fetch the images using the API -
  https://dog.ceo/api/breed/<dog-breed>/images/random/<number-ofimages>
  ii. The values for <dog-breed> and <number-of-images> comes from
  the Breed Selection Form.
  iii. Show the images from the API under the heading - “Showing
  <number-of-images> images of <dog-breed-name>” ✔

  

## Feedback

If you have any feedback, please reach out to us at amnntiwari@gmail.com



## Thank you ❤

