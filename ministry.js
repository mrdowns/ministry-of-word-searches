const intersection = require('intersect');
const binsearch = require('binary-search');

// var mps = [
// 	{ name: 'Trudeau', period: 23, lookingFor: 17, series: [] },
// 	{ name: 'Campbell', period: 19, lookingFor: 1, series: [] },
// 	{ name: 'Turner', period: 17, lookingFor: 6, series: [] },
// 	{ name: 'Diefenbaker', period: 13, lookingFor: 12, series: [] },
// 	{ name: 'Bennett', period: 11, lookingFor: 2, series: [] },
// 	{ name: 'Laurier', period: 7, lookingFor: 1, series: [] },
// 	{ name: 'Bowell',  period: 5, lookingFor: 2, series: [] }
// 	// { name: 'Abbott', period: 3, lookingFor: 3, series: [] }
// ];

var mps = [
	{ name: 'Trudeau', period: 23, lookingFor: 8, series: [] },
	{ name: 'Campbell', period: 19, lookingFor: 2, series: [] },
	// { name: 'Turner', period: 17, lookingFor: 6, series: [] },
	{ name: 'Diefenbaker', period: 13, lookingFor: 10, series: [] },
	{ name: 'Bennett', period: 11, lookingFor: 3, series: [] },
	{ name: 'Laurier', period: 7, lookingFor: 2, series: [] },
	{ name: 'Bowell',  period: 5, lookingFor: 3, series: [] },
	{ name: 'Abbott', period: 3, lookingFor: 1, series: [] }
];

const iterations = 99999999;
const startPuzzle = 1000000;

var initial = [];
var results = [];

function runOnEligible(mp, fn) {
	var i = startPuzzle;
	var looking = 0;
	while((looking = (i * mp.period) + mp.lookingFor) < iterations) {
		fn(looking, i);
		i++;
	}
}

console.log('initializing with', mps[0].name);
runOnEligible(mps[0], n => { initial.push(n) });
console.log('initialized', initial.length);

// compare the other guys
mps.splice(1).forEach(mp => {
	console.log('running', mp.name);
	runOnEligible(mp, n => {
		if (binsearch(initial, n, (el,ne) => { return el - ne; }) > 0) {
			// console.log('found', n);
			results.push(n);
		}
	});
	console.log('intersected', results.length);

	initial = results;
	results = [];
	// console.log(mp.name, '...');
	// var i = startPuzzle;
	// var looking = 0;
	// console.log('starting', (i * mp.period) + mp.lookingFor);
	// while((looking = (i * mp.period) + mp.lookingFor) < iterations) {
	// 	mp.series.push(looking);
	// 	i++;
	// }
	// console.log('pushed', mp.series.length);
});

// var results = mps[0].series;

// for (var i = 1; i < mps.length; i++) {
// 	console.log('intersecting', results.length, 'and', mps[i].series.length);
// 	results = intersection.big(results, mps[i].series);
// 	mps[i].series = null;
// }

// const poodles = intersect([mps[0].series, mps[1].series, mps[2].series]);
// const poodles = intersection.big(mps[0].series, mps[1].series);

// const poodles = intersect(mps.map(mp => mp.series));

// const poodles = intersection.apply(null, mps.map(mp => mp.series));

console.log('ANSWER');
console.log(initial);
