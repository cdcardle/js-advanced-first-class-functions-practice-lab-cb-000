const logDriverNames = function(drivers) {
  drivers.forEach(driver => console.log(driver.name))
}

const logDriversByHometown = function(drivers, town) {
  drivers.forEach(driver => ((driver.hometown === town) ? console.log(driver.name) : 0))
}
