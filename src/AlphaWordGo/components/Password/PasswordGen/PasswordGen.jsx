// import * as fs from "node:fs";
import { useState } from "react";

const PasswordGen = () => {
  const [genWord, setGenWord] = useState([]);
  const [genWord2, setGenWord2] = useState([]);
  const [genWordWorld1, setGenWordWorld1] = useState(false);

  //   const wordsWithoutVowels = [
  //     "y", // Sometimes used as a vowel, as in "cry"
  //     "brr", // A sound for coldness
  //     "cwm", // A mountainous basin
  //     "gyms", // Places for physical exercise
  //     "lynx", // A wild cat
  //     "myth", // A traditional story
  //     "nth", // An unspecified number
  //     "psst", // A sound to get attention
  //     "shh", // A sound to silence someone
  //     "tsk", // A sound of disapproval
  //     "crwth", // A Welsh musical instrument
  //     "rhythm", // A pattern of sounds or beats
  //     "tryst", // A secret meeting
  //     "fth", // A rare example (sound)
  //   ];
  // const text = "\n Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing."
  const codes = [];
  for (let i = 33; i <= 126; i++) {
    codes.push(i);
  }
  const chars = codes.map((code) => String.fromCharCode(code));

  //   console.log(chars.join(""));
  //   const charList = chars.join("");
  // const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //   const constantAlphabet = [
  //     "b",
  //     "c",
  //     "d",
  //     "f",
  //     "g",
  //     "h",
  //     "j",
  //     "k",
  //     "l",
  //     "m",
  //     "n",
  //     "p",
  //     "q",
  //     "r",
  //     "s",
  //     "t",
  //     "v",
  //     "w",
  //     "x",
  //     "y",
  //     "z",
  //   ];
  // const singleAlphabet = (chars[Math.floor(Math.random() * chars.length)]) + (chars[Math.floor(Math.random() * chars.length)]);
  // console.log(singleAlphabet);
  //   const newArr = Array(26)
  //     .fill(0)
  //     .map((a, i) => chars[Math.floor(Math.random() * chars.length)]);
  //   console.log(newArr);
  const vowels = ["a", "e", "i", "o", "u"];
  //   const randomIndex = Math.floor(Math.random() * vowels.length);
  //   console.log("vowels[randomIndex]:", vowels[randomIndex]);

  //   function wordWithNLetter(n, { nv, vn1, vn2, vn3, vn4, vn5 }) {
  //     if (nv) {
  //       const newArr = Array(n)
  //         .fill(0)
  //         .map((_, i) => chars[Math.floor(Math.random() * chars.length)]);
  //       console.log(newArr.join(""), { n, vn4, vn3, vn2, vn1, nv });
  //     } else if (vn1) {
  //       const ranInx2 = Math.floor(Math.random() * n);
  //       let newArr = Array(5)
  //         .fill(0)
  //         .map(
  //           (_, i) =>
  //             constantAlphabet[
  //               Math.floor(Math.random() * constantAlphabet.length)
  //             ]
  //         );
  //       console.log("new array:", newArr);
  //       newArr[ranInx2] = vowels[randomIndex];
  //       console.log(newArr);
  //       console.log(newArr.join(""), { n, vn4, vn3, vn2, vn1, nv });
  //     } else if (vn2) {
  //       const newArr = Array(n)
  //         .fill(0)
  //         .map(
  //           (_, i) =>
  //             chars[Math.floor(Math.random() * chars.length)] +
  //             vowels[Math.floor(Math.random() * vowels.length)]
  //         );
  //       console.log(newArr.join(""), { n, vn4, vn3, vn2, vn1, nv });
  //     } else if (vn3) {
  //       const newArr = Array(n)
  //         .fill(0)
  //         .map(
  //           (_, i) =>
  //             chars[Math.floor(Math.random() * chars.length)] +
  //             vowels[Math.floor(Math.random() * vowels.length)]
  //         );
  //       console.log(newArr.join(""), { n, vn4, vn3, vn2, vn1, nv });
  //     } else if (vn4) {
  //       const newArr = Array(n)
  //         .fill(0)
  //         .map(
  //           (_, i) =>
  //             chars[Math.floor(Math.random() * chars.length)] +
  //             vowels[Math.floor(Math.random() * vowels.length)]
  //         );
  //       const newWord = newArr.join("");
  //       // console.log(newWord)
  //       console.log(newWord, { n, vn4, vn3, vn2, vn1, nv });
  //     } else if (vn5) {
  //       const newArr = Array(n)
  //         .fill(0)
  //         .map((_, i) => vowels[Math.floor(Math.random() * vowels.length)]);
  //       console.log(newArr.join(""), { n, vn4, vn3, vn2, vn1, nv });
  //     } else {
  //       return newArr;
  //     }
  //   }
  //   wordWithNLetter(26, { vn4: true });
  // const vowels = ['a', 'e', 'i', 'o', 'u'];
  // const randomIndex = Math.floor(Math.random() * vowels.length);
  //     console.log("vowels[randomIndex]:",vowels[randomIndex]);
  //   const arr = [
  //     "A",
  //     "B",
  //     `C`,
  //     "D",
  //     "E",
  //     "F",
  //     "G",
  //     "H",
  //     "I",
  //     "J",
  //     "K",
  //     "L",
  //     "M",
  //     "N",
  //     "O",
  //     "P",
  //     "Q",
  //     "R",
  //     "S",
  //     "T",
  //     "U",
  //     "V",
  //     "W",
  //     "X",
  //     "Y",
  //     "Z",
  //   ];
  //   let worrrd = ["h", "s", "l", "l", "m"];
  //   // console.log(worrrd);
  //   // worrrd[1] = 'e'
  //   // console.log(worrrd);
  //   const rnIn = () => {
  //     const ranInx = Math.floor(Math.random() * arr.length);
  //     const ranInx2 = Math.floor(Math.random() * worrrd.length);
  //     let newArr = Array(5)
  //       .fill(0)
  //       .map((_, i) => chars[Math.floor(Math.random() * chars.length)]);
  //     console.log("new array:", newArr);
  //     const randomWordWithRandomVowel = (newArr[ranInx2] = vowels[randomIndex]);
  //     console.log("new array:", newArr, randomWordWithRandomVowel);
  //     // const wv =
  //     // console.log(worrrd);
  //     const sx = (worrrd[ranInx2] = vowels[randomIndex]);
  //     // console.log(worrrd);
  //     // console.log(worrrd[ranInx2]);
  //     // console.log(arr[ranInx]);
  //     return ranInx;
  //   };
  //   console.log(rnIn());

  const newWordList = [];
  //   const newWordList2 = [];
  const makeMultipleWord = (n) => {
    for (let i = 1; i <= 100; i++) {
      const newArr = Array(n)
        .fill(0)
        .map(
          (_, i) =>
            chars[Math.floor(Math.random() * chars.length)] +
            vowels[Math.floor(Math.random() * vowels.length)]
        );
      const newWord = newArr.join("");
      newWordList.push(newWord);
      // console.log(newWord)
      //   console.log(newWord);
    }
  };

  //   stage 2
  const newWordList2 = [];
  const makeMultipleWord2 = (n) => {
    for (let i = 1; i <= 100; i++) {
      const newArr = Array(n)
        .fill(0)
        .map(
          (_, i) =>
            chars[Math.floor(Math.random() * chars.length)] +
            vowels[Math.floor(Math.random() * vowels.length)]
        );
      const newWord = newArr.join("");
      newWordList2.push(newWord);
      // console.log(newWord)
      //   console.log(newWord);
    }
  };

  //   let allGenWord = [];

  const handleWordGen = () => {
    // console.log("clicked");
    setGenWord(newWordList);
    makeMultipleWord(5);
  };
  //   console.log(genWord);

  //   allGenWord = [...genWord, ...genWord];
  //   console.log('hhhi',allGenWord);

  let allGenWord2 = [];
  const handleWordGen2 = () => {
    // console.log("clicked");
    // Update genWord state by appending new words
    setGenWord2((prevGenWord2) => {
      const updatedGenWord2 = [...prevGenWord2, ...newWordList2]; // Merge previous and new
      allGenWord2 = [...allGenWord2, ...newWordList2]; // Update global array
      //   console.log("Updated allGenWord:", allGenWord2);
      return updatedGenWord2; // Update state
    });

    // Perform additional logic (like calling makeMultipleWord)
    makeMultipleWord2(5);
  };

  //   console.log("Final genWord:", genWord, genWord2);
  //   console.log("Final allGenWord:", allGenWord2);

  const handleStage = () => {
    console.log("clicked");
    setGenWordWorld1(!genWordWorld1);
  };

  const handleDownload = (data, fileName) => {
    const fileContent = data.join("\n"); // Combine words into a text format
    const blob = new Blob([fileContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mb-3 p-4">
      <div className="flex flex-col items-center justify-center gap-6 w-full max-w-lg">
        <button
          className="bg-amber-300 hover:bg-amber-400 text-black px-6 py-3 rounded-md text-lg font-semibold"
          onClick={handleStage}>
          Stage
        </button>

        {genWordWorld1 ? (
          <div className="w-full space-y-6">
            <div className="flex flex-row justify-center gap-6">
              <button
                onClick={handleWordGen}
                className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600">
                Generate Password
              </button>
              <button
                onClick={() => handleDownload(genWord, "GeneratedWords.txt")}
                className="bg-green-500 text-white px-6 py-3 rounded-md text-lg hover:bg-green-600">
                Download
              </button>
            </div>

            <div className="h-[500px] overflow-y-auto space-y-3">
              {genWord.length > 0 ? (
                genWord.map((word, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start border border-red-500 bg-green-300 p-4 rounded-md shadow-sm">
                    <div className="w-full flex items-center justify-start gap-5  bg-green-300 p-4 rounded-md shadow-sm">
                      <span className="text-lg font-semibold">{index + 1}</span>
                      <span className="text-lg font-medium text-gray-700">
                        {word}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No words generated yet</p>
              )}
            </div>
          </div>
        ) : (
          <div className="w-full space-y-6">
            <div className="flex flex-row justify-center gap-6">
              <button
                onClick={handleWordGen2}
                className="bg-green-500 text-white px-6 py-3 rounded-md text-lg hover:bg-green-600">
                Generate Collection
              </button>

              <div className="flex flex-row items-center bg-red-400 p-2 rounded-md">
                <input
                  className="border border-red-300 px-4 py-2 rounded-l-md focus:outline-none"
                  placeholder="Enter number of digits"
                  name="numberOfDigits"
                  type="text"
                />
                <button
                  onClick={() =>
                    handleDownload(genWord2, "GeneratedCollection.txt")
                  }
                  className="bg-green-500 text-white px-6 py-3 rounded-r-md text-lg hover:bg-green-600">
                  Download
                </button>
              </div>
            </div>

            <div className="h-[500px] overflow-y-auto space-y-3">
              {genWord2.length > 0 ? (
                genWord2.map((word, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start border border-red-500 bg-green-300 p-4 rounded-md shadow-sm">
                    <div className="w-full flex items-center justify-start gap-5  bg-green-300 p-4 rounded-md shadow-sm">
                      <span className="text-lg font-semibold">{index + 1}</span>
                      <span className="text-lg font-medium text-gray-700">
                        {word}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No words generated yet</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGen;
