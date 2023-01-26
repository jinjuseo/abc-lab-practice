const arr =[];

for(let i =1;i<=100;i++){
    arr.push(i);
}
console.log("1~100 배열:");
console.log(arr);

const evenArr = arr.filter((item)=>item%2===0);
console.log("짝수만 출력:");
console.log(evenArr);

const findIndex = arr.findIndex((item)=>{
    if(item===26){
        return true;
    }
});
console.log(`26의 인덱스값 : ${findIndex}`);

arr.push(200);
console.log('push 200: ');
console.log(arr[arr.length-1]);



