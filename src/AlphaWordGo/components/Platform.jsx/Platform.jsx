import { useState } from "react";
import { commonPlatForms, ListOfPlatforms } from "./PlatformData";
// import GenerateWords2 from "../../../utility/GenerateWord/GenerateWord2";
// import GenerateWord from "../../../utility/GenerateWord/GenerateWord";

const Platform = () => {
  const [wordVariantN, setWordVariantN] = useState([]);
  const [wordLength, setWordLength] = useState(0);

  const [currentPlatform, setCurrentPlatform] = useState(false);
  const [currentPlatformId, setCurrentPlatformId] = useState(0);
  const [currentUserName, setCurrentUserName] = useState("");
  const [makeRandomWord, setMakeRandomWord] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const wordsPerPage = 100; // Number of words per page

  function userGenerator(digits) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const vowel = "aeiou";
    const allChars = lowercase + vowel;

    const username = [];
    for (let i = 0; i < digits; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      username.push(allChars[randomIndex]);
    }
    return username.join("");
  }

  function generateMultipleUsernames() {
    const usernames = [];
    const randomNumber = Math.ceil(Math.random() * 99998) + 1;
    for (let i = 0; i < randomNumber; i++) {
      const randomDigits = Math.ceil(Math.random() * 14) + 2;
      usernames.push(userGenerator(randomDigits));
    }
    return usernames;
  }

  const handleWordGen = () => {
    const usernames = generateMultipleUsernames();
    setMakeRandomWord(usernames);
    setCurrentPage(1); // Reset to the first page
  };

  // Calculate the words to display on the current page
  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;
  const currentWords = makeRandomWord.slice(indexOfFirstWord, indexOfLastWord);

  // Pagination controls
  const totalPages = Math.ceil(makeRandomWord.length / wordsPerPage);

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
  const uniquePlatforms = ListOfPlatforms.filter(
    (value, index, self) =>
      index === self.findIndex((platform) => platform.id === value.id)
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
            {commonPlatForms.map((platform) => (
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
              <div className="flex flex-col items-center gap-4">
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
                {/* <GenerateWords2></GenerateWords2> */}
                <div className="flex flex-col items-center w-full h-full bg-gradient-to-r from-teal-400 via-green-400 to-teal-600 p-6">
                  <div className="w-full h-full flex flex-row justify-center gap-12">
                    <div className="flex flex-row gap-20 items-center mb-6">
                      <button
                        onClick={handleWordGen}
                        className="relative bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                        {`Generate More Real ${currentPlatform?.name} Username`}
                        <span className="absolute -bottom-4 -right-8 text-xs p-2 rounded-r-none rounded-l-full rounded-b-full rounded-t-full border border-green-900 hover:outline-dashed hover:outline-green-800 bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white transition-all duration-300 ease-in-out transform hover:scale-105">
                          {makeRandomWord.length}
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="w-full h-full flex flex-row flex-wrap gap-6 justify-center">
                    {currentWords.map((word, i) => (
                      <div
                        key={i}
                        className="flex flex-row flex-wrap justify-center">
                        {currentPlatform && (
                          <p className="bg-white text-green-700 py-2 px-6 rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg cursor-pointer text-xl border-l-4 border-t-4 border-green-500">
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

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="flex flex-row gap-4 mt-6">
                      <button
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className={`py-2 px-4 rounded-lg text-white text-lg ${
                          currentPage === 1
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-600 hover:bg-green-700"
                        }`}>
                        Previous
                      </button>
                      <span className="w-full flex flex-row items-center text-white text-xl font-medium ">{`Page ${currentPage} of ${totalPages}`}</span>
                      <button
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                          )
                        }
                        disabled={currentPage === totalPages}
                        className={`py-2 px-4 rounded-lg text-white text-lg ${
                          currentPage === totalPages
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-600 hover:bg-green-700"
                        }`}>
                        Next
                      </button>
                    </div>
                  )}
                </div>
              </div>
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
