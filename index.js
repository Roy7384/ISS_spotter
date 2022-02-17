const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("it didnt work!", error);
//     return;
//   }

//   console.log(('It workded! Returned IP: ', ip));

// });

// fetchCoordsByIP('invalidIPhere', (err, geo) => {
//   if (err) return console.log('it did not work!', err);
//   console.log('it worked, returned geo location: ', geo);
// });

// fetchISSFlyOverTimes({latitude: '49.27670', longitude: '-123.13000'}, (err, passes) => {
//   if (err) return console.log('it did not work!', err);
//   console.log('it worked, returned flyover times: ', passes);
// });
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  // success, print out the dates!
  printPassTimes(passTimes);

});