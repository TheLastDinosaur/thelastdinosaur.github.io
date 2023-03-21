
//  ONLINE PLAYER
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import {getAuth, signInAnonymously, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import {getFirestore, onSnapshot, query, where, collection, doc, getDocs, getDoc, addDoc, setDoc, updateDoc, serverTimestamp} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

let roomId;
let iJoined = false;



const firebaseConfig = {
    apiKey: "AIzaSyB48LJvzNYtER7BB_yuzWsengWD8vP_ue0",
    authDomain: "web-ar-games.firebaseapp.com",
    projectId: "web-ar-games",
    storageBucket: "web-ar-games.appspot.com",
    messagingSenderId: "727913391913",
    appId: "1:727913391913:web:69558364ff678a81af7938"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  let userId;
  let userName = getCookie('username');

  console.log("Cookiee is "+ document.cookie);
  console.log(getCookie('username'));

  //cookie parser
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          userId = uid;
          
          setDoc(doc(db, "ludoPlayers", uid), {
            name: userName,
          });
          // ...
        } else {
          // User is signed out
          // ...
          document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        userName = "";
        userId =  "";
        }
      });

    window.LoginUser = async()=>{
        var name = document.getElementById("username").value;

        signInAnonymously(auth).then(()=>{
            console.log("SIGNEDE IN");

            document.cookie = "username="+ name +"; expires=Thu, 31 Dec 2023 12:00:00 UTC; path=/";
            userName = getCookie('username');
        }).catch((error)=>{
            console.log(error.message);
            console.log("ER");
        });

            // document.getElementById("online-mode").className= "middleui disappear";
            document.getElementById("online-name-panel").className= "middleui uidisappear";

    }




    function isReady(val){
        if(val == true){
            return "Ready"
        } else  {
            return ""
        }

    }

window.CreateGameRoom = async()=>{
        
        const docRef = await addDoc(collection(db, "ludoRooms"), {
            available: true,
            gameOver: false,
            player1: {
                id: userId,
                name: userName,
                isReady: true,
                exit: false,
            },
            player2: {
                id: "",
                name: "",
                isReady: false,
                exit: false,
            },
            player3: {
                id: '',
                name: '',
                isReady: false,
                exit: false,
            },
            player4: {
                id: '',
                name: '',
                isReady: false,
                exit: false,
            },
            createdon: serverTimestamp(),
            move: {
                player: "",
                steps: "",
            },
            diceRoll: {
                roll: false,
                val: ''
            },
            spawn:{},
            kill:[],
            winner:"",
            whoseMove: 0
          });
          console.log("Document written with ID: ", docRef.id);

        roomId = docRef.id;

        const unsub = onSnapshot(doc(db, "ludoRooms", docRef.id), (doc) => {
            if(!doc.data()){

            } else {
            console.log("Current data from Create Roomm: ", doc.data());
            document.getElementById('roomplayers').innerHTML = '<div class="joinedplayer"><p>' + doc.data().player1.name + '</p><p>'+ isReady(doc.data().player1.isReady) +'</p></div>' + '<div class="joinedplayer"><p>' + doc.data().player2.name + '</p><p>'+ isReady(doc.data().player2.isReady) +'</p></div>' + '<div class="joinedplayer"><p>' + doc.data().player3.name + '</p><p>'+ isReady(doc.data().player3.isReady) +'</p></div>' + '<div class="joinedplayer"><p>' + doc.data().player4.name + '</p><p>'+ isReady(doc.data().player4.isReady) +'</p></div>'

            if(doc.data().player1.isReady && doc.data().player2.isReady &&doc.data().player3.isReady&&doc.data().player4.isReady ){
                document.getElementById('start-og').className  = "";
                document.getElementById('inv-but').className = "nodisp";

            }
            var roomData = doc.data();
            if(roomData.startGame == true){
                document.getElementById('rolldice').style.display = 'none';

                document.getElementById('whoseturn').innerHTML = allPlayers[0];
                currentPlayer = roomData.whoseMove;

                document.getElementById('dice-information').style.display="none";
                if(currentPlayer === whoAmI){
                    document.getElementById('rolldice').style.display = 'block';
                }else{
                    if(roomData.diceRoll.roll == true){
                        console.log("Dice Value is" + roomData.diceRoll.val);
                        ShowDiceOG(roomData.diceRoll.val);
                    }
                    
                    if(Object.keys(roomData.move).length === 0 && roomData.move.constructor === Object){
                        //move object is empty
                        console.log("MOVE IS EMPTY");
                    } else {
                        OGMOVE(roomData.move);
                    }

                    if(!roomData.kill.length){
                    } else {
                        OGKILL(roomData.kill);

                    }
                    console.log("Roomdata is " + roomData.gameOver)

                    if(roomData.gameOver){
                        console.log("called me is " + roomData.gameOver)

                        OGWINNER(roomData.winner);
                    }

                    if(Object.keys(roomData.spawn).length === 0 && roomData.spawn.constructor === Object){

                    }  else {

                        OGSPAWN(roomData.spawn);
                    }

                };



            }

            //IF GAME IS RUNNING : 

            }
        });
  
    }

