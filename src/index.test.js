import { sum } from "./index";

describe("Test", () => {
  it("Should sum the two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
