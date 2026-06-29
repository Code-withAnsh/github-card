function getUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve({ id: 1, name: "ansh" });
            
        }, 1000);
    })
}//humne ek fn banaya jo return kar rha hai ek promise jiske
//resolve hone oer ye id aur name humko milega after 1 sec
function getPost(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(["pic1", "pic2"]);
            
        }, 1000);
    })
}//ab hum us user ke id se uska post dekh skte hai
getUser().then(function (data) {//get user per then lagaya aur wo ek data dega islye ek data pass kiya 
    // jo hume user ka pura data dega
    console.log(data);
    return getPost(data.id)//ab fn kuch return kar rha kya?? getpost ko usme kya post ki id jis se 
    // uska photo dekh ske
   // "Jab .then() ke andar se normal value return karo — toh agla .then() ko wahi value milti hai. 
   // Jab Promise return karo — toh agla .then() us Promise ke resolve hone ka wait karta hai aur uski 
   // resolved value milti hai.";
})
.then(function(data){
    console.log(data);//chuki upar humne post ki id return karai toh usme humara getpost ka content aa gya 
    
})