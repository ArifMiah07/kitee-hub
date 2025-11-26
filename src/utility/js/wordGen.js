/*//---<>----???<><><...<><><>...>---<<>||<><><>||<>>----//*/
/*//---<>---//*/

/*//---<make a function that is able to generate password, username, email address or play with strings>---//*/
function userGenerator(digits) {
    
    /*//---<only use this 3 when need to generate username>---//*/
    // const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    // const constant = "bcdfghjklmnpqrstvwxyz_";
    const vowel = "aeiou";
    // const numbers = "1234567890_";
  
    /*//---<>---//*/
    const allChars = lowercase + vowel;
  
    //let a empty user name array
    const username = [];
    for (let i = 0; i < digits; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      username.push(allChars[randomIndex]);
    }
    return username.join("");
  }
  
  function generateMultipleUsernames() {
    const usernames = [];
    const randomNumber = Math.ceil(Math.random() * 98) + 1;
    for (let i = 0; i < randomNumber; i++) {
        const randomDigits = Math.ceil(Math.random() * 14) + 2;
      usernames.push(userGenerator(randomDigits));
    //   console.log("randomDigits: ",randomDigits); 
    }
    console.log("randomNumber :",randomNumber); 
    return usernames;
  }
//   const randomDigits = Math.ceil(Math.random() * 14) + 2;
//   const randomNumber = Math.ceil(Math.random() * 98) + 1;
//   console.log(randomDigits, randomNumber); 
  const usernames = generateMultipleUsernames();
  console.log(usernames);
  