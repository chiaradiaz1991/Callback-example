## Callback

Functions are object in Javacsript.

A function that is passed another function as a parameter is a callback function.

Are also beeing used for event declarations on Javascript.

`
function helloWord(callback) {
  callback();
}
`

``
function setTimeout(callback, delay, param3, param4, ...){
  // timer is count up passed delay and then
  callback.call(window, param3, param4, ...)
}
``