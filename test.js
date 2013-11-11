var hangul = require('./hangul');

var character = '괽';
var initial = initialConsonant(character);
var medial = medialConsonant(character);
var medial_first = medialConsonantFirst(character);
var medial_second = medialConsonantSecond(character);
var final = finalConsonant(character);
var merge_character = mergeConsonant(initial, medial, final);


console.log(initial);
console.log(medial);
console.log(medial_first);
console.log(medial_second);
console.log(final);
console.log(merge_character);
