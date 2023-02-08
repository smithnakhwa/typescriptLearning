arrayOfLetter=['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
arrayOfNumer=['0','1','2','3','4','5','6','7','8','9'];
arrayOfSpecial=['?','!','@','#','$','%','^','&','*','+','-','_'];
arrayOfResult=[arrayOfLetter,arrayOfNumer,arrayOfSpecial];
length=20;
let temp="";
for (let index = 0; index < length; index++) {
    let element=arrayOfResult[Math.round(Math.random()*(arrayOfResult.length-1))];
    let char=element[Math.round(Math.random()*(element.length-1))];
    temp+=char;
  }
console.log(temp);