// greatest common divisor (GCD) via Euclidean algorithm
export function GCD(a: number, b: number) {
    while (b != 0) {
            var t = b;
            b = a % b;
            a = t;
    }
    return a;
}

// Euler’s Totient Function
export default function totient(n: number) {
    var result = {phi:1, coprimes: [1]};
    for (var i = 2; i < n; i++) {
            if (GCD(i, n) == 1) {
                    result.phi += 1;
                    result.coprimes.push(i);
            }
    }
    return result;
}