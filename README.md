# Flexy [![Build Status](https://travis-ci.org/crewstyle/flexy.svg)](https://travis-ci.org/crewstyle/flexy)

_an iframe responsive jQuery plugin_  
[![npm version](https://badge.fury.io/js/%40crewstyle%2Fflexy.svg)](https://badge.fury.io/js/%40crewstyle%2Fflexy)
[![GitHub version](https://badge.fury.io/gh/crewstyle%2Fflexy.svg)](https://badge.fury.io/gh/crewstyle%2Fflexy)  


## Summary

+ [1) What is this all about?](#1-what-is-this-all-about)
+ [2) Install](#2-install)
+ [3) How to use it](#3-how-to-use-it)
+ [4) That's all folkes!](#4-thats-all-folkes)
+ [5) Authors and Copyright](#5-authors-and-copyright)


## 1) What is this all about?

[Flexy](https://github.com/crewstyle/flexy) is a very light jQuery iframe responsive plugin.  


## 2) Install

If you use [Bower.io](http://bower.io), you can download *Flexy* and use it with:

````
bower install --save yohoho.flexy
````


## 3) How to use it

It's pretty simple to use the *Flexy* jQuery package. It's a two-steps install.  
In your HTML:

````html
<iframe width="560" height="315" src="https://www.youtube.com/embed/x3kfyZJhC3U?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
````

In your Javascript:
````javascript
$(document).ready({
    $('iframe').flexy({
        addcss: true,
        classname: 'flexy-wrapper',
        widescreen: true
    });
});
````


## 4) That's all folkes!

Now let's have fun :)


## 5) Authors and Copyright

**Achraf Chouk**

+ http://fr.linkedin.com/in/achrafchouk/
+ http://twitter.com/crewstyle
+ http://github.com/crewstyle

Please, read [LICENSE](https://github.com/crewstyle/flexy/blob/master/LICENSE "LICENSE") for more details.

Copyright 20xx [Achraf Chouk](http://github.com/crewstyle "Achraf Chouk").  
Brewed by Achraf Chouk, served by [Take a tea](http://www.takeatea.com "Take a tea") ;)
