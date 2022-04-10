// Задача №2
let a1 = (5 % 3),
    a2 = (3 % 5),
    a3 = (5 + '3'),
    a4 = ('5' - 3),
    a5 = (74 + 'кг'),
    a6 = (785 * 653),
    a7 = (100 / 25),
    a8 = (0 * 0),
    a9 = (0 / 2),
    a10 = (89 / 0),
    a11 = (98 + 2),
    a12 = (5 - 98),
    a13 = ((8 + 56 *4) / 5),
    a14 = ((9 - 12) * 7 / (5 + 2)),
    a15 = (+ '123'),
    a16 = (1 || 0),
    a17 = (false || true),
    a18 = (true > 0);

console.log(a1, typeof(a1));
console.log(a2, typeof(a2));
console.log(a3, typeof(a3));
console.log(a4, typeof(a4));
console.log(a5, typeof(a5));
console.log(a6, typeof(a6));
console.log(a7, typeof(a7));
console.log(a8, typeof(a8));
console.log(a9, typeof(a9));
console.log(a10, typeof(a10));
console.log(a11, typeof(a11));
console.log(a12, typeof(a12));
console.log(a13, typeof(a13));
console.log(a14, typeof(a14));
console.log(a15, typeof(a15));
console.log(a16, typeof(a16));
console.log(a17, typeof(a17));
console.log(a18, typeof(a18));

// Задача №3

let width = '10см',
    height = '23см',
    Spryam = parseInt(width) * parseInt(height);

console.log(Spryam);

// Задача №4

let h = '10',
    d = a7;
let VCilindra = 3.14 * d * h;

console.log((VCilindra * 100) / 100);

// Задача №5

let r = 5,
    SKruga = (3.14 * (r ** 2));

console.log(SKruga);

// Задача №6

let a = 5,
    b = 7,
    STrap = (((a + b) / 2) * h);

console.log(STrap);

// Задача №7

let S = 2000000,
    p = 10,
    years = 5,
    Pereplata = (((S * p) / 100) * 5);

console.log(p + '% от ' + S + ' ваша переплата за ' + years + 'лет' + ' составит ' + Pereplata);

// Задача №8

{
     let a = 8,
         b = 3,
         x = ((16 / (a + 2)) * b);

    console.log(x.toFixed(1));
}
