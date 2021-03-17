import React from 'react';
import './VillagerCard.css';

const VillagerCard = ({villager, name, notFound}) => {
    if (notFound == false && villager != ''){
    return( 
        <div className="card mt-3">
            <div className="card-header">
                <img className="round" alt={villager.description} src={villager.image} />
            </div>
            <div className="card-body">
                <h1> {name} <span><img className="icon" alt={villager.description} src={villager.icon} /> </span></h1>
                <p className="p-label"> Species <span>{villager.species}</span></p>
                <hr/>
                <p className="p-label"> Personality Type <span>{villager.personality}</span></p>
                <hr/>
                <p className="p-label">Birthday <span>{villager.birthday}</span></p>
                <hr/>
                <p className="p-label">Saying <span>{villager.saying}</span></p>
                <hr/>
                <p className="p-label">Description</p>
                <p className="description"> {villager.description} </p>
            </div>
        </div>
    )
    } else if (villager == '' && notFound == false) {
        return (
            <div className="card mt-3">
                <div className="card-header">
                    <img className="round" alt="Isabelle" src="https://www.kotaku.com.au/content/uploads/sites/3/2020/03/isabelle-animal-crossing-new-horizons.jpg" />
                </div>
                <div className="card-body">
                    <h1>Search for any ACNH villager!</h1>
                </div>
            </div>
        )
    } 
        return (
            <div className="card mt-3">
                <div className="card-header">
                    <img className="round" alt="Question Mark" src="https://pbs.twimg.com/media/EQGQAq0XsAAIPjB.jpg:large" />
                </div>
                <div className="card-body">
                    <h1> Uh oh! This villager was not found.</h1>
                </div>
            </div>
        )
}

export default VillagerCard