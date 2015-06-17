// Yesterday's warmup, but in reverse. Take a nested object and make an array of arrays.

var dogs = { 'German Shepherd': { size: '90 lbs.', 'bred for': 'Work' },
  'Pointer': { size: '40 lbs.', 'bred for': 'Hunting' },
  'Corgi': { size: '30 lbs.', 'bred for': 'Awesomeness' } }

var dogsArray = function(obj){
  var arr = [];
  for (var key in obj) {
    arr.push([key, obj[key].size, obj[key]["bred for"]]);
  };
  console.log(arr);
}

dogsArray(dogs);
