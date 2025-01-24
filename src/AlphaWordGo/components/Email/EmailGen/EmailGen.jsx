import { useState } from "react";

const EmailGen = () => {
  const [gmailList, setGmailList] = useState([]);

  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const maxLength = 30;
  const minLength = 6;

  // Function to generate a single valid Gmail username
  const generateValidUsername = () => {
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength; // Random length between 6 and 30
    let username = "";

    while (username.length < length) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      if (username.endsWith(".") && char === ".") continue; // Avoid consecutive periods
      username += char;
    }

    // Ensure it doesn't start or end with a period
    if (username.startsWith(".")) username = username.slice(1);
    if (username.endsWith(".")) username = username.slice(0, -1);

    return username;
  };

  // Function to generate multiple Gmail addresses
  const generateGmailList = (count) => {
    const emails = [];
    for (let i = 0; i < count; i++) {
      const username = generateValidUsername();
      emails.push(`${username}@gmail.com`);
    }
    return emails;
  };

  const handleGenGmail = () => {
    const generatedEmails = generateGmailList(100); // Generate 100 emails
    setGmailList(generatedEmails);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-row items-center gap-4">
        <button
          onClick={handleGenGmail}
          className="btn text-white bg-green-500 hover:bg-amber-400"
        >
          Generate Gmail Addresses
        </button>
      </div>
      <div>
        {gmailList.map((gmail, index) => (
          <div key={index} className="text-lg font-bold">
            {index + 1}. {gmail}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailGen;
