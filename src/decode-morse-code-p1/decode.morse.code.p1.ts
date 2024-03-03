import { MORSE_CODE } from "./morse.code";

/**
 * [x] trim whitespace
 * [x] separate words
 * [x] separate letters
 * [x] translate letters and combine to words
 * [x] combine words to sentence in uppercase
 */
const MORSE_LETTER_DELIMITER: string = " ";
const MORSE_WORD_DELIMITER: string = "   ";
const LETTER_DELIMITER: string = "";
const WORD_DELIMITER: string = " ";

export function decodeMorse(morseCode: string): string {
  const morseLettersByWords: string[][] = morseCode
    .trim()
    .split(MORSE_WORD_DELIMITER)
    .map((morseWord: string): string[] =>
      morseWord.split(MORSE_LETTER_DELIMITER)
    );

  const decodedLettersByWords = morseLettersByWords.map(
    (morseWord: string[]): string[][] =>
      morseWord.map(
        (morseCode: string): string[] => (MORSE_CODE as any)[morseCode]
      )
  );

  const decodedSentence = decodedLettersByWords
    .map((decodedWord: string[][]): string =>
      decodedWord.join(LETTER_DELIMITER)
    )
    .join(WORD_DELIMITER)
    .toUpperCase();

  return decodedSentence;
}
