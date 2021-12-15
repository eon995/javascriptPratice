
const dialog1 = "He looked up and said \"don't do that!\" to Max"; //  "" 안에서 "을 사용하려면 \를 사용해야합니다.

const dialog2 = 'He looked up and said "don\'t do that!" to Max';  // ' 안에서 ' 을 쓰기위해 '앞에 \를 하나 붙여줍니다.

console.log(dialog1);
console.log(dialog2);

const dialog3 = "Line1 \nLine2"; // \n은 줄바꿈 할수있습니다.

const dialog4 = "Line1 \r\nLine2"; // \r은 캐리지 리턴을 합니다?

const dialog5 = "Line1 \t Line2"; // \t은 탭을 사용할수있습니다.

console.log(dialog4);
console.log(dialog5);

console.log("----------------------------------------");

