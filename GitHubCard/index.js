/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const axiosPromise = axios
.get("https://api.github.com/users/IsaiahFlax")
.then(response => {
  console.log('res', response)
  cards.append(createNewCard(response.data))
})
const cards = document.querySelector('.cards')

console.log('promise', axiosPromise)
const friendsArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell']

  friendsArray.forEach(user => {
    axios
    .get(`https://api.github.com/users/${user}`)
    .then(response => {
      cards.append(createNewCard(response.data))
  console.log('res', response)
  })
})
  console.log(friendsArray)
const createNewCard = user => {
const card = document.createElement('div')
const image = document.createElement('img')
const cardInfo = document.createElement('div')
const name = document.createElement('h3')
const username = document.createElement('p')
const located = document.createElement('p')
const profile = document.createElement('p')
const profileHref = document.createElement('a')
const followers = document.createElement('p')
const following = document.createElement('p')
const bio = document.createElement('p')

image.src = `${user.avatar_url}`
name.textContent = `${user.name}`
username.textContent = `${user.login}`
located.textContent = `Location : ${user.location}`
profile.textContent  = 'Profile: '
profileHref.textContent = `${user.html_url}`
profileHref.href = `${user.html_url}`
followers.textContent = `Followers: ${user.followers}`
following.textContent = `Following: ${user.following}`
bio.textContent = `Bio: ${user.bio}`

card.append(image)
card.append(cardInfo)
cardInfo.append(name)
cardInfo.append(username)
cardInfo.append(located)
cardInfo.append(profile)
profile.append(profileHref)
cardInfo.append(followers)
cardInfo.append(following)
cardInfo.append(bio)

card.classList.add('card')
cardInfo.classList.add('card-info')
name.classList.add('name')
username.classList.add('username')


return card
}
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/