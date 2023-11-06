
// ! Script By Punnawat Pinsaeng IT-SE

// * Function for input from chat
function sendMessage() {

  const inputField = document.getElementById("input");
  let input = inputField.value.trim();
  input != "" && passThrough(input);
  inputField.value = "";
}

// * Enter "Enter" for send Message
document.addEventListener("DOMContentLoaded", () => {

  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      let input = inputField.value.trim();
      input != "" && passThrough(input);
      inputField.value = "";
    }

  });

});

// * Function for call Encrypt , Decrypt and add result to chat
function passThrough(str) {

  const charCode = [];
  for (let index = 0 ; index < str.length ; index++) charCode.push(str.charCodeAt(index));

  encrypt(charCode);
  addChat(decrpyt(charCode) , str);
}

// * Function Encrypt for Shuffle | Encoding
function encrypt(arr) {

  let currentIndex = arr.length,  randomIndex;
  while (currentIndex > 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}

// * Function Decrpyt for Shuffle | Decoding
function decrpyt(arr) {

  let result = "";
  for (let item of arr) result += String.fromCharCode(item);

  return result;
}

// * Function Show Image for Find Images From Input By User
function showImage(data) {

  const images = [];
  const arr = [

    "A" , "B" , "C" , "D" ,
    "E" , "F" , "G" , "H" ,
    "I" , "J" , "K" , "L" ,
    "M" , "N" , "O" , "P" ,
    "Q" , "R" , "S" , "T" ,
    "U" , "V" , "W" , "X" ,
    "Y" , "Z" ,
  ];

  for (let index = 0 ; index < data.length ; index++) {
      
      images.push(data[index]);
      images[index] = images[index].toUpperCase();
      for (let item of arr) if (images[index] == item) images[index] += ".jpg";
  }

  return images;
}

// * Function Add Chat for Add Message and Image to Chat
function addChat(decrpyt , str) {
  
  const mainDiv = document.getElementById("message-section");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.classList.add("message");
  userDiv.innerHTML = `<span id="user-response">${decrpyt}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.classList.add("message");
  botDiv.innerHTML = `<span id="bot-response">${str}</span`;
  mainDiv.appendChild(botDiv);

  const images = showImage(str);
  const showImages = Array(str.length);
  for (let index = 0 ; index < str.length ; index++) {
  
      showImages[index] = document.createElement('img');
      showImages[index].id = `imgShow${index}`;
      showImages[index].classList.add("message");
      showImages[index].src = "/images/" + images[index];
      mainDiv.appendChild(showImages[index]);
      showImages[index].style.width = "10px";
      showImages[index].style.top = "0px";
  }

  var scroll = document.getElementById("message-section");
  scroll.scrollTop = scroll.scrollHeight;
}