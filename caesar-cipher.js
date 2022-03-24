function rot13(str) {
    const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?.';
    const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm!?.';
    let decoded = '';
    for (let i=0; i < str.length; i++) {
        const index = input.indexOf(str[i]);
        decoded += output[index];
    }
    return decoded.split('undefined').join(' ');
}
