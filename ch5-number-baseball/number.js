// 1. 미리 짜보기) 4자리수 랜덤생성
let num = Math.random()*10000
num = Math.floor(num)
console.log(num)

// 보완점 : 나) 0.0123일 경우 123으로 3자리수가 생길 수 있음. 
// 보완점 : 따라서 1이상 10미만으로 맞춰주기 위해 아래와 같은 과정이 필요함

/*
a. 1이상 10미만의 수를 생성
  0 <= Math.random < 1
  0 <= Math.random * 9 < 9
  1 <= Math.random * 9 + 1 < 10
b. 소수점 자리 내림 Math.floor
  Math.floor(Math.random() * 9 + 1)

*/



// 2. 미리 짜보기) 1~9를 담는 저장소 배열 생성
// 방법1) 다 이어진 문자열로 만들고 split해서 array.map함수로 String->Number 형변환
let numberOfString ="123456789"
let array = numberOfString.split('')
let arrayOfNumber= array.map( item => parseInt(item)) //map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
console.log(array) 
console.log(arrayOfNumber)
//방법2) 객체 리터럴로 생성 
let arrayLiteral =[1,2,3,4,5,6,7,8,9]


//책에서는 반복문 사용을 위해
const numbers = []
for(let i = 1; i < 10; i++){
  numbers.push(i)
}

