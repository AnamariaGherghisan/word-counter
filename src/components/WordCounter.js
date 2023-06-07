import { useState } from "react";

export const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0)

  const handleOnChange = (event) => {
    //get words from  textarea
    const value = event.target.value.trim();
    console.log(value);
    //count the words
    const words = value.split(" ");
    console.log(words)
    //get word length
    const wordLength = words.length;
    console.log(wordLength);
    //set the count in state
    setWordCount(wordLength);
  };
  return (
  <div>
    <div>
      <textarea rows={10} placeholder="Type or paste your text here" onChange={handleOnChange}></textarea>
    </div>
    <div>Word count: {wordCount}</div>
    </div>
  );
};