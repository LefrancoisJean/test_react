import React from 'react'
import './css/Modal.css'

export default function Modal(props) {
    return (
        <div 
        className="Modal"
        style={{
            transform: props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: props.visible ? '1' : '0'
        }}
        >
            <button onClick={props.cache}>x</button>
            <p>
            Mesdames, messieurs, la situation d'exclusion que certains d'entre vous connaissent soustrait toute vision globale d'une valorisation sans concession de nos caractères spécifiques.

J'ai depuis longtemps (ai-je besoin de vous le rappeler ?), défendu l'idée que la prise de conscience de nos dirigeants interpelle le citoyen que je suis et nous oblige tous à aller de l'avant dans la voie d'un programme plus humain, plus fraternel et plus juste.

Je reste fondamentalement persuadé que la volonté farouche de sortir notre pays de la crise doit nous amener au choix réellement impératif d'un avenir s'orientant vers plus de progrès et plus de justice.
            </p>
        </div>
    )
}
