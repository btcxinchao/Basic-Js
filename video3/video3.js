console.log('welcom to javascript  ')


let a= 5 ;    // số nguyên 
let b = 10.1 ;    // kiểu số thực 
let e =10; 
let x = a > b  ;   // booleans 
let y = "chuong dep trai ";  // string 
let Fullname = {Lastname:"Bùi ",middlename:"Tấn",firstname:"Chương "}; // object 
let arr= ["BMV","AK","NANO"];   // array 
let String = ` I'm chuong `   // sử dụng dấu packtick để xử lí dấu ' bị lỗi 



console.log ('c=a+b=', + a + b );
console.log ( 'booleans  :  x', + x );
console.log(" chuoi :   ", y );
console.log("Fullname : " + Fullname.Lastname + ""+ Fullname.middlename +""+ Fullname.firstname  );
console.log(arr[0]);
console.log ("Test String :","a= " + a + " e=" + e  );
console.log(String);



//template String
console.log('Fifteen is ' + (a+b)+ 'and \nNot ' + (2*a+b) + '.');
console.log(`Fifteen is a+b= ${a+b} and
Not ${2*a+b}.`);

