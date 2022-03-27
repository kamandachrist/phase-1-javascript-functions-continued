
function saturdayFun(){
    console.log(`This Saturday, I want to ...!`);
}
function saturdayFun(overriden = `bathe my dog!`, activity = `roller-skate!`){
    console.log(`${overriden} bathe my dog!`)(`${activity} roller-skate!`)
}



function mondayWork() {
  return `This monday, I will work from home.`
}



function wrapAdjective(string){
    return function(){
        return `You are *a hard worker`
    }

}