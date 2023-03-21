
var gameModes = ['single', 'multi', 'online'];
var selectedMode = 1;
var numberOfPlayers = 1;
var isOnline = false;
var totalKills = [];


var pawnsforRobo = [];
var gameTimer;
var timeLimit = 15; //Setup time limit in seconds
var whenWasLastSix=0;
var waitTill = 6;
var missedChances = 0;
var countdownTimer;
var currentPlayer  = 0;
var whoAmI;
var whoIsPlaying;
var allPlayers = ["You", "Green", "Yellow", "Blue"];
var canPlayAgain = false;
var gameOver = false;
// Paths for pawns
// var redOnBoard = {redPawn1:{position: 50, onBoard: true, reachedHome: false, initPos:"-3.6 0.114 5.375"}, redPawn2:{position: 50, onBoard: true, reachedHome: false, initPos:"-3.5 0.114 3.5"}, redPawn3:{position: 50, onBoard: true, reachedHome: false, initPos:"-5.5 0.114 5.5"}, redPawn4:{position: 50, onBoard: true, reachedHome: false, initPos:"-5.5 0.114 3.5"}};

var redOnBoard = {redPawn1:{position: 0, onBoard: false, reachedHome: false, initPos:"-3.5 0.114 5.5"}, redPawn2:{position: 0, onBoard: false, reachedHome: false, initPos:"-3.5 0.114 3.5"}, redPawn3:{position: 0, onBoard: false, reachedHome: false, initPos:"-5.5 0.114 5.5"}, redPawn4:{position: 0, onBoard: false, reachedHome: false, initPos:"-5.5 0.114 3.5"}};
var greenOnBoard = {greenPawn1:{position: 0, onBoard: false, reachedHome: false, initPos:"-5.5 0.114 -3.5"}, greenPawn2:{position: 0, onBoard: false, reachedHome: false, initPos:"-3.5 0.114 -3.5"}, greenPawn3:{position: 0, onBoard: false, reachedHome: false, initPos:"-3.5 0.114 -5"}, greenPawn4:{position: 0, onBoard: false, reachedHome: false, initPos:"-5.5 0.114 -5"}};
var yellowOnBoard = {yellowPawn1:{position: 0, onBoard: false, reachedHome: false, initPos:"3.5 0.114 -3.5"}, yellowPawn2:{position: 0, onBoard: false, reachedHome: false, initPos:"5.5 0.114 -3.5"}, yellowPawn3:{position: 0, onBoard: false, reachedHome: false, initPos:"5.5 0.114 -5.5"}, yellowPawn4:{position: 0, onBoard: false, reachedHome: false, initPos:"3.5 0.114 -5.5"}};
var blueOnBoard = {bluePawn1:{position: 0, onBoard: false, reachedHome: false, initPos:"5.5 0.114 3.5"}, bluePawn2:{position: 0, onBoard: false, reachedHome: false, initPos:"3.5 0.114 3.5"}, bluePawn3:{position: 0, onBoard: false, reachedHome: false, initPos:"3.5 0.114 5.5"}, bluePawn4:{position: 0, onBoard: false, reachedHome: false, initPos:"5.5 0.114 5.5"}};
var pawnId = {};
var pathId = {};
var redPath = ["-1 0.194 6", "-1 0.194 5", "-1 0.194 4", "-1 0.194 3", "-1 0.194 2", 
"-2 0.194 1", 
"-3 0.194 1", "-4 0.194 1", "-5 0.194 1", "-6 0.194 1", "-7 0.194 1", 
"-7 0.194 0", 
"-7 0.194 -1", "-6 0.194 -1", "-5 0.194 -1", "-4 0.194 -1", "-3 0.194 -1", "-2 0.194 -1",
"-1 0.194 -2", "-1 0.194 -3",  "-1 0.194 -4",  "-1 0.194 -5",  "-1 0.194 -6",  "-1 0.194 -7",
"0 0.194 -7",
"1 0.194 -7", "1 0.194 -6", "1 0.194 -5", "1 0.194 -4","1 0.194 -3","1 0.194 -2",
"2 0.194 -1",  "3 0.194 -1", "4 0.194 -1", "5 0.194 -1", "6 0.194 -1", "7 0.194 -1",
"7 0.194 0",
"7 0.194 1",  "6 0.194 1",  "5 0.194 1",  "4 0.194 1",  "3 0.194 1",  "2 0.194 1",
"1 0.194 2", "1 0.194 3", "1 0.194 4", "1 0.194 5", "1 0.194 6", "1 0.194 7", 
"0 0.194 7", 
"0 0.194 6", "0 0.194 5", "0 0.194 4", "0 0.194 3", "0 0.194 2", "0 0.194 1"
]
var greenPath = [
   "-6 0.194 -1", "-5 0.194 -1", "-4 0.194 -1", "-3 0.194 -1", "-2 0.194 -1",
   "-1 0.194 -2", "-1 0.194 -3",  "-1 0.194 -4",  "-1 0.194 -5",  "-1 0.194 -6",  "-1 0.194 -7",
   "0 0.194 -7",
   "1 0.194 -7", "1 0.194 -6", "1 0.194 -5", "1 0.194 -4","1 0.194 -3","1 0.194 -2",
   "2 0.194 -1",  "3 0.194 -1", "4 0.194 -1", "5 0.194 -1", "6 0.194 -1", "7 0.194 -1",
   "7 0.194 0",
   "7 0.194 1",  "6 0.194 1",  "5 0.194 1",  "4 0.194 1",  "3 0.194 1",  "2 0.194 1",
   "1 0.194 2", "1 0.194 3", "1 0.194 4", "1 0.194 5", "1 0.194 6", "1 0.194 7", 
   "0 0.194 7", 
   "-1 0.194 7",
   "-1 0.194 6", "-1 0.194 5", "-1 0.194 4", "-1 0.194 3", "-1 0.194 2", 
   "-2 0.194 1", 
   "-3 0.194 1", "-4 0.194 1", "-5 0.194 1", "-6 0.194 1", "-7 0.194 1", 
   "-7 0.194 0", 
   "-6 0.194 0",  "-5 0.194 0", "-4 0.194 0", "-3 0.194 0", "-2 0.194 0", "-1 0.194 0"
];
var yellowPath = [
   "1 0.194 -6", "1 0.194 -5", "1 0.194 -4","1 0.194 -3","1 0.194 -2",
   "2 0.194 -1",  "3 0.194 -1", "4 0.194 -1", "5 0.194 -1", "6 0.194 -1", "7 0.194 -1",
   "7 0.194 0",
   "7 0.194 1",  "6 0.194 1",  "5 0.194 1",  "4 0.194 1",  "3 0.194 1",  "2 0.194 1",
   "1 0.194 2", "1 0.194 3", "1 0.194 4", "1 0.194 5", "1 0.194 6", "1 0.194 7", 
   "0 0.194 7", 
   "-1 0.194 7",
   "-1 0.194 6", "-1 0.194 5", "-1 0.194 4", "-1 0.194 3", "-1 0.194 2", 
   "-2 0.194 1", 
   "-3 0.194 1", "-4 0.194 1", "-5 0.194 1", "-6 0.194 1", "-7 0.194 1", 
   "-7 0.194 0", 
   
   "-7 0.194 -1", "-6 0.194 -1", "-5 0.194 -1", "-4 0.194 -1", "-3 0.194 -1", "-2 0.194 -1",
   "-1 0.194 -2", "-1 0.194 -3",  "-1 0.194 -4",  "-1 0.194 -5",  "-1 0.194 -6",  "-1 0.194 -7",
   "0 0.194 -7",


   "0 0.194 -6",  "0 0.194 -5", "0 0.194 -4", "0 0.194 -3", "0 0.194 -2", "0 0.194 -1"
];
var bluePath = [
   "6 0.194 1",  "5 0.194 1",  "4 0.194 1",  "3 0.194 1",  "2 0.194 1",
   "1 0.194 2", "1 0.194 3", "1 0.194 4", "1 0.194 5", "1 0.194 6", "1 0.194 7", 
   "0 0.194 7", 
   "-1 0.194 7",
   "-1 0.194 6", "-1 0.194 5", "-1 0.194 4", "-1 0.194 3", "-1 0.194 2", 
   "-2 0.194 1", 
   "-3 0.194 1", "-4 0.194 1", "-5 0.194 1", "-6 0.194 1", "-7 0.194 1", 
   "-7 0.194 0", 
   
   "-7 0.194 -1", "-6 0.194 -1", "-5 0.194 -1", "-4 0.194 -1", "-3 0.194 -1", "-2 0.194 -1",
   "-1 0.194 -2", "-1 0.194 -3",  "-1 0.194 -4",  "-1 0.194 -5",  "-1 0.194 -6",  "-1 0.194 -7",
   "0 0.194 -7",
   "1 0.194 -7",

   "1 0.194 -6", "1 0.194 -5", "1 0.194 -4","1 0.194 -3","1 0.194 -2",

   "2 0.194 -1",  "3 0.194 -1", "4 0.194 -1", "5 0.194 -1", "6 0.194 -1", "7 0.194 -1",
   "7 0.194 0",

   "6 0.194 0",  "5 0.194 0", "4 0.194 0", "3 0.194 0", "2 0.194 0", "1 0.194 0"
];


