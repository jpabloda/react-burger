import React, {  useState } from 'react';
import "./Burgerapp.css";

const BurgerApp = ({db, burgerList, makeBurger, eatBurger}) => {

  const [name, setName] = useState("");

  const onChange = (e) => setName(e.target.value);

    const addTask = (e) => {
        e.preventDefault();
        makeBurger(name);
        setName("");
    };

    return(
      <div className="burger">
        <h2>Place Burger Order</h2>
            <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={onChange}
            />
            <button
            onClick={addTask}
            className="add-btn">
              Submit
           </button>
        <ul >
            {burgerList.map(
                burger => {if (!burger.ate){
                    return <>
                    <li>
                    <span >{burger.name}</span>
                    <button 
                    className="taste" 
                    onClick={eatBurger.bind(this, burger.id)}> Taste It! 
                    </button></li></>
                }} 
            )}
        </ul>
        </div>
    )
}

export default BurgerApp;









// import React, { useState, useEffect } from "react";
// import "./Burgerapp.css";
// import firebase from "firebase";
// import db from "../firebase";

// function BurgerApp() {
//   const [task, setTask] = useState("");
//   const [tasklist, setTaskList] = useState([]);

//   useEffect(() => {
//     populate();
//   }, []);

//   const populate = (data) => {
//     setTaskList([]);
//     return firebase
//       .firestore()
//       .collection("Burgers")
//       .get()
//       .then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//           let newData = doc.data();
//           console.log(newData);
//           if (tasklist.indexOf(newData.id) === -1) {
//             setTaskList((arr) => {
//               return [...arr, newData];
//             });
//           } else {
//             console.log("this is a duplicate");
//           }
//           console.log("here are all of the Burgers", tasklist);
//         });
//       })
//       .catch((e) => console.log(e));
//   };

//   const handleChange = (e) => {
//     setTask(e.target.value);
//   };

//   const AddTask = () => {
//     if (task !== "") {
    
//       // FIREBASE

//       const datas = {
//         id: firebase
//           .firestore()
//           .collection("Burgers")
//           .doc().id,
//       };

//       const db = firebase.firestore();
//       db.collection("Burgers")
//         .doc(datas.id)
//         .set({ id: datas.id, value: task, isCompleted: false })
//         .then(() => {
//           populate();
//         });
      
//     }
//   };

//   const deletetask = (e, id) => {
//     e.preventDefault();
//     setTaskList(tasklist.filter((t) => t.id != id));
//     console.log(id);

//     // DELETE

//       db.collection("Burgers")
//         .doc(id)
//         .delete()
//         .catch((error) => {
//           console.error(id, "Error removing document");
//         })   
//   };

//   const taskCompleted = (e, id) => {
//     e.preventDefault();
//     //let's find index of element
//     const element = tasklist.findIndex((elem) => elem.id == id);

//     //copy array into new variable
//     const newTaskList = [...tasklist];

//     //edit our element
//     newTaskList[element] = {
//       ...newTaskList[element],
//       isCompleted: true,
//     };

//     setTaskList(newTaskList);
//   };

//   return (
//     <div className="burger">
//       <input
//         type="text"
//         name="text"
//         id="text"
//         onChange={(e) => handleChange(e)}
//         placeholder="Add Burger Type"
//       />
//       <button className="add-btn" onClick={AddTask}>
//         Order
//       </button>
//       <br />
//       {tasklist !== [] ? (
//         <ul>
//           {tasklist.map((t) => (
//             <li className={t.isCompleted ? "crossText" : "listitem"}>
//               {t.value}
//               <button
//                 className="completed"
//                 onClick={(e) => taskCompleted(e, t.id)}
//               >
//                 Completed
//               </button>

//               <button className="delete" onClick={(e) => deletetask(e, t.id)}>
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       ) : null}
//     </div>
//   );
// }

// export default BurgerApp;