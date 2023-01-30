//String,Number, Boolean,Null, Undefined, Array, Object, Fucntion
/**
 * TODO: 1) 객체를 선언 (number, string, Boolean, null, undefined, array, function ,object);
 * TODO: 2) 함수: 객체 value의 데이터타입이 number인 [key, value]만 뽑아서 새로운 객체로 리턴
 * MEMO : reduce, entries
 */
const user ={
    Name :"Jinju SEO",
    age:25,
    americanAge:23,
    female: true,
    feature:null,
    house :undefined,
    phone:['010','9533','7164'],
    greeting :function greeting(){
        console.log("안녕하세요 서진주입니다. ");
    }
};


const getNumberObj =  Object.entries(user).reduce((acc,cur)=>{
        const [key,value] = cur;
        if(typeof value === 'number'){
            acc.push(cur);
        }
        return acc;
    },[]);

console.log(getNumberObj);


//강사님 코드
//acc["age1"] =10; => 문자열 변수나, 순수 문자열을 통해 객체에 접근할때 사용.
//acc.age1= 10; => 미리 만들어진 객체에 대해서만 사용가능

const getNumberObj2 = (obj)=>{ 
    const objEntires = Object.entries(obj);
    const result = objEntires.reduce((acc,[key,value])=> {
        //console.log({acc});
        if(typeof value === 'number'){
            acc[key]=value;
        }
        return acc;
},{});
    return result;
};

// MEMO : 리팩토링(Refactoring) - 코드 정돈
const getNumberObj3 = (obj)=>
     Object.entries(obj).reduce((acc,[key,value])=> {
        if(typeof value === 'number') acc[key]=value; //동적할당
        return acc;
},{});

const result = getNumberObj3(user);
console.log({result});


/** 
 * 과제 정리 (목표)
 * 1) entries와 같은 Object method들에 대해서 익숙해질 것.
 * 2) reduce와 같은 Array method에 대해서 익숙해질 것.
 * 3) 객체를 생성하는 방법을 알아보기
 * 재할당을 하지 않는 변수는 const로 선언하기!
 * 메서드를 떠올릴 수 있게 연습!
 */