//choose Game Mode
const ChooseGameMode = function(modeId){
    PlayAudio('audio-click');
    //Get the button click and choose the mode as per the value given to function
    //Set numberOfPlayers based on mode.
    selectedMode = modeId;
    console.log("MODE CHANGED TO" + selectedMode);
    if(modeId == 1){
        allPlayers = ["Red", "Green", "Yellow", "Blue" ];
    }

    if(modeId == 2){
        var user = GetUserName();
        whoAmI = 0;
        if(typeof user === 'undefined' || user === ""){
            document.getElementById("online-mode").className= "middleui uiappear";
            document.getElementById("online-name-panel").className= "middleui uiappear";
        } else{
            document.getElementById("online-mode").className= "middleui uiappear";
        }
        // alert("Not available at the moment");
        // location.href = "online.html";
        // return;
    } else {
        
        document.getElementById("bottomui").className += " uiappear";
        document.getElementById('whoseturn').innerHTML = allPlayers[0];    
    }
    document.getElementById('start-ui').className = "middleui uidisappear";
    // document.getElementById("start-ui").style.display = "none";

    // pawnId = redOnBoard;
    // ReachedHome('redPawn1')
    // alert("Mode id is " + modeId);
}

const LudoBrain = function(){
    // PlayAudio('audio-click');
    StopAudio('audio-time_noti');
    canPlayAgain = false;
    document.getElementById('rolldice').style.display = 'none';
    //Validate modes and based on modes switch between playmode
    if(!gameOver){
        if(selectedMode == 0){
            //if single player, redplayer is user rest all robots
            //IF user is playing
            if(currentPlayer == 0){
                SpawnOrMove(RollDice());
                GameTimer();
                // SpawnOrMove(RollDice());
            } else {
                // alert("WAIT FOR YOUR TURN");
                setTimeout(function(){ MrRobot(RollDice())}, 1000);
            }
    
        }else if(selectedMode == 1){
            GameTimer();
            SpawnOrMove(RollDice());
            // SpawnOrMove(RollDice());
        //if local multiplayer set number of players to 4 and play all by user
        } else if(selectedMode == 2){
        //if online player set isOnline to true and set numberofplayerr to 1
            if(currentPlayer === whoAmI){
                SpawnOrMove(RollDice());
                GameTimer();
            }
            // alert("MOdE IS ONLIE");

        } else {
            //default game mode to single local player
        }
    } else {
        alert("Can't play this game already has a winner");
    }
}



 //Timer Function
 const GameTimer = function(){
    //Reset the interval
    var timerText = document.getElementById('timer');
    timerText.className = "timer"
    clearInterval(countdownTimer);
    //SetThe Timer to default timelimit
    gameTimer = timeLimit;     
    //start timer count downs
    countdownTimer = setInterval(function(){
        //Output the timer
        // console.log(gameTimer);
        timerText.innerHTML = gameTimer;
        if(gameTimer == 5){
            PlayAudio('audio-time_noti');
            timerText.className = "timer timerzoom"
        }
        // If time runs out do the logic here
        if(gameTimer == 0){
            clearInterval(countdownTimer);
            // alert('Time is up!');
            ChangePlayer();
        }
        // reduce seconds from gameTimer each secondss
        gameTimer--;
    }, 1000);
}

 //Change curret player for Local Games
