// code your solution here


function superbowlWin(array){
    return array.find(isW).year
}

function isW(score) {
    return score.result === "W"
}
    

