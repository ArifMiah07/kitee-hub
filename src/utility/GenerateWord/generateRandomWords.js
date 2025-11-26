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
  };

  handleWordGen()