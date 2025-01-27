import { useState } from "react";

const WordGen = () => {

    const [makeRandomWord, setMakeRandomWord] = useState([])


    function userGenerator(digits) {

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
        const randomNumber = Math.ceil(Math.random() * 998) + 1;
        for (let i = 0; i < randomNumber; i++) {
          const randomDigits = Math.ceil(Math.random() * 14) + 2;
          usernames.push(userGenerator(randomDigits));
          //   console.log("randomDigits: ",randomDigits);
        }
        // console.log("randomNumber :", randomNumber);
        
        return usernames;
      }

      
  const handleWordGen = ()=> {
    const usernames = generateMultipleUsernames();
    // setCount(usernames.length)
    //   console.log(usernames);
    setMakeRandomWord(usernames)
  }
  console.log(makeRandomWord.length);
  console.log(makeRandomWord);

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-r from-teal-400 via-green-400 to-teal-600 p-6">
      <h1 className="text-4xl font-semibold text-white mb-6">Generate Random Word</h1>

      <div className="flex flex-col items-center mb-6">
        <button
          onClick={handleWordGen}
          className="relative bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Generate Word
          <span className="absolute -bottom-4 -right-8 text-xs p-2 rounded-r-none rounded-l-full rounded-b-full rounded-t-full bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white transition-all duration-300 ease-in-out transform hover:scale-105">{makeRandomWord.length}</span>
        </button>
      </div>
  
      <div className="w-full h-full flex flex-row flex-wrap gap-6 justify-center">
        {makeRandomWord.map((word, i) => (
          <div key={i} className="flex flex-row flex-wrap justify-center">
            <p className="bg-white text-green-700 py-2 px-6 rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg cursor-pointer text-xl border-l-4 border-t-4 border-green-500">
              {word}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default WordGen;
