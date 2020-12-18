// example callback

function runOne() {
  console.log("this is function one");
}

function runTwo() {
  console.log("this is function two");
}

setTimeout(runOne, 3000);

runTwo();

//

const runnerFunctions = function () {
  console.log("this message is shown after 3 seconds");
};

setTimeout(runnerFunctions, 3000);
// or
setTimeout(() => {
  console.log("this message is shown after 3 seconds");
}, 3000);

// another example

var timeoutID;

function showAlert() {
  timeoutID = setTimeout(alert, 3000, "setTimeout Demo!");
}

function clearAlert() {
  clearTimeout(timeoutID);
}

//

function makeTalk(animal) {
  const noises = {
    cat: "purr",
    dog: "woof",
    cow: "moo",
    pig: "oink",
  };

  console.log(`A ${animal} goes ${noises[animal]}.`);
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const animals = ["cat", "dog", "cow", "pig"];
const randomAnimal = getRandom(animals);

setTimeout(() => {
  makeTalk(randomAnimal);
}, 1000);
