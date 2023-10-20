const firebaseConfig = {
    apiKey: "AIzaSyAh_qA3JHfEH2iUJbD2K4rQSjh6xfK_a30",
    authDomain: "gs://contador-3a25c.appspot.com",
    projectId: "contador-3a25c",
    storageBucket: "https://contador-3a25c-default-rtdb.firebaseio.com/",
    //messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "gs://contador-3a25c.appspot.com"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
let counterValue = 0

const counterElement = document.getElementById("counter")
const btnIncrementar = document.getElementById("increment")
const btnDecrementar = document.getElementById("decrement")
const btnResetear = document.getElementById("reset")

const counterRef = database.ref('counter');

counterRef.on('value', (snapshot) => {
    counterValue = snapshot.val();
    counterElement.textContent = counterValue;
});

btnIncrementar.onclick = function(){
    counterValue++;
    counterRef.set(counterValue);
}

btnDecrementar.onclick = function(){
    counterValue--;
    counterRef.set(counterValue);
}

btnResetear.onclick = function(){
    counterValue = 0;
    counterRef.set(counterValue);
}
