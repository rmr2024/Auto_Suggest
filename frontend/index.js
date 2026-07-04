const users = [
  {
    "name" :"Jane Doe",
    "gender" : "Female",
    "image" : "./images/jane.png"
  },
  {
    "name" :"John Doe",
    "gender" : "Male",
    "image" : "./images/john.png"
  }
];
let curUserId = 0;
function toggle(){
  if(curUserId == 0)
    curUserId=1;
  else
    curUserId=0;
  // image
  document.getElementById("img").src=users[curUserId].image;
  // name
  document.getElementById("card-name").innerText=users[curUserId].name;
  //gender
  document.getElementById("card-gender").innerText=users[curUserId].gender;
}

function getRandomUser(){
  const randomIndex = Math.floor(Math.random() * users.length);
  curUserId = randomIndex;
  // image
  document.getElementById("img").src=users[curUserId].image;
  // name
  document.getElementById("card-name").innerText=users[curUserId].name;
  //gender
  document.getElementById("card-gender").innerText=users[curUserId].gender;
}