// objekat koji čuva stanje u večeri i 
// aktivnosti tokom dana

var dan1 = {
    preobrazajVeverica: false,
    aktivnosti: ["rad", "drvo", "pica", "trčanje", "televizija"]
};

console.log(dan1.preobrazajVeverica);

console.log(dan1.preobrazajVuk);

dan1.preobrazajVuk = false;
console.log(dan1.preobrazajVuk);

console.log(dan1.aktivnosti);

console.log(dan1);