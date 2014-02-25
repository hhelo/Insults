var fs = require('fs'),
    insults, json;

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
insults = fs.readFileSync('insults.txt', {encoding: 'utf8'}).replace(/\r/g, '').split('\n\n');

// Remove duplicates
insults = removeDuplicates(insults);

// Remove \n in the last line (for the json) - add it back in the source
insults[insults.length - 2] = insults[insults.length - 2].replace('\\n', '');
insults.splice(insults.length - 1, 1);

// Generate indented JSON
json = JSON.stringify(insults, null, 4);

// Write to files
fs.writeFileSync('insults.txt', insults.join('\n\n') + '\n', {encoding: 'utf8'});
fs.writeFileSync('insults.json', json, {encoding: 'utf8'});