const ChangePlayer = function(){
    document.getElementById('dice-information').style.display = 'none';
    if(currentPlayer < allPlayers.length -1){
        currentPlayer++;
    } else {
        currentPlayer = 0;
    }

    if(selectedMode == 2){
        UpdatePlayer(currentPlayer);
        clearInterval(countdownTimer);

    }

    document.getElementById('whoseturn').innerHTML=  allPlayers[currentPlayer];

    RemoveTrigger();
    if(selectedMode == 0 && currentPlayer == 0) {
        document.getElementById('rolldice').style.display = 'block';
    } else if(selectedMode == 0 && currentPlayer > 0){

        LudoBrain();
    } else if(selectedMode == 2 && currentPlayer !== whoAmI) {
        document.getElementById('rolldice').style.display = 'none';
    } else {
        document.getElementById('rolldice').style.display = 'block';
    }
}

//Call this function to roll dice and return the value 
const RollDice = function(){
    var randomNumber;
    console.log(waitTill);
     //Set a random dice number
     if(whenWasLastSix >= waitTill){
        randomNumber = 6;
        waitTill = Math.floor(Math.random()*(12 - 4 + 1) + 4);
        whenWasLastSix = 0;
     } else {
         randomNumber = Math.floor(Math.random() * 6) + 1;
     }
     
     if(randomNumber != 6){
        whenWasLastSix++;
     }

     //if onlie mode update doc value
     if(selectedMode == 2){
        UpdateDice(randomNumber);
     }

     DiceAnim(randomNumber).then((value)=>{

        console.log('the value of async is' + value);
        console.log(randomNumber);
        ShowDice(randomNumber);
     });
    
     return randomNumber;

 }

 async function DiceAnim(value){
    var diceRotations = ['0 0 0', '0 0 90', '90 0 0', '270 0 0', '180 0 90', '180 0 0'];
    var dice = document.getElementById('dicemodel');
    PlayAudio('audio-dice');

    dice.setAttribute("animation", {'property': 'position', 'to': '0 8 0', "dur": "200"});
    dice.setAttribute("animation__2", {'property': 'rotation', 'to': '720 360 720', "dur": "200"});
    setTimeout(()=>{
        dice.setAttribute("animation", {'property': 'position', 'to': '0 1.2 0', "dur": "200"});
        dice.setAttribute("animation__2", {'property': 'rotation', 'to': diceRotations[value-1], "dur": "200"});    
    }, 200);
   

 }

