import React, { useState, useEffect } from 'react';
import BurgerApp from './components/BurgerApp';
import BurgerAte from './components/BurgerAte';
import './App.css';
import firebase from "firebase";
import db from './firebase';

function App() {

  const [burgerList, setBurgerList] = useState ([]);

  useEffect(() => {
    renderList()
  }, []);

  const ateBurger = (id) => {
         firebase.firestore().collection("Burgers")
            .doc(id)
            .delete()
            .then(() => {
              renderList();
            })
    }

    const makeBurger = (name) => {
        let BurgersArray = []
        const data = {
          id: firebase
              .firestore()
              .collection("Burgers")
              .doc().id,
          };

        const db = firebase.firestore();
            db.collection("Burgers")
            .doc(data.id)
            .set({ name: name, ate: false, id: data.id })
            .then(() => {
              renderList()
            })

            // console.log(name)
    }

    const eatBurger = (id) => {
        const db = firebase.firestore();
         db.collection("Burgers")
            .doc(id)
            .update({ ate: true })
            .then(() => {
              renderList();
            })
    }

    const renderList = () => {
      let BurgersArray = []
      db.collection("Burgers")
        .get()
        .then(function(fbData) {        
          fbData.forEach(function(doc) {
            let newData = { 
              name: doc.data().name,
              ate: doc.data().ate,
              id: doc.id 
            };
            BurgersArray.push(newData)
          })
          setBurgerList(BurgersArray);
        })
    }

    const wrapper={
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    }

  return (
    <div className="App" style={wrapper}>
      <h1 className="title">Let's Make Some Burgers</h1>
      <header className="App-header">
        <BurgerApp 
        firebase={db} 
        burgerList={burgerList} 
        makeBurger={makeBurger} 
        eatBurger={eatBurger}
        />
        <BurgerAte 
        firebase={db} 
        burgerList={burgerList} 
        ateBurger={ateBurger}
        />
      </header>
    </div>
  );

  
}

export default App;




















// import React from "react";
// import './App.css';
// import BurgerApp from "./components/BurgerApp";

// function App() {
//   return (
//     <div className="App">
//     <span className="title">Let's Make Some Burgers</span> <br />
//     <BurgerApp />
//     </div>
//   );
// }

// export default App;
