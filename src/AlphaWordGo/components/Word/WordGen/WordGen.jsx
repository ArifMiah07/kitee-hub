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
        const randomNumber = Math.ceil(Math.random() * 98) + 1;
        for (let i = 0; i < randomNumber; i++) {
          const randomDigits = Math.ceil(Math.random() * 14) + 2;
          usernames.push(userGenerator(randomDigits));
          //   console.log("randomDigits: ",randomDigits);
        }
        console.log("randomNumber :", randomNumber);
        return usernames;
      }
      
  const handleWordGen = ()=> {
    const usernames = generateMultipleUsernames();
      console.log(usernames);
    setMakeRandomWord(usernames)
  }
  console.log(makeRandomWord);

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="font-bold text-2xl p-2">Generate Random Word</h1>
      <div className="flex flex-col items-center">
        <button onClick={handleWordGen} className="bg-green-400 hover:bg-green-500 focus:bg-green-600 text-black hover:text-white focus:text-white  p-2">Generate Word</button>
      </div>
      <div className="w-full h-full flex flex-row flex-wrap gap-4 items-center p-4 ">
        {
            makeRandomWord.map((word, i)=> (
                <div className="flex flex-row float-left flex-wrap w-full h-full" key={i}>
                    <p className="bg-green-400 flex flex-row items-center justify-center float-left flex-wrap w-fit h-full text-[#000] rounded-full p-3 border-x-4 border-t border-red-700  ">{word}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default WordGen;
