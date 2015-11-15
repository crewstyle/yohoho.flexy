# Flexy [![Build Status](https://travis-ci.org/crewstyle/flexy.svg)](https://travis-ci.org/crewstyle/flexy)

_an iframe responsive very light jQuery plugin_  
[![npm version](https://badge.fury.io/js/yohoho.flexy.svg)](https://badge.fury.io/js/yohoho.flexy)
[![GitHub version](https://badge.fury.io/gh/yohoho.flexy.svg)](https://badge.fury.io/gh/yohoho.flexy)  


## Package manager

````javascript
//bower
bower install --save yohoho.flexy
````

````javascript
//npm
npm install yohoho.flexy
````


## Install

````html
<!-- In your <body> HTML tag -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/x3kfyZJhC3U?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
````

````javascript
//in your main JS file
$('iframe').flexy({
    addcss: true,
    classname: 'flexy-wrapper',
    widescreen: true
});
````


## Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
addcss | boolean | true | Enables default flexy inline CSS applied to wrapper and video element
classname | string | 'flexy-wrapper' | CSS class applied to wrapper
widescreen | boolean | true | Enables wide screen format (16/9). Made especially for Vimeo embed


## Dependencies

jQuery 2.1.4


## Authors and Copyright

**Achraf Chouk**

+ http://fr.linkedin.com/in/achrafchouk/
+ http://twitter.com/crewstyle
+ http://github.com/crewstyle

Please, read [LICENSE](https://github.com/crewstyle/flexy/blob/master/LICENSE "LICENSE") for more details.

Made with ♥ by [Achraf Chouk](http://github.com/crewstyle "Achraf Chouk").
