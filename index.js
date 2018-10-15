const logDriverNames = function(drivers) {
  drivers.forEach(driver => console.log(driver.name));
}

const logDriversByHometown = function(drivers, town) {
  drivers.forEach(driver => ((driver.hometown === town) ? console.log(driver.name) : 0));
}

const driversByRevenue = function(drivers) {
  let newArray = []
  drivers.forEach(function(driver) {
    newArray.push(driver);
  })
  return newArray.sort((a, b) => a.revenue - b.revenue);
}

const driversByName = function(drivers) {
  let newArray = []
  drivers.forEach(function(driver) {
    newArray.push(driver);
  })
  return newArray.sort((a, b) => a.localCompare(b));
}