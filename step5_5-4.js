var fruits = [
  {name: "バナナ", price: 200},
  {name: "リンゴ", price: 200},
  {name: "イチゴ", price: 500},
  {name: "オレンジ", price: 250},
  {name: "モモ", price: 350}
]

var result = 0;
for(let i = 0;i < fruits.length;i++){
  result += fruits[i].price;
}

console.log(result);