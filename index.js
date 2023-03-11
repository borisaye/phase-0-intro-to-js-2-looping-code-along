let giftGivers = [];
let event = ["surprise"];


function writeCards(giftGivers){

    let giftReply = [];
    for (let i = 0; i < giftGivers.length; i++){
        giftReply[i] = (`Thank you, ${giftGivers[i]}, for the wonderful ${event} gift!`);

    }
    return giftReply;

}

let numCount = [];
let newCount;

function countDown(numCount) {

    for (let countdown = 10; countdown !== -1; countdown--) {
        console.log(countdown);
        
      }


    return numCount;


}