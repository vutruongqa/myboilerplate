var moment = require('moment');
var now = moment();
//now.unix() ==> convert time to unix time
var timestamp = 1459111648;
var currentMoment = moment.unix(timestamp);

console.log('current moment', currentMoment.format('MMMM Do, YYYY @ hh:mm A'));