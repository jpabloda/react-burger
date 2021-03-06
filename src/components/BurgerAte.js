import React, { useEffect } from 'react';
import "./Burgerapp.css";
import firebase from "firebase";
import db from '../firebase'


const BurgerAte = ({db, burgerList, ateBurger}) => {

    return(
        < div className="burger">
        <h2>Burgers Ate</h2>
        <ul>
            {burgerList.map(
                burger => {if (burger.ate){
                    return <>
                    <li>
                    <span className="itemSpan">
                    {burger.name}
                    </span>
                    <button 
                    className="taste2"
                    onClick={ateBurger.bind(this, burger.id)}>
                     Delicious 
                    </button>
                    </li>
                    </>
                }} 
            )}
        </ul>
        </ div>
    )
}

export default BurgerAte;