window.StartOG = async()=>{

}

window.InviteFriends = async()=>{
    const queryString = window.location;
    console.log(queryString);
    const shareUrl = queryString + "?room=" +roomId + "&name="+userName;
    const data = {
        // title: "AR Ludo Fantasy Invitation",
        text: "Hey, Let's Play AR Ludo Fantasy online? Click the link to Join Me",
        url: shareUrl
    };
    try {
        console.log(data.url);
        if (!(navigator.canShare(data))) {
        throw new Error("Can't share data.", data);
        }
        await navigator.share(data);
    } catch (err) {
        console.error(err.name, err.message);
    }
}

window.GetUserName = ()=>{
    console.log("userName is  "+  userName)
    return userName;
}

window.JoinRoom = async(position)=>{
       

    console.log("Asked to Join Position by user" + userId + "for roomn" + roomId);


    const roomReference = doc(db, "ludoRooms", roomId);
    iJoined = true;
    console.log(iJoined);

    UpdateWhoAmI(position - 1);
    selectedMode = 2;
    if(position === 2){
        await updateDoc(roomReference, {
            player2: {id: userId,
            name: userName,
            isReady: true,
            exit: false,}
          });
          
    } else if(position === 3){
        await updateDoc(roomReference, {
            player3: {id: userId,
            name: userName,
            isReady: true,
            exit: false,}
          });
    } else {
        await updateDoc(roomReference, {
            player4: {id: userId,
            name: userName,
            isReady: true,
            exit: false,}
          });
    }

}

const isJoinRoom = function(){
    const queryString = window.location.search;
    console.log("join room is " + queryString);
    if(queryString === ""){
        document.getElementById('join-room').className = "middleui nodisp"
        document.getElementById('start-ui').className = "middleui uiappear"

    } else {
        const urlParams = new URLSearchParams(queryString);
        const room = urlParams.get('room');
        const roomName = urlParams.get('name') + "'s Room"
        console.log(room);
        document.getElementById('roomname').innerHTML = roomName;
        GetRoomForJoin(room);
        document.getElementById('join-room').className = "middleui uiappear";
    }
    
}

