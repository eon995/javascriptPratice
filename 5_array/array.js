const arr = [1, 2, 3, 4, 5];

console.log("첫째 매개변수는 시작위치 둘째 매개변수는 끝나는위치");
console.log(arr.slice(3));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));

console.log("splice는 배열을 수정할수 있습니다. 첫번째 매개변수는 수정을 시작할 인덱스이고 두번째는 제거할 요소 숫자입니다. 나머지 매개변수는 배열에 추가될 요소입니다.");

const arr1 = [1, 5, 7];
console.log(arr1.splice(1, 0, 2, 3, 4));
console.log(arr1.splice(0, 2));

const arr2 = new Array(5).fill(1);

console.log(arr2);
console.log(arr2.fill("a"));
console.log(arr2.fill("b", 2, 4));

const arr3 = [1, 2, 3, 4, 5];
console.log(arr3.reverse());
console.log(arr3.sort());

const cart = [{ name: "widget", price: 0.05 }, { name: "gadget", price: 22.95 }];
const names = cart.map(x => x.name);
console.log(names);
const items = ["widget", "gadget"];
const prices = [9.9, 22.0];


//filter
const cards = [];
for (let suit of ['h', 'c', 'd', 's']) {
    for (let value = 1; value <= 13; value++) {
        cards.push({ suit, value });
    }
}
const cards2 = cards.filter(c => c.alue === 2);
console.log(cards2);