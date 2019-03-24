const intersection = require('array-intersection')

var mps = [
	{ name: 'Trudeau', period: 23, lookingFor: 14, series: [] },
	{ name: 'Campbell', period: 19, lookingFor: 16, series: [] },
	{ name: 'Diefenbaker', period: 13, lookingFor: 7, series: [] }
];

const iterations = 9999;

mps.forEach(mp => {
	console.log(mp.name, '...')
	for(var i = 0; i < iterations; i++) {
		mp.series.push((i * mp.period) + mp.lookingFor);
		// console.log((i * mp.period) + mp.lookingFor);
	}
});

const poodles = intersection.apply(null, mps.map(mp => mp.series));

console.log('ANSWER');
console.log(poodles);
