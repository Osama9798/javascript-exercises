const findTheOldest = function (people) {
  people.forEach((element) => {
    if (!element.yearOfDeath) {
      element.yearOfDeath = new Date().getFullYear();
    }
  });

  const old = people
    .map((element) => ({
      age: element.yearOfDeath - element.yearOfBirth,
      name: element.name,
    }))
    .sort((a, b) => b.age - a.age);
  return old[0];
};

// Do not edit below this line
module.exports = findTheOldest;
