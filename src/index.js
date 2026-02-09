const { getVisitCount } = require('./counter');

const visitNumber = getVisitCount();
console.log(`Hello, World! (visit #${visitNumber})`);
