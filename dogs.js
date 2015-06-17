// Make a function that will take a dog array and make an object. Like so:


var dogs = [
  ["German Shepherd", "90 lbs.", "Work"],
  ["Pointer", "40 lbs.", "Hunting"],
  ["Corgi", "30 lbs.", "Awesomeness"]
];

var dogArray = function(dogs){
  dogObject = {}
  dogs.forEach(function(dog){
    dogObject[dog[0]] = {
      "size": dog[1],
      "bred for": dog[2]
    }
  });
  return dogObject;
}

var dogArray = function(dogs){
  dogObject = {}
  for (var i = 0; i < dogs.length; i++) {
    dogObject[dogs[i][0]] = {
      "size": dogs[i][1],
      "bred for": dogs[i][2]
    }
  }
  return dogObject;
}



console.log(dogArray(dogs));
