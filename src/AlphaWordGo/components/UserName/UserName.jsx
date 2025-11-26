import { useState } from "react";

const UserName = () => {
  const [usernames, setUsernames] = useState([]);

  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const symbols = "_";
  
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 p-6">
      <h1 className="text-3xl font-extrabold text-white mb-8 text-center">
        Username Generator
      </h1>
      
      <button
        onClick={handleGenerateUsernames}
        className="bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 text-white py-3 px-8 rounded-lg shadow-md text-xl transform transition-all duration-300 ease-in-out hover:scale-105"
      >
        Generate Usernames
      </button>
  
      <div className="mt-8 w-full max-w-lg">
        {usernames.length > 0 ? (
          usernames.map((username, index) => (
            <div
              key={index}
              className="bg-white p-4 mb-4 rounded-lg shadow-lg flex justify-between items-center text-lg font-mono text-blue-800"
            >
              <span>{index + 1}. {username}</span>
              <button
                className="text-blue-500 hover:text-blue-700 focus:outline-none"
                onClick={() => navigator.clipboard.writeText(username)}
              >
                Copy
              </button>
            </div>
          ))
        ) : (
          <p className="text-lg text-white text-center">No usernames generated yet!</p>
        )}
      </div>
    </div>
  );
  
};

export default UserName;
