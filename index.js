// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(
        (driver) => driver.toLowerCase() === name.toLowerCase()
    );
}

function fuzzyMatch(drivers, name){
      return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(name.toLowerCase())
  );

}

function matchName(drivers, nameToMatch) {
  return drivers.filter(driver => driver.name === nameToMatch);
}