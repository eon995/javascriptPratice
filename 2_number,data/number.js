//------------------------------ 진수, 지수
let count = 10;
const blue = 0x0000ff;
console.log(blue);
const umak = 0o0022;
console.log(umak);
const roomTemp = 21.5; // 10진수

const c = 3.0e6; //지수 (3.0 * 10^6 = 3,000,000)
const e = -1.6e-19; // 지수(-1.6 * 10^-19 = 0.0000000000000016)
console.log(c);
console.log(e);


const inf = Infinity;

const ninf = -Infinity;
const nan = NaN; //"숫자가아님"

console.log(inf);
console.log(ninf);
console.log(nan);
console.log("-----------------------");

// --------------------------- Number 함수

const small = Number.EPSILON; // 1에 더했을때 1과구분되는 결과를 줄수있는 가장 작은 값

console.log(1 + small);

const bigInt = Number.MAX_SAFE_INTEGER; // 표현할수 있는 가장 큰 정수
const max = Number.MAX_VALUE // 표현할 수 있는 가장 큰 숫자
const minInt = Number.MIN_VALUE;
const neInf = Number.NEGATIVE_INFINITY; //-infinity
const iinf = Number.POSITIVE_INFINITY; //infinity

console.log(bigInt);

console.log(max);
console.log(minInt);