function GetRoomForJoin(room){
    roomId = room;
    const unsub = onSnapshot(doc(db, "ludoRooms", roomId), (doc) => {
        console.log(" IM RUNNING AGAIN");
       if(!doc.data()){
        document.getElementById('notava').className = '';
        document.getElementById('joinroombut').className = 'nodisp';
        console.log('No Data');
       } else {
        console.log("hass data");
        var roomData = doc.data();

        console.log("Current data: ", doc.data());
        if(roomData.available){
            document.getElementById('notava').className = 'nodisp';
            document.getElementById('joinroombut').className = '';
            // var playerholder = document.getElementById('joinroomplayers').innerHTML = '<div class="joinedplayer"><p>' + doc.data().player1.name + '</p><p>'+ isReady(doc.data().player1.isReady) +'</p></div>' + '<div class="joinedplayer"><p>' + doc.data().player2.name + '</p><p>'+ isReady(doc.data().player2.isReady) +'</p></div>' + '<div class="joinedplayer"><p>' + doc.data().player3.name + '</p><p>'+ isReady(doc.data().player3.isReady) +'</p></div>' + '<div class="joinedplayer"><p>' + doc.data().player4.name + '</p><p>'+ isReady(doc.data().player4.isReady) +'</p></div>'

            document.getElementById('p1').innerHTML = roomData.player1.name;
            document.getElementById('p1r').innerHTML = isReady(roomData.player1.isReady);
            console.log("I JOINED IS" + iJoined);
            if(iJoined == false){
                if(roomData.player2.isReady){
                    document.getElementById('p2h').className = "joinedplayer";
                    document.getElementById('p2').innerHTML = roomData.player2.name;
                    document.getElementById('p2r').innerHTML = isReady(roomData.player2.isReady);    
                    document.getElementById('p2hjoin').className = "nodisp";
    
                } else {
                    document.getElementById('p2h').className = "nodisp";
                    document.getElementById('p2hjoin').className = "joinedplayer";
    
                }
    
                if(roomData.player3.isReady){
                document.getElementById('p3h').className = "joinedplayer";
                document.getElementById('p3').innerHTML = roomData.player3.name;
                document.getElementById('p3r').innerHTML = isReady(roomData.player3.isReady);
                document.getElementById('p3hjoin').className = "nodisp";
    
                }else {
                    document.getElementById('p3h').className = "nodisp";
                    document.getElementById('p3hjoin').className = "joinedplayer";
    
                }
    
                if(roomData.player4.isReady){
                document.getElementById('p4h').className = "joinedplayer";
                document.getElementById('p4').innerHTML = roomData.player4.name;
                document.getElementById('p4r').innerHTML = isReady(roomData.player4.isReady);
                document.getElementById('p4hjoin').className = "nodisp";
    
                }else {
                    document.getElementById('p4h').className = "nodisp";
                    document.getElementById('p4hjoin').className = "joinedplayer";
    
                }
            } else {
                document.getElementById('p2h').className = "joinedplayer";
                document.getElementById('p2').innerHTML = roomData.player2.name;
                document.getElementById('p2r').innerHTML = isReady(roomData.player2.isReady);    
                document.getElementById('p2hjoin').className = "nodisp";
                document.getElementById('p3h').className = "joinedplayer";document.getElementById('p2h').className = "joinedplayer";
                document.getElementById('p3').innerHTML = roomData.player3.name;
                document.getElementById('p3r').innerHTML = isReady(roomData.player3.isReady);
                document.getElementById('p3hjoin').className = "nodisp";
                document.getElementById('p4h').className = "joinedplayer";
                document.getElementById('p4').innerHTML = roomData.player4.name;
                document.getElementById('p4r').innerHTML = isReady(roomData.player4.isReady);
                document.getElementById('p4hjoin').className = "nodisp";

            }

            if(roomData.startGame  == true){
                var players = [roomData.player1.name,roomData.player2.name,roomData.player3.name,roomData.player4.name];
                SetPlayers(players);
      
                currentPlayer = roomData.whoseMove;
                document.getElementById('join-room').className = 'middleui uidisappear';
                document.getElementById('rolldice').style.display = 'none';
                document.getElementById("bottomui").className += " uiappear";
                document.getElementById('whoseturn').innerHTML = allPlayers[0];    
    
                if(roomData.whoseMove === whoAmI){
                    document.getElementById('rolldice').style.display = 'block';
                    document.getElementById('dice-information').style.display="none";
                    document.getElementById('whoseturn').innerHTML = allPlayers[whoAmI];    
                } else{
                    document.getElementById('dice-information').style.display="none";
                    if(roomData.diceRoll.roll == true){
                        console.log("Dice Value is" + roomData.diceRoll.val);
                        ShowDiceOG(roomData.diceRoll.val);
                    }
                    
                    if(Object.keys(roomData.move).length === 0 && roomData.move.constructor === Object){
                        //move object is empty
                        console.log("MOVE IS EMPTY");
                    } else {
                        OGMOVE(roomData.move);
                    }

                    if(!roomData.kill.length){
                        
                    } else {

                        OGKILL(roomData.kill);
                    }
                    console.log("Roomdata is " + roomData.gameOver)

                    if(roomData.gameOver){
                        console.log("Called me is " + roomData.gameOver)
                        OGWINNER(roomData.winner);
                    }

                    if(Object.keys(roomData.spawn).length === 0 && roomData.spawn.constructor === Object){

                    }  else {

                        OGSPAWN(roomData.spawn);
                    }


                }

            
            }

        // if(doc.data().player1.isReady && doc.data().player2.isReady &&doc.data().player3.isReady&&doc.data().player4.isReady ){
        //     document.getElementById('start-og').className  = "";
        //     document.getElementById('inv-but').className = "nodisp";

        // }
        } else {
            document.getElementById('notava').className = '';
            document.getElementById('joinroombut').className = 'nodisp';
    
        }
       }

    },
    (error) => {
       console.log(error);
      });
}

isJoinRoom();

window.StartOG = async ()=>{

    const roomReference = doc(db, "ludoRooms", roomId);
    await updateDoc(roomReference, {
        startGame: true
      }).then(async()=>{
        //hide the panel
        document.getElementById("create-room").className = "middleui uidisappear";

        //set playerList
        const docSnap = await getDoc(roomReference);

        if (docSnap.exists()) {
          console.log("Document data from OG:", docSnap.data());
          var players = [docSnap.data().player1.name,docSnap.data().player2.name,docSnap.data().player3.name,docSnap.data().player4.name];
          SetPlayers(players);

        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }        //Enable Game UI
        document.getElementById("bottomui").className += " uiappear";
        document.getElementById('whoseturn').innerHTML = allPlayers[0];    

      });

}

