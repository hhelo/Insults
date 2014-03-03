var fs = require('fs'),
    insults, json, jarr;

function removeDuplicates(array) {
    var o = {},
        a = [],
        len, i;

    for (i = 0, len = array.length; i < len; i += 1) {
        o[array[i]] = true;
    }

    for (i in o) {
        a.push(i);
    }

    return a;
}

// Remove \r
insults = fs.readFileSync('insults.txt', {encoding: 'utf8'}).replace(/\r/g, '').split('\n');

// Remove duplicates
insults = removeDuplicates(insults);

// Generate indented JSON
jarr = insults.slice();
jarr.splice(-1, 1);
json = JSON.stringify(jarr, null, 4);

// Write to files
fs.writeFile('insults.txt', insults.join('\n'), function (e) {
    if (e) throw e;
    console.log('Rewrote source.');
});

fs.writeFile('insults.json', json, function (e) {
    if (e) throw e;
    console.log('Wrote JSON');
});
