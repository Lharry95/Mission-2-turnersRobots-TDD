class api2 {
  constructor() {
    this.top = -1;
    this.items = {};
  }
}

describe("My Stack", () => {
  it("is created empty", () => {
    const stack = new api2();

    expect(api2.top).toBe(-1);
  });
});
