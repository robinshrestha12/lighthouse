const urlDecode = function (text) {
  // Put your solution here
  let objJS = {};
  let key = "";
  value = "";
  objectCollection = [];
  finalObject = {};
  let stringMain = text.replace(/%20/g, " ");
  let stringArray = stringMain.split("&").map((x) => x.split("="));
  for (let i = 0; i < stringArray.length; i++) {
    {
      key = stringArray[i][0];
      value = stringArray[i][1];
      objJS = {
        [key]: value,
      };
      objectCollection.push(objJS);
    }
  }
  for (let j = 0; j < objectCollection.length; j++) {
    finalObject[Object.keys(objectCollection[j])] = Object.values(
      objectCollection[j]
    ).join();
  }
  return finalObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
