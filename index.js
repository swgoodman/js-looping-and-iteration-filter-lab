// Code your solution in this file

function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch (list, string) {
  let partial = string.length;
  return list.filter(function (name) {
    return name.slice(0, partial) === string;
  })
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name === name;
  })
}
