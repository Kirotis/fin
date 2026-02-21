export function splitWordCommandCombination(word: string) {
  const firstChar = word[0].toUpperCase();
  return [
    word,
    word.toUpperCase(),
    word.toLowerCase(),
    `${firstChar}${word.slice(1).toLowerCase()}`,
    `${firstChar}${word.slice(1)}`,
    firstChar,
    firstChar.toLowerCase(),
  ] as const;
}
