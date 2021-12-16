const numStr = "33.3";

const num = Number(numStr); // 숫자로 바꿀수 없는 문자열은 nan이 반환이 됩니다

const a = parseInt("16volts", 10); // volt는 무시되고 10진수의 16으로 표기됩니다.

const b = parseInt("3a", 16) // 16진수 3a를 10진수로 바꿉니다. 결과는 58입니다.

const c = new Date();// 현재날짜

const ts = c.valueOf(); // 70년 1월 1일 자정부터 몇밀리초가 지났는지 나타냄

console.log(ts);

const n = 33.5;

const s = n.toString();

const arr = [1, true, "hello"];

const stt = arr.toString();

console.log(stt);