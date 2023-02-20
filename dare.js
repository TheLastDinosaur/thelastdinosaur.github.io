 // Start Game
 var pawnsforRobo = [];
 var gameManager = document.getElementById('game-manager');
 var numberOfPlayers = 2;
 var whoAmI;
 var canIplay = false;
 var canIMove = false;
 var canPlayAgain = false;
 var gameOver = false;
//  var reachedHome = 0;
 var whenWasLastSix = 0;
 var gameTimer;
 var timeLimit = 30;
 var missedChance = 0;
 var countdownTimer;
 var currentPlayer = 0;
 var whoIsPlaying;
 var totalPlayers = ["player-1", "Green's Turn", "Yellow's Turn", "Blue's Turn" ];
 var redOnBoard = {redPawn1:{position: 0, onBoard: false, reachedHome: false, initPos:"-3.5 0.25 5.5"}, redPawn2:{position: 0, onBoard: false, reachedHome: false, initPos:"-3.5 0.25 3.5"}, redPawn3:{position: 0, onBoard: false, reachedHome: false, initPos:"-5.5 0.25 5.5"}, redPawn4:{position: 0, onBoard: false, reachedHome: false, initPos:"-5.5 0.25 3.5"}};
 var greenOnBoard = {greenPawn1:{position: 0, onBoard: false, reachedHome: false, initPos:"-5.5 0.25 -3.5"}, greenPawn2:{position: 0, onBoard: false, reachedHome: false, initPos:"-3.5 0.25 -3.5"}, greenPawn3:{position: 0, onBoard: false, reachedHome: false, initPos:"-3.5 0.25 -5"}, greenPawn4:{position: 0, onBoard: false, reachedHome: false, initPos:"-5.5 0.25 -5"}};
 var yellowOnBoard = {yellowPawn1:{position: 0, onBoard: false, reachedHome: false, initPos:"3.5 0.25 -3.5"}, yellowPawn2:{position: 0, onBoard: false, reachedHome: false, initPos:"5.5 0.25 -3.5"}, yellowPawn3:{position: 0, onBoard: false, reachedHome: false, initPos:"5.5 0.25 -5.5"}, yellowPawn4:{position: 0, onBoard: false, reachedHome: false, initPos:"3.5 0.25 -5.5"}};
 var blueOnBoard = {bluePawn1:{position: 0, onBoard: false, reachedHome: false, initPos:"5.5 0.25 3.5"}, bluePawn2:{position: 0, onBoard: false, reachedHome: false, initPos:"3.5 0.25 3.5"}, bluePawn3:{position: 0, onBoard: false, reachedHome: false, initPos:"3.5 0.25 5.5"}, bluePawn4:{position: 0, onBoard: false, reachedHome: false, initPos:"5.5 0.25 5.5"}};
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

// UI PANELS
var mainUi = document.getElementById('main_ui');
var startUi = document.getElementById('menu_start');
var modeUi = document.getElementById('menu_mode');
var ingameUi = document.getElementById('ingame_ui');
var yourTurnUi = document.getElementById('your_turn');
var oppTurnUi = document.getElementById('opponents_turn');
var oppText = document.getElementById("opponent_text");

var diceUi = document.getElementById('dice_info');
var diceValueUi = document.getElementById('dice_value');

var victortUi = document.getElementById("victory_ui");
var victoryText = document.getElementById("victorytext");

var gameBoard = document.getElementById('board');

gameManager.addEventListener('spawned', function(){
    diceUi.setAttribute("visible", false);
    RemoveTrigger();
    var allPlayers = document.querySelectorAll(".rayclick");

    for(i =0; i < allPlayers.length; i++){
        allPlayers[i].removeAttribute('enable-click');
        console.log(allPlayers[i]);
    }
    AnotherChance();
    console.log("PLaye has spawned the coinn");
 })

 const ChooseMode = function(){
    startUi.setAttribute("visible", false);
    
    victortUi.setAttribute("visible", false);
    mainUi.setAttribute("visible", true);
    modeUi.setAttribute("visible", true);
 }

 const StartGame  = function (numberOfPlayers){
    gameBoard.setAttribute("visible", true);
    startUi.setAttribute("visible", false);
    modeUi.setAttribute("visible", false);
    mainUi.setAttribute("visible", false);
    ingameUi.setAttribute("visible", true);


     //Create game scene with the number of players.
     //Assign First Player
     whoAmI = 0;
     currentPlayer = 0;
     whoIsPlaying = totalPlayers[currentPlayer];
     document.getElementById(whoIsPlaying).setAttribute("mixin", "highlight-me");

     //Wait few seconds to start playing
     //Call firt players dice roll.
     console.log(redPath.length);
     if(whoAmI == currentPlayer){
        YourTurn();
     };
    //  MrRobot();
 }

 const YourTurn = function(){
    yourTurnUi.setAttribute("visible", true);
 }

 //Timer Function
