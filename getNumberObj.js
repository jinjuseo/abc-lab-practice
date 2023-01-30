//String,Number, Boolean,Null, Undefined, Array, Object, Fucntion

let user ={
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

