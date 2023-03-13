const user = {
  name: `Mango`,
  age: 20,
  hobby: `html`,
  premium: true,
};

const addmood = function(value){
  user.mood = value;
}
const changeHobby = function(value){
  user.hobby = value;
}
const changePremium = function(value){
  user.premium = value;
}


function newArr() {
    const personDates = Object.keys(user)
  for (const personDate of personDates) {
    console.log(`${personDate}: ${user[personDate]}`)
  }
  
}
addmood(`Happy`)
changeHobby(`skydiving`)
changePremium(false)
newArr()
