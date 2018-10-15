const logDriverNames = function(drivers) {
  drivers.forEach(driver => console.log(driver.name));
}

const logDriversByHometown = function(drivers, town) {
  drivers.forEach(driver => ((driver.hometown === town) ? console.log(driver.name) : 0));
}

const driversByRevenue = function(drivers) {
  const newArray = drivers.forEach(driver => driver)
  return newArray.sort((a, b) => a.revenue - b.revenue);
}
