/* ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।  */

function centimeterToMeter(c){
    let meter = c / 1000;
    return meter;
}
let centimeter = 7800;
const result = centimeterToMeter(centimeter);
console.log(result, "meter");