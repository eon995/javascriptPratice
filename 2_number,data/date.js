
const now = new Date();
console.log(now);

const dateP = new Date(2022, 12, 16, 10, 0); // 년, 월(0에서 시작하므로 12 이면 내년 1월이 된다), 일 시, 분

console.log(dateP);

const day = dateP.getDay();

console.log(dateP.getDay()); // (1은 월요일 0은 일요일)
// getMonth ,getYear 등 날짜 표시는 다있음

const month = dateP.getMonth();
console.log(month);