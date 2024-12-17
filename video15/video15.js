console.log('hello world');

let sum = (a, b, callback) => {
    let tong = a + b;
    setInterval(() => {
        callback(tong);
    }, 3000);



}
let printsum = (messenger) => {
    console.log("check sum : ", messenger);
}
sum(6, 9, printsum);