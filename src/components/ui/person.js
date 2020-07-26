import React from 'react'

const person = ({person, img, click}) => {

    return (
        <div className="card" onClick={click}>
            <div className="cardBody">
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={img} alt="Paris" />
                        </div>
                        <div className="flip-box-back">
                            <h2>{person.name}</h2>
                            <ul>
                                <li>
                                   <strong>Name : </strong> {person.real_name}
                                </li>
                                <li>
                                   <strong> Birthday : </strong> "02/10/1996"
                                </li>
                                <li>
                                   <strong> Company : </strong> "GOT"
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default person
