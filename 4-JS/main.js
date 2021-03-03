document.write("Using document.write()");
var str3 = "This is 1st. " + "This is 2nd";
console.log(str3);

sname = "Adnan";
var len = sname.length;
console.log(len);
myArr = ["Hello", 1];
console.log(myArr);
myArr.push("push1");
myArr.pop();
var removedArr = myArr.shift();
myArray.unshift("unshift");

// Objects
var ourDog = {
  name: "Tuffy",
  legs: 4,
  tails: 1,
  friends: ["everyone"],
};
console.log(ourDog.name);
var namevalue = ourDog["name"];
ourDog.name = "Feedo";
console.log(ourDog.name);
ourDog.bark = "barks";
console.log(ourDog.bark);
ourDog["sound"] = "woof";
delete ourDog.tails;
console.log(ourDog.tails);