const ShowDice = function(value){

    var diceUi = document.getElementById('dice-information');
    var src = "./textures/dice_info_"+value + ".png";

    diceUi.setAttribute('src', src)
    setTimeout(()=>{    diceUi.style.display = "block";
},1000)
}



// SPAWNING AND MOVING DICE FOR PLAYER
const SpawnOrMove = function(value){
    // pawnsforRobo = [];
     var howManyCanIMove = 0;
     switch(currentPlayer) {
         case 0: pawnId = redOnBoard, pathId = redPath; break;
         case 1: pawnId = greenOnBoard, pathId = greenPath; break;
         case 2: pawnId = yellowOnBoard, pathId = yellowPath; break;
         case 3: pawnId = blueOnBoard, pathId = bluePath; break;
         default : pawnId = redOnBoard, pathId = redPath;
     }
     //Check dice nnumber, if it is 6 Check  check spawning and moving
     if(value == 6) {
        for(const key in pawnId){
            // Enable Spawning if the pawn is not in play yet
            if(pawnId[key].onBoard == false){
                console.log(key + " Can be moved");
                EnableSpawning(key);
                howManyCanIMove++;
            } else if(pawnId[key].onBoard == true && pawnId[key].position <= 50){
                EnableMoving(key, value);
                howManyCanIMove++;
            } else {
                console.log(key + " Can not be moved");
            }
            
        }
     } else {
        for (key in pawnId){
            // pawnsforRobo.push(key);
            if(pawnId[key].onBoard == true && pawnId[key].position <= ((pathId.length - 1) - value)){
                console.log("PATH ID = " + pawnId[key].position);
                EnableMoving(key, value);
                howManyCanIMove++;
            } else {
                console.log("Nothing to move");
            }
        }
     }
     //If it is any other number only enable Moving for thos who are on board
     if(howManyCanIMove != 0){
         console.log("You can spwan or move");
     } else {
        PlayAudio('failure');
        setTimeout(function(){
            ChangePlayer();
        },1000)
        //  console.log("You canot spwan or move");
     }
 }