const GameTimer = function(){
     //Reset the interval
     clearInterval(countdownTimer);
     //SetThe Timer to default timelimit
     gameTimer = timeLimit;     
     //start timer count downs
     countdownTimer = setInterval(function(){
         //Output the timer
         console.log(gameTimer);
         // If time runs out do the logic here
         if(gameTimer == 0){
             clearInterval(countdownTimer);
             alert('Time is up!');
         }
         // reduce seconds from gameTimer each secondss
         gameTimer--;
     }, 1000);
 }

 //Roll the Dice
 const RollDice = function(){
    var randomNumber;
     //Set a random dice number
     if(whenWasLastSix >=6){
        randomNumber = 6;
        whenWasLastSix = 0;
     } else {
         randomNumber = Math.floor(Math.random() * 6) + 1;
     }
     
     if(randomNumber != 6){
        whenWasLastSix++;
     }
    
     ShowDice(randomNumber);
     
     return randomNumber;
     

 }

 const ShowDice= function(value){
    ingameUi.setAttribute("visible", true);
    console.log("SHOW DICE CALLED WITH " + value);
    diceValueUi.setAttribute("material", {"src": "#dice"+value});
    diceUi.setAttribute("visible", true);
 }

 //Change curret player
 const ChangePlayer = function(){
    diceUi.setAttribute("visible", false);

     if(currentPlayer < totalPlayers.length -1){
         currentPlayer++;
         if(currentPlayer == 0){
            
         } else {
            MrRobot();
         }
     } else {
         currentPlayer = 0;
         AnotherChance();
     }
     whoIsPlaying = totalPlayers[currentPlayer];
     console.log(currentPlayer);
     console.log(whoIsPlaying);
 }

 const PlayCheck = function(){
     
     if(whoAmI == currentPlayer){
         return true;
     } else {
         return false;
     }
 }

 const RemoveTrigger = function (){
    console.log("CALLED TO REMOVE TRIGGER");
    var allPlayers = document.querySelectorAll(".rayclick");

    for(i =0; i < allPlayers.length; i++){
        allPlayers[i].removeAttribute('enable-moving');
        allPlayers[i].removeAttribute('animation');
        allPlayers[i].setAttribute("scale", "1 1 1");
        console.log(allPlayers[i]);
    }
 }
 const MakeAMove = function(whom, steps){
    RemoveTrigger();
    diceUi.setAttribute("visible", false);
     for(i=0; i < steps; i++){
        setTimeout(function timer() {
            console.log(i);
            var currentPos = pawnId[whom].position;
            console.log(currentPos);
            currentPos++;
            console.log(currentPos);
            var whoisMoving = document.getElementById(whom);
            whoisMoving.setAttribute('animation', {'property': 'position', 'to': pathId[currentPos]});
            pawnId[whom].position = currentPos;
            console.log(pathId[currentPos]);
          }, i * 1000);   
     }
     
     setTimeout(function(){
        CheckForKill(whom);
     }, 1200 * steps);

     if(steps >=6){
        canPlayAgain = true;
     }
    //  ChangePlayer();
 }


 const EnableSpawning = function(whomToMove){
     //Enable player to move.
     var whoisMoving = document.getElementById(whomToMove);
     whoisMoving.setAttribute('enable-click', {"event": "click", 'towhere': pathId[0], 'message': whomToMove, 'steps': 1});
    whoisMoving.setAttribute('animation',{"property": "scale", "to": "1.2 2 1.2", "dur": "1000", "dir": "alternate",  "loop": "true"});

     console.log("Can spawn " );
 }

 const EnableMoving = function(whom, where){
    var whoisMoving = document.getElementById(whom);
    whoisMoving.setAttribute('enable-moving', {"event": "click", "steps": where });
    whoisMoving.setAttribute('animation',{"property": "scale", "to": "1.2 2 1.2", "dur": "1000", "dir": "alternate",  "loop": "true"});

 }

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
     // console.log(pawnId);
     //Check dice nnumber, if it is 6 Check  check spawning and moving
     if(value == 6) {
        for(const key in pawnId){
            // pawnsforRobo.push(key);
            // console.log(key);
            // console.log(pawnId[key].position);
            // console.log(pawnId[key].onBoard);
            // Enable Spawning if the pawn is not in play yet
            if(pawnId[key].onBoard == false){
                EnableSpawning(key);
                howManyCanIMove++;
            } else if(pawnId[key].onBoard == true && pawnId[key].position <= 50){
                console.log(key + " Can be moved");
                console.log(pawnId[key].position);
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
        setTimeout(function(){
            ChangePlayer();
        },1000)
        //  console.log("You canot spwan or move");
     }
 }

 const LudoBrain = function(){
    canPlayAgain = false;
    document.getElementById(whoIsPlaying).removeAttribute("mixin");
    ingameUi.setAttribute("visible", true);
    yourTurnUi.setAttribute("visible", false);
     var currentDice;
     canIplay = PlayCheck();
     console.log(canIplay);
     if(canIplay){
         currentDice = RollDice();
         SpawnOrMove(currentDice);
     } else {
         console.log("You can not play");
     }

 }

const UpdatePlayerPosition = function (playerId, position, isOnBoard){
    pawnId[playerId].position = position;
    pawnId[playerId].onBoard = isOnBoard;
    console.log("Called " + playerId + " to update position to " + position);
}


//Check if player can kill other players
const CheckForKill = function (killer){
    console.log("Called to check For Kill for " + killer);
    var killersPos = document.getElementById([killer]).getAttribute("position");
    var killersD = pawnId[killer].position;
    console.log("KILLERRS POS");
    console.log(killersPos);

    if(killersD == 56){
        console.log("YOU REACHED HOME");
        canPlayAgain = true;
        ReachedHome(killer);
    } else {
        if(currentPlayer == 0){
            checkEnemyPosition(greenOnBoard, killersPos);
            checkEnemyPosition(yellowOnBoard, killersPos);
            checkEnemyPosition(blueOnBoard, killersPos);
        }  else if(currentPlayer == 1){
            checkEnemyPosition(redOnBoard, killersPos);
            checkEnemyPosition(yellowOnBoard, killersPos);
            checkEnemyPosition(blueOnBoard, killersPos);
        } else if(currentPlayer == 2){
            checkEnemyPosition(greenOnBoard, killersPos);
            checkEnemyPosition(redOnBoard, killersPos);
            checkEnemyPosition(blueOnBoard, killersPos);
        } else if(currentPlayer == 3){
            checkEnemyPosition(greenOnBoard, killersPos);
            checkEnemyPosition(yellowOnBoard, killersPos);
            checkEnemyPosition(redOnBoard, killersPos);
        }
    };

    if(!canPlayAgain && !gameOver){
        ChangePlayer();
    } else if(!canPlayAgain && gameOver){
        WonGame();
    }
    else{
        if(currentPlayer == 0){
        AnotherChance();
        } else {
            MrRobot();
        }
    }
    // if current playe is red
    
}

const checkEnemyPosition = function(enemies, pos){
    var value = false
    console.log(enemies);
    for (key in enemies){
        var enemeyPos = document.getElementById(key).getAttribute("position");
        console.log(enemeyPos);
        console.log(Math.round(enemeyPos.x))
        console.log(Math.round(enemeyPos.y))
        console.log(Math.round(enemeyPos.z))
        if(enemeyPos.x == pos.x && enemeyPos.y==pos.y && enemeyPos.z == pos.z){
            console.log(key);
            document.getElementById(key).setAttribute("animation", {'property': 'position', 'to': "0 2 0"});
            document.getElementById(key).setAttribute("animation", {'property': 'position', 'to': enemies[key].initPos});
            enemies[key].position = 0;
            enemies[key].onBoard = false;
            // KillTheEnemy(enemies);
            canPlayAgain = true;
        }
    }
    
}

const KillTheEnemy = function(enemies){
    console.log("Enemies  " + enemies);
    console.log(enemies);
    // document.getElementById(enemies).setAttribute("animation", {'property': 'position', 'to': "0 0 0"});
    console.log("KIlled the enemey of" + enemies + "Player"  + enemy);
    AnotherChance();
}

const AnotherChance = function (){
    yourTurnUi.setAttribute("visible", true);
}

const ReachedHome = function(who){
    pawnId[who].reachedHome = true;
    var howManyWin = 0;
    for(key in pawnId){
        if(pawnId[key].reachedHome == true){
            howManyWin++;
        }
    }
    console.log("How Many Win" + howManyWin);
    if(howManyWin == 4){
        canPlayAgain = false;
        gameOver = true;
    } else {
        AnotherChance();
    }
    console.log("congratulations you reached home");
}

const WonGame = function(){
    var whoWon;
    switch(currentPlayer) {
         case 0: whoWon = "You Win"; break;
         case 1: whoWon = "Win for Green"; break;
         case 2: whoWon = "Win for Yellow"; break;
         case 3: whoWon = "Win for Blue"; break;
         default : whoWon = "You Win";
     }

     victoryText.setAttribute("value", whoWon);
     victortUi.setAttribute("visible", true);

     console.log(whoWon);

}


// MR Robot
const MrRobot = function(){
    console.log("Called Roboto");
    canPlayAgain = false;
    yourTurnUi.setAttribute("visible", false);

    if(currentPlayer == 0){

    } else {
        oppText.setAttribute("value", whoIsPlaying);
        oppTurnUi.setAttribute("visible", true);
    }
    
     var currentDice;

    setTimeout(function(){
        oppTurnUi.setAttribute("visible", false);
        currentDice = RollDice();
        console.log("Dice is at " + currentDice);
        // ShowDice(currentDice);
       setTimeout(function(){ SpawnOrMoveRobo(currentDice);}, 1000)
         if(currentDice == 6){
        
         } else {
            // MakeAMove()
         }
         }, 1000)
     
}

const SpawnOrMoveRobo = function(value){

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
            MoveRobo(pawnsforRobo[Math.floor(Math.random() * pawnsforRobo.length)], value);
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
            MoveRobo(pawnsforRobo[Math.floor(Math.random() * pawnsforRobo.length)], value);
        }
     }
     //If it is any other number only enable Moving for thos who are on board
     
     console.log("How many can i move "  + howManyCanIMove);
     if(howManyCanIMove != 0){
         console.log("You can spwan or move");
     } else {
        ChangePlayer();
        //  console.log("You canot spwan or move");
     }
}

