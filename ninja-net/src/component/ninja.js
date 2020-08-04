import React from 'react'
import '../ninja.css'

const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.map(({name,age,belt,id})  => {
        return (age > 10 ) ?(
            <div className="ninja" key={id}>
                <div>Name: {name} </div>
                <div>Age: {age} </div>
                <div>Belt: {belt} </div>
                <div>Id: {id} </div>
                <button onClick={() => deleteNinja(id) }>Delete</button>
                <p> </p>
            </div>
        ) :null
    })
    return(
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}

export default Ninjas