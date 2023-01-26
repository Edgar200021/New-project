// const studentData = [
//   {
//     name: "Albert",
//     lastName: "Einstein",
//     score: 53
//   },
//   {
//     name: "Charles",
//     lastName: "Dickens",
//     score: 84
//   },
//   {
//     name: "Marilyn",
//     lastName: "vos Savant",
//     score: 99
//   },
// ];
// let result = studentData.filter(function(value){
//   return value.score > 60
// })
// console.log(result);

// let name = result.map(function(val){
//     return val.name
// })
// console.log(name);

// let result = studentData.reduce(function(acc,value){
//     if(value.score > 60){
//         acc.push(value.name);
        
//         }
//         return acc;}
//         ,[])
//         console.log(result);
// let arr = [5,10,15,20];
// let result =arr.reduce(function(acc,value){
//     console.log(acc,value);
//     return acc + value
// })
// console.log(result)
// const studentData = [
//   {
//     name: "Albert",
//     lastName: "Einstein",
//     score: 53
//   },
//   {
//     name: "Charles",
//     lastName: "Dickens",
//     score: 84
//   },
//   {
//     name: "Marilyn",
//     lastName: "vos Savant",
//     score: 99
//   },
// ];

// let result = studentData.reduce(function(acc,value){
//    acc[value.name] = value.score;
// 	 return (acc)},
// 	 {}
// 	 )
// console.log(result);

// const data = {
// 	ships:[
// 			{
// 			name:"F200",
// 			price:30000
// 			},
// 			{
// 			name:"F450",
// 			price:50000
// 			}
// 			],
// 	plains:[
// 			{
// 			name:"Boing",
// 			price:400000
// 			},
// 			{
// 			name:"CY-34",
// 			price:1000000
// 			}
// 			],
// }

// data.ships.forEach(function(el){
// 	console.log(el.name,el.price)
// })


// const matrix = [
// 	[1,2,3],
// 	[2,4,6],
// 	[3,6,9]
// ];
// for (let i = 0;i < matrix.length;i++){
	// for(let j = 0;j < matrix[i].length;j++){
// 		console.log(matrix[i][j])
// }
// }



// const numbers = [1,5,8,7,6,3,7,8,2,4];

// for(let i = 0;i  < numbers.length;i++){
//     if(numbers[i] == 3){
//         console.log(i)
//     }
// }


// let arr = [3,7,10,11,15,20,22,27,30,31,35,39,41,47];

// for(let i = 0;i < arr.length;i++){
//     if(arr[i] == 35){
//         console.log(i)
//     }
// }

//   let arr = [
//   {name: "Alice", score: 10},
//   {name: "Bob", score: 20},
//   {name: "Juliana", score: 30},
//   {name: "Karen", score: 30},
//   {name: "Jona", score: 10},
//   {name: "Lewis", score: 10},
// ]

// let obj = arr.reduce(function(acc,value)
//    {
//     acc[value.score].push(value)
// 		return acc
// 	 },{})||

//ogtagorcel reduce vor gtnel bolor tveri gumar@
// const array = [1,5,6,2,3];
// let arr = array.reduce(function(acc,total){
// 	return acc + total
// },0)
// console.log(arr)

// //ogtagorcel join ev stanal "HELLO" string
// const array_join = ["H", "E", "L", "L", "O"];
// console.log(array_join.join(""))

// //inchpes karox em tpel 1ic minchev 9 tver@?
// const matrix = [
// 	[1,2,3], 
// 	[4,5,6], 
// 	[7,8,9]
// ];

// for (let i = 0;i < matrix.length;i++){
// 	for ( let a = 0;a < matrix[i].length;a++){
// 		console.log(matrix[i][a])
// 	}
// };

//stexcel funkcia vor@ kstana arr en num vorpes parameter,
//ayd funkciain petqe poxancel array ev number, et funckcian
//petq e veradardzi index@ te vortexe ayd number@ gtnvum

// function find_index(arr,num){
// 	return arr.indexOf(num)
// }

// console.log(find_index([1,5,6,2,3],5));
// console.log(find_index([1,5,7,1,17],1))

//inchpes karox em gtnel name - erkarutyun@
//inchpes karox em gtnel et "b" tar@ vorerrordna name-i mej
//Inchpes gtnm te qani angama "e" tar@ krknvum
// const names = "Elizabeth"
// console.log(names.length);
// console.log(names.indexOf("b"))
// const array1 = names.toLowerCase().split('')
// let count = array1.reduce((acc, value) => {
//     if(value === 'e') {
//         acc++
//     }
//     return acc;
// }, 0)

//alternative
// let count = 0
// for(let i = 0 ; i < names.length; i ++){
// if (names[i] == "e"  || names[i] == "E"){
// count ++
// }
// }
// console.log(count)



//stexcel data structure vor@ kazmvaca arraj-ic, vori mej ka 3 hat object
//amen object petq e unena name ev price banaliner
//dzez petq e ogtagorcelov cankacac cikl tpel hetevyal@

// const data = [
// 	{
// 		name: "bmw",
// 		price: 10000
// 	},
// 	{
// 		name: "mercedes",
// 		price: 11000
// 	},
// 	{
// 		name: "audi",
// 		price: 12000
// 	}
// ]

// data.forEach(function(el){
// 	console.log(el.name +":" + el.price)
// })

//stexcel funkcia vor kveradardzni caknacac tvi qarakusin
//orinak
//function square(num){
//    return
//}
  // function function2(x){
	// 	console.log(x**2)
	// }
	// function2(5)

//grel while loop-ov cikl, vor@ kkangni miayn ayn jamanak erb payman@
//klini true
//let a = 0
//payman, a petqa havasar lini 7
//while loop um amen cikli jamanak ain gumarum enq 1
//zhugh exeq anverj cikl chanel, teche browser/komp kkaxi

	// let n = 0;
	//alternative
	// while (n < 7){
	// 	n++;
	// 	console.log(n);
	// }

// 	while (true){
// 		if(n == 7){
// 			break;
// 		}
// 		n++;
// 		console.log(n);
// 	}

// 	//to_map array-i vra ogtagorcel map stexcelov nor array "mapped"
// //anunov, vor@ ira mej kunena amen tvi 2ov bazmapatik@
// //"mapped" petq e ta [2,4,6,8,10]

// 	const to_map = [1,2,3,4,5];
// 	let y = to_map.map(function(arr){
// 		return arr * 2
// 	})
// 	console.log(y)
	

let basketValue = 0;

  const btn = document.querySelector(".product__btn");
  const basketTotal = document.querySelector(".site__cart--total");

  for (let i = 0;i < btn.length; i++){
    btn[i].addEventListener(click,function(){
      basketValue += 1;
      console.log(basketValue)
      basketTotal.innerText = basketValue
    })
  }