//ENABLE PLAYER FOR SPAWNING
 const EnableSpawning = function(whomToMove){
    //Enable player to move.
    var whoisMoving = document.getElementById(whomToMove);
    whoisMoving.setAttribute('enable-click', {"event": "click", 'towhere': pathId[0], 'message': whomToMove, 'steps': 1});
    whoisMoving.setAttribute('animation',{"property": "scale", "to": "1.5 1.5 1.5", "dur": "1000", "dir": "alternate",  "loop": "true"});

    console.log("Can spawn " );
}
// ENABLE PLAYER FOR MOVING
const EnableMoving = function(whom, where){
   var whoisMoving = document.getElementById(whom);
   whoisMoving.setAttribute('enable-moving', {"event": "click", "steps": where });
   whoisMoving.setAttribute('animation',{"property": "scale", "to": "1.5 1.5 1.5", "dur": "1000", "dir": "alternate",  "loop": "true"});
}

//Make the Desired Move for Selected Pawns
const MakeAMove = function(whom, steps){
    totalKills = [];
    if(selectedMode===2){
        UpdateMove(whom, steps, pawnId, pathId);
    }
    StopAudio('audio-time_noti');

    // PlayAudio('audio-click');
    RemoveTrigger();
    clearInterval(countdownTimer);
    for(i=0; i < steps; i++){
        setTimeout(function timer() {
            console.log(i);
            var currentPos = pawnId[whom].position;
            console.log(currentPos);
            currentPos++;
            console.log(currentPos);
            var whoisMoving = document.getElementById(whom);
            PlayAudio('audio-move');
            whoisMoving.setAttribute('animation', {'property': 'position', 'to': pathId[currentPos]});
            pawnId[whom].position = currentPos;
            console.log(pathId[currentPos]);
          }, i * 1000);   
     }
     
     setTimeout(function(){
        CheckForKill(whom).then((killed)=>{
            if(selectedMode === 2){
                KillOG(totalKills);
            } 
            if(!gameOver){
                if(steps >=6){
                    canPlayAgain = true;
                    AnotherChance();
                 } else {
                    if(canPlayAgain == false){
                        ChangePlayer();
                    } else {
                        AnotherChance();
                    }
                 }
            }
        });
     }, 1300 * steps);

     
    //  ChangePlayer();
 }


const RemoveTrigger = function (){
    var diceUi = document.getElementById('dice-information');
    diceUi.style.display = "none";
    if(selectedMode  == 2){
        
    }else {
        GameTimer();
    }
    console.log("CALLED TO REMOVE TRIGGER");
    var allPlayers = document.querySelectorAll(".rayclick");

    for(i =0; i < allPlayers.length; i++){
        allPlayers[i].removeAttribute('enable-moving');
        allPlayers[i].removeAttribute('enable-click');

        allPlayers[i].removeAttribute('animation');
        allPlayers[i].setAttribute("scale", "1 1 1");
    }
}

// update the selected pawn to desired position based on the dice value
const UpdatePlayerPosition = function (playerId, position, isOnBoard){
    pawnId[playerId].position = position;
    pawnId[playerId].onBoard = isOnBoard;
    console.log("Called " + playerId + " to update position to " + position);
    setTimeout(function(){    RemoveTrigger();
    }, 1000)
}

const AnotherChance = function(){
   if(selectedMode > 0){
    console.log("CALLED ANOTHER CHANCE")
    document.getElementById('rolldice').style.display = 'block';
    GameTimer();
   } else if(selectedMode == 0 && currentPlayer == 0){
    document.getElementById('rolldice').style.display = 'block';
    GameTimer();
   } else {

    setTimeout(()=>{LudoBrain()}, 1000)

   }
}

