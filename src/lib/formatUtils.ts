export const formatUtils = (text: string) => {
  const formattedText = text.split(" ");
  let i = 0;
  for (const word of formattedText) {
    let otherCharacters = word.slice(1);
    formattedText[i] = word[0].toUpperCase() + otherCharacters;
    i++
  }
  return formattedText.join(" ");
};
