const intersection = require('intersect')

var mps = [
	{ name: 'Trudeau', period: 23, lookingFor: 17, series: [] },
	{ name: 'Campbell', period: 19, lookingFor: 1, series: [] },
	{ name: 'Turner', period: 17, lookingFor: 6, series: [] },
	{ name: 'Diefenbaker', period: 13, lookingFor: 12, series: [] },
	{ name: 'Bennett', period: 11, lookingFor: 2, series: [] },
	{ name: 'Laurier', period: 7, lookingFor: 1, series: [] }
	// { name: 'Bowell',  period: 5, lookingFor: 2, series: [] },
	// { name: 'Abbott', period: 3, lookingFor: 3, series: [] }
];

const iterations = 9999999;

mps.forEach(mp => {
	console.log(mp.name, '...');
	// for(var i = 0; i < iterations; i++) {
	var i = 0;
	var looking = 0;
	while((looking = (i * mp.period) + mp.lookingFor) < iterations) {
		mp.series.push(looking);
		i++;
	}
	console.log('pushed', mp.series.length);
});

var results = mps[0].series;

for (var i = 1; i < mps.length; i++) {
	console.log('intersecting', results.length, 'and', mps[i].series.length);
	results = intersection.big(results, mps[i].series);
}

// const poodles = intersect([mps[0].series, mps[1].series, mps[2].series]);
// const poodles = intersection.big(mps[0].series, mps[1].series);

// const poodles = intersect(mps.map(mp => mp.series));

// const poodles = intersection.apply(null, mps.map(mp => mp.series));

console.log('ANSWER');
console.log(results);
