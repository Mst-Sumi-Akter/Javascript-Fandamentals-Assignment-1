function valueDetective(value) {
    const type = typeof value;
    const status = value ? 'truthy' : 'falsy';
    return `${type} | ${status}`;
}
console.log(valueDetective("hello"));
console.log(valueDetective(""));
console.log(valueDetective(25));
console.log(valueDetective(0));
console.log(valueDetective(true));
console.log(valueDetective(null));
console.log(valueDetective(undefined));