const SpawnRobo = function(whom){
   oppTurnUi.setAttribute("visible", false);
   diceUi.setAttribute("visible", false);

   setTimeout(function(){
    console.log("SPAWN FOR ROBO WAS CALLED FOR " + whom);
    document.getElementById(whom).setAttribute('animation', {'property': 'position', 'to': pathId[0]});
    UpdatePlayerPosition(whom, 0, true);
   },1000);

   setTimeout(function(){   MrRobot();
   }, 1000);
}

const MoveRobo = function(whom, steps){
    console.log(whom + " Moce to " + steps);
    diceUi.setAttribute("visible", false);
    for(i=0; i < steps; i++){
       setTimeout(function timer() {
           console.log(i);
           var currentPos = pawnId[whom].position;
           console.log(currentPos);
           currentPos++;
           var whoisMoving = document.getElementById(whom);
           whoisMoving.setAttribute('animation', {'property': 'position', 'to': pathId[currentPos]});
           pawnId[whom].position = currentPos;
           console.log(pathId[currentPos]);
         }, i * 1000);   
    }

    if(steps==6){
        canPlayAgain = true;
        
    }
    setTimeout(function(){
       CheckForKill(whom);
    }, 1200 * steps);
   //  ChangePlayer();

}


const MoveRobote = function(whom, steps){
    console.log(whom + " Moce to " + steps);
    diceUi.setAttribute("visible", false);
    for(i=0; i < steps; i++){
       setTimeout(function timer() {
           console.log(i);
           var currentPos = pawnId[whom].position;
           console.log(currentPos);
           currentPos++;
           var whoisMoving = document.getElementById(whom);
           whoisMoving.setAttribute('animation', {'property': 'position', 'to': pathId[currentPos]});
           pawnId[whom].position = currentPos;
           console.log(pathId[currentPos]);
         }, i * 1000);   
    }

    if(steps==6){
        canPlayAgain = true;
        
    }

   //  ChangePlayer();

  

}