window.UpdateMove = async function(whom, steps, pawnId, pathId){

    const roomReference = doc(db, "ludoRooms", roomId);

    await updateDoc(roomReference, {
        move: {
            player: whom,
            steps: steps,
        },
        spawn: {},
        kill: []
      })
    
}

window.UpdateSpawn = async function(whom, toPos){

    const roomReference = doc(db, "ludoRooms", roomId);

    await updateDoc(roomReference, {
        spawn: {whom:whom, where: toPos},
        move: {},
        kill: []
      })

}

window.UpdateDice = async function(value){
    const roomReference = doc(db, "ludoRooms", roomId);
    await updateDoc(roomReference, {
        diceRoll: {
            roll: true,
            val: value
        },
        move: {},
        spawn: {},
        kill: []
      })
}

window.KillOG = async function(totalKills){
    const roomReference = doc(db, "ludoRooms", roomId);
    await updateDoc(roomReference, {
        kill: totalKills,
        diceRoll: {
            roll: false,
        },
        move:{},
        spawn: {}
      })
}

window.UpdateWinner = async function(who){
    const roomReference = doc(db, "ludoRooms", roomId);
    await updateDoc(roomReference, {
        winner: who,
        gameOver: true,
        kill: [],
        move: {},
        diceRoll: {
            roll: false
        },
        spawn: {},
      });
}

window.UpdatePlayer = async function(who){
    const roomReference = doc(db, "ludoRooms", roomId);
    await updateDoc(roomReference, {
        kill: [],
        move: {},
        diceRoll: {
            roll: false
        },
        whoseMove: who,
        spawn: {},
        

    })
}



function OGMOVE(moveData){
    var steps = moveData.steps;
    var whom = moveData.player;

    switch(currentPlayer) {
        case 0: pawnId = redOnBoard, pathId = redPath; break;
        case 1: pawnId = greenOnBoard, pathId = greenPath; break;
        case 2: pawnId = yellowOnBoard, pathId = yellowPath; break;
        case 3: pawnId = blueOnBoard, pathId = bluePath; break;
        default : pawnId = redOnBoard, pathId = redPath;
    }
    //Move pawn of the remote player to the position 
    for(i=0; i < steps; i++){
        setTimeout(function timer() {
            var currentPos = pawnId[whom].position;
            currentPos++;
            var whoisMoving = document.getElementById(whom);
            PlayAudio('audio-move');
            whoisMoving.setAttribute('animation', {'property': 'position', 'to': pathId[currentPos]});
            pawnId[whom].position = currentPos;
          }, i * 1000);   
     }

}

function OGKILL(killData){
    
    //Kill all the pawns in killData array

    console.log(killData);
    PlayAudio('audio-die');

    killData.forEach(killme => {
        if(killme.match(/red/)){
            redOnBoard[killme].position = 0;
            redOnBoard[killme].onBoard = false;
            document.getElementById(killme).setAttribute("animation", {'property': 'position', 'to': redOnBoard[killme].initPos});
        } else if(killme.match(/green/)){
            greenOnBoard[killme].position = 0;
            greenOnBoard[killme].onBoard = false;
            document.getElementById(killme).setAttribute("animation", {'property': 'position', 'to': greenOnBoard[killme].initPos});

        } else if(killme.match(/yellow/)){
            yellowOnBoard[killme].position = 0;
            yellowOnBoard[killme].onBoard = false;
            document.getElementById(killme).setAttribute("animation", {'property': 'position', 'to': yellowOnBoard[killme].initPos});

        } else if(killme.match(/blue/)){
            blueOnBoard[killme].position = 0;
            blueOnBoard[killme].onBoard = false;
            document.getElementById(killme).setAttribute("animation", {'property': 'position', 'to': blueOnBoard[killme].initPos});

        }
    });
}

function OGWINNER(winner){
    console.log('INsIDE OGWINNER, CAlling WinnerIs');
    //winner ui based onn winner and if i am the winner.
    WinnerIs(allPlayers[winner]);
}

function  OGSPAWN(spawnData){

    console.log(spawnData.whom);
    console.log(spawnData.where);

    switch(currentPlayer) {
        case 0: pawnId = redOnBoard, pathId = redPath; break;
        case 1: pawnId = greenOnBoard, pathId = greenPath; break;
        case 2: pawnId = yellowOnBoard, pathId = yellowPath; break;
        case 3: pawnId = blueOnBoard, pathId = bluePath; break;
        default : pawnId = redOnBoard, pathId = redPath;
    }


    document.getElementById(spawnData.whom).setAttribute('animation', {'property': 'position', 'to': spawnData.where});
    PlayAudio('spawn');
    pawnId[spawnData.whom].position = 0;
    pawnId[spawnData.whom].onBoard = true;


}