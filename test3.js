/*//---<>----???<><><...<><><>...>---<<>||<><><>||<>>----//*/


/*//---<make a function that is able to generate password, username, email address or play with strings>---???
// ---<function><<userGenerator><generateMultipleUsernames>><...<><><>...>---<<>||<><done><>||<>>----//*/
function userGenerator(digits) {

    /*//---<only use this 3 when need to generate username>---???---<const><cl, sl, numbs>< "ABCDEFGHIJKLMNOPQRSTUVWXYZ_", "abcdefghijklmnopqrstuvwxyz_", "1234567890_">---<>----//*/
      const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";
      const lowercase = "abcdefghijklmnopqrstuvwxyz_";
      const numbers = "1234567890_";
    
      
      /*//---<use it when need to generate password>---???---<const sChars><><"!@#$%^&*({[]})_+">---<>----//*/
      const sChars = "!@#$%^&*({[]})_+";
      /*//---<use it when need to generate password or special format anything to play>---???---<const sFormat><><"///*---<>???...||">---<>----//*/
      const sFormat = "///*---<>???...||"
      
      /*//---<variables>---???---<const><capitalLetter, smallLetter, numbers, specialChars, specialFormat, allChars><.split(""), <capitalLetter.concat(smallLetter, numbers, specialChars)>>---<>---//*/
    //   const capitalLetter = cl.split("");
    //   const smallLetter = sl.split("");
    //   const numbers = numbs.split("");
    //   const specialChars = sChars.split("");
    //   const specialFormat = sFormat.split("");
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
    // const usernameToSave = usernames.join('\n');
    // const wordsToWriteInStr = `"${[wordsToWrite]}"`
    
    // fs.appendFile('log7.txt', usernameToSave, (err) => {
    //     if (err) throw err;
    //     console.log('Data appended!');
    // });