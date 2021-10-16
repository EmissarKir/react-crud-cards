import { getNoun } from "./getNoun";

export const getAge = (yearOfBirthday) => {
  let yearNow = new Date().getFullYear();
  let age = yearNow - yearOfBirthday;
  let word = getNoun(age, "год", "года", "лет");
  return `${age}${word}`;
};
