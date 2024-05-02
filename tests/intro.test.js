import { describe, test, it, expect } from "vitest";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    /// AAA
    // Arrange
    const a = 2;
    const b = 1;

    //Act
    const result = max(a, b);

    //Assert
    expect(result).toBe(2);
    /// be is a matcher

    /// we can do the above in a combine form
    // expect(max(2, 1)).toBe(2);
  });
});

describe("max", () => {
  it("should return the second argument if it is greater", () => {
    /// we can do the above in a combine form
    expect(max(1, 2)).toBe(2);
  });
});

describe("max", () => {
  it("should return the first argument if arguments are equal", () => {
    /// we can do the above in a combine form
    expect(max(1, 1)).toBe(1);
  });
});
