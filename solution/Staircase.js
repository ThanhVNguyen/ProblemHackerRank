function stairCase(n) {
    for (let i = 0; i < n; i += 1) {
        for (let y = 0; y < n; y += 1) {
            if ((i + y) >= (n - 1)) {
                process.stdout.write('#');
            } else {
                process.stdout.write(' ');
            }
            // process.stdout.write(" y ")
        }
        process.stdout.write(' \n');
    }
}
stairCase(5)