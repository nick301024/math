import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.add(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});


Deno.test("1/2 * 2/1 is 1.0", () => {

  const left = new Fraction(1, 2);
  const right = new Fraction(2, 1);

 left.multiply(right);


  assertEquals(left.toFloat(0.01), 1.0);
});

Deno.test("3/4 - 1/4 is 0.5", () => {

  const left = new Fraction(3, 4);
  const right = new Fraction(1, 4);

  left.subtract(right);

  assertEquals(left.toFloat(0.01), 0.5);
});

Deno.test("denomintor equals 0 throws error", () => {
  assertThrows(() => { new Fraction(3, 0) });
});