import { assertEquals } from "@std/assert/equals";
import { Numbers } from "./gcd.ts";

Deno.test("Berechnung des grössten gemeinsamen Teilers", () => {
    const values = new Numbers(20, 30);
    const result = values.calculateGcd();

    assertEquals(result, 10);
});