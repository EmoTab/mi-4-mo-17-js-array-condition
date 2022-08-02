//MULTI STAGE CONDITION AND NESTED CONDITIONS

var money =36;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if (danishPrice < money){
    console.log('Danish Khabo');
}
else if (butterBread < money){
    console.log('Butter Bon Khabo');
}
else if (toastBiscuit < money){
    console.log('Toast biscuit khabo');
}
else{
    console.log('Mama rong cha dao');
}