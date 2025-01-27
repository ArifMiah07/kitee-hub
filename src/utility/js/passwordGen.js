/*//---<>----???<><><...<><><>...>---<<>||<><><>||<>>----//*/
/*//---<>---//*/

/*//---<make a function that is able to generate password, username, email address or play with strings>---//*/
function userGenerator(digits) {
    
  /*//---<only use this 3 when need to generate username>---//*/
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";
  const lowercase = "abcdefghijklmnopqrstuvwxyz_";
  const numbers = "1234567890_";

  /*//---<use it when need to generate password>---//*/
  const sChars = "!@#$%^&*({[]})_+";
  /*//---<use it when need to generate password or special format anything to play>---//*/
  const sFormat = "///*---<>???...||";

  /*//---<>---//*/
  const allChars = uppercase + lowercase + numbers + sChars + sFormat;

  //let a empty user name array
  const username = [];
  for (let i = 0; i < digits; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    username.push(allChars[randomIndex]);
  }
  return username.join("");
}

function generateMultipleUsernames(count, digits) {
  const usernames = [];
  for (let i = 0; i < count; i++) {
    usernames.push(userGenerator(digits));
  }
  return usernames;
}

const usernames = generateMultipleUsernames(10, 32);
console.log(usernames);
