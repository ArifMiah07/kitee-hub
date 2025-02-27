import { useState } from "react";

const GenerateWords = () => {
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

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-r from-teal-400 via-green-400 to-teal-600 p-6">
      <h1 className="text-4xl font-semibold text-white mb-6">
        Generate Random Word
      </h1>
      <div className="w-full h-full flex flex-row justify-center gap-12">
        <div className="flex flex-row gap-20 items-center mb-6">
          <button
            onClick={handleWordGen}
            className="relative bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Generate Word
            <span className="absolute -bottom-4 -right-8 text-xs p-2 rounded-r-none rounded-l-full rounded-b-full rounded-t-full border border-green-900 hover:outline-dashed hover:outline-green-800 bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500 text-white transition-all duration-300 ease-in-out transform hover:scale-105">
              {makeRandomWord.length}
            </span>
          </button>
        </div>
      </div>

      <div className="w-full h-full flex flex-row flex-wrap gap-6 justify-center">
        {currentWords.map((word, i) => (
          <div key={i} className="flex flex-row flex-wrap justify-center">
            <p className="bg-white text-green-700 py-2 px-6 rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg cursor-pointer text-xl border-l-4 border-t-4 border-green-500">
              {word}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-row gap-4 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
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
  );
};

export default GenerateWords;
