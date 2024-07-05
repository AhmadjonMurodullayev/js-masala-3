// 1. array ichidagi eng katta sonni toping

let arr = [2, 4, 5, 7, 9];
function numBer(num) {
  let sorch = num.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < sorch.length; i++) {
    sorch = sorch[sorch.length - 1];
    return sorch;
  }
  } 

console.log(numBer(arr))

//  2. array ichidagi eng kichik sonni toping
function numBer2(num) {
  let sorch = num.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < sorch.length; i++) {
    sorch = sorch[0];
    return sorch;
  }
  } 

console.log(numBer2(arr))

// 3. Foydalanuvchi son kiritadi va arrey ichidagi foydalanuvchi sonidan kichik bo’lgan sonlarni ekranga chiqaring 
 let names = prompt("son kiriting")
  function namesNum(nem){
    let arrs = [2,5,6,7,8,9,10]
    for(let i = 0; i < arrs.length; i++){
      if(nem < arrs[i]){
        console.log(arrs[i]);
      }else{
       console.log(`${nem} katta son`);
      }
    }
  }
  console.log(namesNum(nem ));


  // 4. argument sifatida qabul qilingan sonning mukammal yoki mukammal son emasligini aniqlaydigan function yarating 
  const argovNum2 = (res) =>{
    let cont = 0
    for( let i = 0; i < res; i++){
      if(res % i == 0){
        cont = cont + i
       }if(cont == res){
        console.log(`${res} mukammal son `);
       }
    }
     if(cont !== res) {
      console.log(`${res} mukammal son emas`);
     }
  }
  argovNum2(6)

  // 5. raqamlar kiritilgan arreyni teskari qilish (for dan foydalaning) 
  let arrow = [2,3,4,5,6,7]
  function arrOw(main){
    let arrow2 =[]
   for (let i = main.length - 1;i >= 0; i--) {
    arrow2.push(arrow[i])
   }
   return arrow2
  }
  console.log(arrOw(arrow));

  // 6. arrey ichidagi tub sonlar ni toping
const isPrime = (number)=>{
    let count = 0
    let result = ""
    if(number >= 2){
        for(let i = 1; i < number; i++){
            if(number % i == 0){
                count++
            }
        }
        if(count === 1){
            result = "tup son"
        }else{
            result = "murakkab son"
        }
    }else{
        result = "xato son kiritlgan"
    }
    return result
}
console.log(isPrime(3));

// 7. Ixtiyoriy function va value lari sonlardan iborat bo'lgan object yaratilsin, va object value laridan tashkil topgan arrayga function parametri ham oxiridan ham boshidan qo'shilsin

  let rov = {
    a:5,
    b:6,
    c:7,
    d:8,
  }
  function objeCt(obj,numBer){
  let rov_values = Object.values(rov)
  rov_values.push(num)
  rov_values.unshift(num)
  console.log(rov_values);
}
objeCt(obj,5)
