Insults
=======

[Source](src/) of insults, for a better planet.

Some insults may possibly be mind shattering, _insulting_ (of course!) and/or inappropriate. Use with caution. They can be smart, they can be based off of real things people have said (praise humanity).

There is a little [script](src/scripts/intellisult.js) that generates insults. The source is from [http://intellisult.com/](Intellisult), check it out!

Oh and, [this](http://pastebin.com/raw.php?i=RRFYNEKU). You might find it amusing.

Contributing
============

1. Add your insult(s) to [insults.txt](https://github.com/TheUnknownOne/Insults/edit/master/src/insults.txt) (click to fork the repository and open an editor).
2. If it's your first time, add your name to [CONTRIBUTORS](https://github.com/TheUnknownOne/Insults/edit/master/CONTRIBUTORS).
3. Send a pull request! (Go to "Pull Request" in your fork and click on "New Pull Request")
4. After your pull has been merged, a repo collaborator will generate the json source for you.

Conventions
===========

* Always make sure a name fits in the insult (if the original insult didn't have a part for this, try to add one and follow the general style of the insult).
* If you want a lowercase name, use {name}
* If you want a name as-is, use {Name}
* If you want an uppercase name, use {NAME}
* Only edit insults.txt
* Separate insults with a new line
* A new line always goes at the end of the file

Integrating
===========

* The files are always up to date, you may choose either a plain text or json version.
* For the json version, just parse it with a json parser.
* For the text version, one way to parse it is (in JavaScript) `var i = insults.split('\n'); if (i[i.length - 1] === '') { i = i.slice(0, -1); }`. This always removes the trailing new line if there is one. Sometimes it may be forgotten by accident, so it's best to protect yourself with that additional check.

Extras
======

* [Long insults (>600 characters)](src/misc/insults.long.txt)
* [Dustbin (decent insults which have been removed from the primary file)](src/misc/insults.dustbin.txt)

Seriously?
==========

Yeah.
