// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

var mobileModelIUsed = [
    "Nokia 7610",
    "Samsung",
    "Redmi 5 plus",
    "redmi note 5 pro",
    "symPhony w8",
    "symphony h60"
]
var i = 0;
while(i< mobileModelIUsed.length){
    var model = mobileModelIUsed[i];
    console.log(model);
    i++;
}