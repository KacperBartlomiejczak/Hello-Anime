import { cn } from "../utils"

describe("cn", () => {
    it("Checking that function merges good string", () => {
        const result = cn("p-4", "p-2")
        expect(result).toBe("p-2")
    })
    it("handles falsy values like false and undefined", () => {
        const result = cn(false, undefined)
        expect(result).toBe("")
    })
    it("Checking if diffrent data is merged", () => {
        const result = cn("mt-2", "p-3")
        expect(result).toBe("mt-2 p-3")
    })
})