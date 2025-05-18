const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  
  
  
  
const findTheOldest = function() {
  
  const oldest = people.sort(function(a, b){
      let lastPerson = a.yearOfDeath - a.yearOfBirth;
      let nextPerson = b.yearOfDeath - b.yearOfBirth;
      
      if(lastPerson > nextPerson){
          return -1;
      }
      else if(lastPerson < nextPerson){
          return 1;
      }
      else{
          return 0;
      }
      
  })
  return oldest[0];
  
};



// Do not edit below this line
module.exports = findTheOldest;
