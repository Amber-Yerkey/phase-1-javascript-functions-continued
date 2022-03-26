
function saturdayFun(event = "roller-skate"){
    return `This Saturday, I want to ${event}!`
}

function mondayWork(event = "go to the office"){
    return `This Monday, I will ${event}.`
}

function wrapAdjective(flair = "*") {
    function inner(word = "special") {
      return `You are ${flair}${word}${flair}!`
    }
    return inner
  }
