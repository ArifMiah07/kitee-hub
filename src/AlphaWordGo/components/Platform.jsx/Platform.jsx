import { useEffect, useState } from "react";
import { ListOfPlatforms } from "./PlatformData";

const Platform = () => {
  const [wordVariantN, setWordVariantN] = useState([]);
  const [wordLength, setWordLength] = useState(0);

  const [currentPlatform, setCurrentPlatform] = useState(false);
  const [currentPlatformId, setCurrentPlatformId] = useState(0);
  const [currentUserName, setCurrentUserName] = useState("");

  

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

    const randomDigits = Math.ceil(Math.random() * 6);
    setWordLength(randomDigits);
    makeMultipleUserName(randomDigits);
    // console.log(newWordList);
  };
  const handleVariants = () => {
    console.log("Clicked");
    userNameVariationN();
    console.log(newWordList);
    setWordVariantN(newWordList);
    // setWordVariantN()
  };

  // Handle the click event
  const handleVariantsN = (platformId) => {
    console.log("Clicked Platform ID:", platformId);
    setCurrentPlatformId(platformId);
    const platform = ListOfPlatforms.find(
      (platform) => platform.id === platformId
    );
    setCurrentPlatform(platform);
    console.log(platform.url); // Log the platform URL directly
  };

// Remove duplicates based on `id`
const uniquePlatforms = ListOfPlatforms.filter((value, index, self) => 
    index === self.findIndex((platform) => (
      platform.id === value.id
    ))
  );
  
  console.log(uniquePlatforms);
  console.log(ListOfPlatforms);
  console.log(currentPlatformId, currentPlatform);
  console.log(currentUserName);
  //handle platforms

  return (
    <div className="flex flex-col items-center gap-8 w-full min-h-screen bg-gradient-to-r from-teal-400 via-green-400 to-teal-600 p-6">
      <div className="flex flex-col items-center gap-8">
        <div className="w-full h-full flex flex-col items-center flex-wrap gap-4">
          <div className="w-full h-full flex flex-wrap gap-4">
            {uniquePlatforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => handleVariantsN(platform.id)}
                className={`relative bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105`}>
                {platform.name}
              </button>
            ))}
          </div>

          <div>
            {currentPlatform && (
              <>
                <button
                  onClick={handleVariants}
                  className="relative w-[400px] bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                  {`Generate ${currentPlatform.name} username`}
                  <span className="absolute -bottom-4 -right-0 text-xs p-2 rounded-r-none rounded-l-full rounded-b-full rounded-t-full border border-green-900 hover:outline-dashed hover:outline-green-800 bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white transition-all duration-300 ease-in-out transform hover:scale-105">
                    {wordVariantN.length}
                  </span>
                  <span className="absolute -bottom-8 -right-8 text-xs p-2 rounded-r-none rounded-l-full rounded-b-full rounded-t-full border border-green-900 hover:outline-dashed hover:outline-green-800 bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white transition-all duration-300 ease-in-out transform hover:scale-105">
                    {wordLength * 2}
                  </span>
                </button>
              </>
            )}
          </div>
          <div>
            {currentPlatform && (
              <>
                <div className="mt-4">
                  <h3>Selected Platform:</h3>
                  <p>{currentPlatform.name}</p>
                  <p>{`${currentPlatform.url}${currentUserName}`}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-row flex-wrap mt-8 gap-6 justify-center">
        {wordVariantN?.map((word, i) => (
          <div key={i} className="flex flex-row flex-wrap justify-center">
            {currentPlatform && (
              <p
                onClick={() => setCurrentUserName(word)}
                className="bg-white text-green-700 py-2 px-6 rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg cursor-pointer text-xl border-l-4 border-t-4 border-green-500">
                <a
                  href={`https://www.${currentPlatform.url}${word}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  {word}
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platform;
