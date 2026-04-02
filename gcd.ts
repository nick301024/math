export class Numbers {
    constructor(
        private a: number,
        private b: number,
    ) {}

    public calculateGcd() {
        for (let i = this.a + this.b; i > 0; i--) {
            if (this.a % i === 0 && this.b % i === 0) {
                return i;
            }
        }
    }

 