async function CheckForKill(killer){
    
    console.log("Called to check For Kill for " + killer);
    var killersPosV = document.getElementById([killer]).getAttribute("position");
    var killersPos = pawnId[killer].position;
    if(killersPos == 0 || killersPos == 8 || killersPos == 13  || killersPos == 21  || killersPos == 26  || killersPos == 34  || killersPos == 39  || killersPos == 47){
        // resolve('resolved');
        console.log("CANT KILL");
    } else {
        if(killersPos == 56){
            console.log("YOU REACHED HOME");
            canPlayAgain = true;
            ReachedHome(killer);
        } else {
            if(currentPlayer == 0){
                
                await checkEnemyPosition(greenOnBoard, killersPosV);
                await checkEnemyPosition(yellowOnBoard, killersPosV);
                await checkEnemyPosition(blueOnBoard, killersPosV);
            }  else if(currentPlayer == 1){
                await checkEnemyPosition(redOnBoard, killersPosV);
                await checkEnemyPosition(yellowOnBoard, killersPosV);
                await checkEnemyPosition(blueOnBoard, killersPosV);
            } else if(currentPlayer == 2){
                await checkEnemyPosition(greenOnBoard, killersPosV);
                await checkEnemyPosition(redOnBoard, killersPosV);
                await checkEnemyPosition(blueOnBoard, killersPosV);
            } else if(currentPlayer == 3){
                await checkEnemyPosition(greenOnBoard, killersPosV);
                await checkEnemyPosition(yellowOnBoard, killersPosV);
                await checkEnemyPosition(redOnBoard, killersPosV);
            }
            console.log("DID KILL");
        }
        // resolve('resolved');
    }
    
}

async function checkEnemyPosition (enemies, pos){
    var value = false

    console.log(enemies);
    for (key in enemies){
        var enemeyPos = document.getElementById(key).getAttribute("position");
        console.log(enemeyPos);
        console.log(Math.round(enemeyPos.x))
        console.log(Math.round(enemeyPos.y))
        console.log(Math.round(enemeyPos.z))
        if(enemeyPos.x == pos.x && enemeyPos.y==pos.y && enemeyPos.z == pos.z){
            PlayAudio('audio-die');
            console.log(key);
            document.getElementById(key).setAttribute("animation", {'property': 'position', 'to': "0 2 0"});
            document.getElementById(key).setAttribute("animation", {'property': 'position', 'to': enemies[key].initPos});

            console.log("I Killed " + key);

            console.log("My Enemies oonBoard value");
            enemies[key].position = 0;
            enemies[key].onBoard = false;
            totalKills.push({enemies, key})
            // await KillTheEnemy(enemies);
            canPlayAgain = true;
            console.log("My Enemies oonBoard value" + enemies[key].onBoard);
        }
    }
       
}

// async function KillTheEnemy (enemies){
//     console.log("Enemies  " + enemies);
//     console.log(enemies);
// }

const ReachedHome = function(who){
    pawnId[who].reachedHome = true;
    PlayAudio('reachedhome');
    var howManyWin = 0;
    for(key in pawnId){
        if(pawnId[key].reachedHome == true){
            howManyWin++;
        }
    }
    console.log("How Many Win" + howManyWin);
    if(howManyWin >= 4){
        canPlayAgain = false;
        gameOver = true;
        WinnerIs(allPlayers[currentPlayer]);
    } else {
        AnotherChance();
    }
    console.log("congratulations you reached home");
}


//Robots Game Play
const MrRobot = function(value){
    pawnsforRobo = [];
    var pawnsForRoboSpawn=[];
     var howManyCanIMove = 0;
     switch(currentPlayer) {
        //  case 0: pawnId = redOnBoard, pathId = redPath; break;
         case 1: pawnId = greenOnBoard, pathId = greenPath; break;
         case 2: pawnId = yellowOnBoard, pathId = yellowPath; break;
         case 3: pawnId = blueOnBoard, pathId = bluePath; break;
         default : pawnId = redOnBoard, pathId = redPath;
     }
     // console.log(pawnId);
     //Check dice nnumber, if it is 6 Check  check spawning and moving
     setTimeout(function(){
        if(value == 6) {
            var HowManyCanISpawn = 0;
            for(const key in pawnId){
                console.log("For Key " + key);
                // console.log(key);
                // console.log(pawnId[key].position);
                // console.log(pawnId[key].onBoard);
                // Enable Spawning if the pawn is not in play yet
                if(pawnId[key].onBoard == false){
                    console.log(pawnId[key] + " Can be spawned");
                    pawnsForRoboSpawn.push(key);
                    // EnableSpawning(key);
                    HowManyCanISpawn++;
                    howManyCanIMove++;
                } else if(pawnId[key].onBoard == true && pawnId[key].position <= 50){
                    pawnsforRobo.push(key);
                    console.log(key + " Can be moved");
                    console.log(pawnId[key].position);
                    // EnableMoving(key, value);
                    howManyCanIMove++;
                } else {
                    console.log(key + " Can not be moved");
                }
    
                
                
            }
    
            console.log("Howmany can i spaw da " + HowManyCanISpawn);
    
            if(HowManyCanISpawn > 0){
                    SpawnRobo(pawnsForRoboSpawn[0]);
                
            } else {
                console.log(pawnsforRobo);
                console.log("MOVINNG AT ");
                MakeAMove(pawnsforRobo[Math.floor(Math.random() * pawnsforRobo.length)], value);
            }
    
         } else {
            console.log("how many can i move one "+ howManyCanIMove);
            for (key in pawnId){
                if(pawnId[key].onBoard == true && pawnId[key].position <= ((pathId.length - 1) - value)){
                    console.log("PATH ID = " + pawnId[key].position);
                    // EnableMoving(key, value);
                    pawnsforRobo.push(key);
    
                    howManyCanIMove++;
    
                } else {
                    console.log("Nothing to move");
                }
            }
    
            if(howManyCanIMove > 0){
                console.log(pawnsforRobo)
                MakeAMove(pawnsforRobo[Math.floor(Math.random() * pawnsforRobo.length)], value);
            }
         }
         //If it is any other number only enable Moving for thos who are on board
         
         console.log("How many can i move "  + howManyCanIMove);
         if(howManyCanIMove != 0){
             console.log("You can spwan or move");
         } else {
            PlayAudio('failure');
            ChangePlayer();
            //  console.log("You canot spwan or move");
         }
     }, 1000);
}

