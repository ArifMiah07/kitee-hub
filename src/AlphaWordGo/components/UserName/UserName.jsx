import { useState } from "react";

const UserName = () => {
  const [usernames, setUsernames] = useState([]);

  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const symbols = "._";
  
  const generateUsername = (minLength = 3, maxLength = 15) => {
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let username = "";

    for (let i = 0; i < length; i++) {
      const useSymbol = Math.random() < 0.2; // 20% chance to include a symbol
      const charSet = useSymbol ? symbols : chars;
      username += charSet[Math.floor(Math.random() * charSet.length)];
    }

    // Ensure no invalid starting/ending characters
    username = username.replace(/^[-._]+|[-._]+$/g, "a");
    return username;
  };

  const handleGenerateUsernames = () => {
    const newUsernames = [];
    for (let i = 0; i < 10; i++) { // Generate 10 usernames
      newUsernames.push(generateUsername());
    }
    setUsernames(newUsernames);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-xl font-bold">Username Generator</h1>
      <button
        onClick={handleGenerateUsernames}
        className="btn text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
      >
        Generate Usernames
      </button>
      <div className="mt-4">
        {usernames.map((username, index) => (
          <div key={index} className="text-lg font-mono">
            {index + 1}. {username}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserName;
