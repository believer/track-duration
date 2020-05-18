// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';


function parseMinutes(s, h) {
  return Math.floor(s / 60 - 60 * h);
}

function parseOutputSeconds(s) {
  return Math.floor(s / 60 % 1 * 60);
}

function addLeadingZero(x) {
  if (x < 10) {
    return "0" + x.toString();
  } else {
    return x.toString();
  }
}

function parse(ms) {
  var s = ms / 1000;
  var h = Math.floor(s / 3600);
  var m = parseMinutes(s, h);
  var outputSeconds = addLeadingZero(parseOutputSeconds(s));
  if (h !== 0) {
    return h.toString() + (":" + (addLeadingZero(m) + (":" + outputSeconds)));
  } else {
    return m.toString() + (":" + outputSeconds);
  }
}

exports.parse = parse;
/* No side effect */