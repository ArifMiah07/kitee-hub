import { useState } from "react";

const Variations = () => {
  const [wordVariantN, setWordVariantN] = useState([]);



  const newWordList = [];

  const userNameVariationN = () => {
    // const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const constantAlphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const vowels = ["a", "e", "i", "o", "u"];
    
    //   const newWordList2 = [];
    const makeMultipleUserName = (n) => {
      for (let i = 1; i <= 100; i++) {
        const newArr = Array(n)
          .fill(0)
          .map(
            (_, i) =>
              constantAlphabet[
                Math.floor(Math.random() * constantAlphabet.length)
              ] + vowels[Math.floor(Math.random() * vowels.length)]
          );
        const newWord = newArr.join("");
        newWordList.push(newWord);
        
        console.log("wordVariantN: ", wordVariantN);
        console.log(newWord);
      }
    };

    makeMultipleUserName(5);
    console.log(newWordList);
  };

  const handleVariants = () => {
    console.log("Clicked");
    userNameVariationN();
    setWordVariantN(newWordList);
    // setWordVariantN()
  };

  return (
    <div className="flex flex-col items-center gap-12 w-full min-h-screen bg-gradient-to-r from-teal-400 via-green-400 to-teal-600 p-6">
      <div>
        <button
          onClick={handleVariants}
          className="relative bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          Generate Word
          <span className="absolute -bottom-4 -right-8 text-xs p-2 rounded-r-none rounded-l-full rounded-b-full rounded-t-full border border-green-900 hover:outline-dashed hover:outline-green-800 bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white transition-all duration-300 ease-in-out transform hover:scale-105">
            {wordVariantN.length}
          </span>
        </button>
      </div>
      <div className="w-full h-full flex flex-row flex-wrap gap-6 justify-center">
        {wordVariantN?.map((word, i) => (
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

export default Variations;
