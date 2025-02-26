import { useState } from "react";

const InstagramUser = () => {
  const [wordVariantN, setWordVariantN] = useState([]);
  const [wordLength, setWordLength] = useState(0);

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
    const makeMultipleUserName = (digits) => {
      const randomNumber = Math.ceil(Math.random() * 999) + 1;

      for (let i = 1; i <= randomNumber; i++) {
        const newArr = Array(digits)
          .fill(0)
          .map(
            (_, i) =>
              constantAlphabet[
                Math.floor(Math.random() * constantAlphabet.length)
              ] + vowels[Math.floor(Math.random() * vowels.length)]
          );
        const newWord = newArr.join("");
        newWordList.push(newWord);

        // console.log("wordVariantN: ", wordVariantN);
        // console.log(newWord);
      }
    };

    const randomDigits = Math.ceil(Math.random() * 15);
    setWordLength(randomDigits);
    makeMultipleUserName(randomDigits);
    // console.log(newWordList);
  };

  const handleVariantsN = (n) => {
    console.log("Clicked", n);
  };

  const handleVariants = () => {
    console.log("Clicked");
    userNameVariationN();
    console.log(newWordList);
    setWordVariantN(newWordList);
    // setWordVariantN()
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full min-h-screen bg-gradient-to-r from-teal-400 via-green-400 to-teal-600 p-6">
      <div className="flex flex-col gap-8">
        <button
          onClick={handleVariants}
          className="relative bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          Generate Word
          <span className="absolute -bottom-4 -right-8 text-xs p-2 rounded-r-none rounded-l-full rounded-b-full rounded-t-full border border-green-900 hover:outline-dashed hover:outline-green-800 bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white transition-all duration-300 ease-in-out transform hover:scale-105">
            {wordVariantN.length}
          </span>
          <span className="absolute -bottom-8 -right-16 text-xs p-2 rounded-r-none rounded-l-full rounded-b-full rounded-t-full border border-green-900 hover:outline-dashed hover:outline-green-800 bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white transition-all duration-300 ease-in-out transform hover:scale-105">
            {wordLength * 2}
          </span>
        </button>
        <div className="flex gap-4">
          <button
            onClick={() => handleVariantsN(1)}
            className={`relative bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105`}>
            V1
          </button>
          <button
            onClick={() => handleVariantsN(2)}
            className="relative bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            V2
          </button>
          <button
            onClick={() => handleVariantsN(3)}
            className="relative bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            V3
          </button>
          <button
            onClick={() => handleVariantsN(4)}
            className="relative bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            V4
          </button>
        </div>
      </div>
      <div className="w-full h-full flex flex-row flex-wrap gap-6 justify-center">
        {wordVariantN?.map((word, i) => (
          <div key={i} className="flex flex-row flex-wrap justify-center">
            <p className="bg-white text-green-700 py-2 px-6 rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg cursor-pointer text-xl border-l-4 border-t-4 border-green-500">
              <a
                href={`https://www.instagram.com/${word}`}
                target="_blank"
                rel="noopener noreferrer">
                {word}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramUser;
