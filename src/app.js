import "bootstrap";
import "./style.css";

let generateExcuse = () => {
  let pronoun = [" A ", " The ", " My "];
  let subject = [" raccoon ", " grandma ", " fish ", " iguana ", " dog "];
  let action = ["took my", "threw my", "sold my", "stole my"];
  let possession = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actnIndx = Math.floor(Math.random() * action.length);
  let possessionIndx = Math.floor(Math.random() * possession.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actnIndx] +
    " " +
    possession[possessionIndx] +
    " " +
    where[whereIndx]
  );
};

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};
