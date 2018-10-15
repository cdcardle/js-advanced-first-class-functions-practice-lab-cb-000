const logDriverNames = function(drivers) {
  drivers.forEach(driver => console.log(driver.name))
}

const logDriversByHometown = function(drivers, town) {
  drivers.forEach(driver => ((driver.hometown === town) ? console.log(driver.name) : 0))
}

const driversByRevenue = function(drivers) {
  return drivers.sort((driver) => driver.revenue)
}