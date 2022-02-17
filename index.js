const { nextISSTimesForMyLocation } = require('./iss');
const printPassTimes = require('./printPassTimes');
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


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  // success, print out the dates!
  printPassTimes(passTimes);

});

