let parseSeconds = ms => ms /. 1000.;

let parseHours = s => Js.Math.floor_float(s /. 3600.);

let parseMinutes = (s, h) => Js.Math.floor_float(s /. 60. -. 60. *. h);

let parseOutputSeconds = s =>
  Js.Math.floor_float(mod_float(s /. 60., 1.) *. 60.);

let addLeadingZero =
  fun
  | x when x < 10. => "0" ++ Js.Float.toString(x)
  | x => Js.Float.toString(x);

let parse = ms => {
  let s = parseSeconds(ms);
  let h = parseHours(s);
  let m = parseMinutes(s, h);
  let outputSeconds = s->parseOutputSeconds->addLeadingZero;

  switch (h) {
  | 0. => Js.Float.toString(m) ++ ":" ++ outputSeconds
  | h =>
    Js.Float.toString(h) ++ ":" ++ addLeadingZero(m) ++ ":" ++ outputSeconds
  };
};