const SpawnRobo = function(whom){
    StopAudio('audio-time_noti');
    PlayAudio('spawn');
    document.getElementById('rolldice').style.display = 'none';
 
    setTimeout(function(){
     console.log("SPAWN FOR ROBO WAS CALLED FOR " + whom);
     document.getElementById(whom).setAttribute('animation', {'property': 'position', 'to': pathId[0]});
     UpdatePlayerPosition(whom, 0, true);
    },200);
 
    setTimeout(function(){   MrRobot(RollDice());
    }, 1500);
 }

 //play again 

function WinnerIs(who){

    if(selectedMode === 2 ){
        UpdateWinner(2);
    }

    PlayAudio('audio-winner');
    document.getElementById('bottomui').className = "bottomui uidisappear";
    var winnerui = document.getElementById('winner-ui-you');
    document.getElementById('winnername').innerHTML = who;
    winnerui.className = "winnerui uiappear";
}


 function PlayAgain(){
    PlayAudio('audio-click');

    var winnerui = document.getElementById('winner-ui-you');
    var startui = document.getElementById('start-ui')

    winnerui.className = "winnerui uidisappear";
//     setTimeout(()=>{    startui.className = "middleui uiappear"
// }, 1000);
 var origin = window.location.origin;
 window.location.replace(origin);
 }

function PlayAudio(whatAudio){
    var audio = document.getElementById(whatAudio);
    audio.play();

}

function StopAudio(whatAudio){
    var audio = document.getElementById(whatAudio);
    audio.pause();
    audio.currentTime = 0;
}



 function CreateARoom(){
    document.getElementById("online-mode").className= "middleui uidisappear";
    CreateGameRoom();
    document.getElementById("create-room").className= "middleui uiappear";
 }

 function JoinARoom(position){
    console.log('Pis is ' + position);
    var username = GetUserName();

    if(typeof username === 'undefined' || username === ""){
        console.log("I CALLED TO DISPLAY LOGIN");
        document.getElementById("online-name-panel").className= "middleui uiappear";
    } else{
        JoinRoom(position);
    }

 }
function StartGame(){
    // allPlayers = 
    document.getElementById("create-room").className= "middleui uidisappear";
    document.getElementById("bottomui").className += " uiappear";
    document.getElementById('whoseturn').innerHTML = allPlayers[0];    

}


window.SetPlayers = function(players){
    allPlayers = players;
}

window.UpdateWhoAmI = function(who){
    whoAmI = who;
}

window.ShowDiceOG = function(value){
    var vsl = value
    DiceAnim(value).then(()=>{

        console.log('the value of async is' + vsl);
        console.log(vsl);
        ShowDice(vsl);
     });
}








WEBARSDK.SetStageReadyCallback(() =>{
    console.info('Stage is ready now!!!');
    document.getElementById('uiholder').style.display = "block";
 });



// function showUi(){
//     document.getElementById('uiholder').style.display = "block";

// }


// showUi();