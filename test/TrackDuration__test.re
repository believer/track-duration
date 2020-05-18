open TestFramework;
open TrackDuration;

describe("make", ({test}) => {
  test("returns time with h:min:s", ({expect}) => {
    expect.string(parse(5000000.)).toEqual("1:23:19")
  });

  test("returns time with min:s", ({expect}) => {
    expect.string(parse(500000.)).toEqual("8:20")
  });

  test("returns time with 0:s", ({expect}) => {
    expect.string(parse(50000.)).toEqual("0:50")
  });

  test("returns when seconds are super close to 60", ({expect}) => {
    expect.string(parse(59900.)).toEqual("0:59");
    expect.string(parse(59999.)).toEqual("0:59");
  });

  test("returns when seconds are exactly 60", ({expect}) => {
    expect.string(parse(60000.)).toEqual("1:00")
  });

  test("returns when minutes are super close to 60", ({expect}) => {
    expect.string(parse(3599000.)).toEqual("59:59");
    expect.string(parse(3599999.)).toEqual("59:59");
  });

  test("returns when minutes are exactly 60", ({expect}) => {
    expect.string(parse(3600000.)).toEqual("1:00:00")
  });
});
