import React, {useState} from 'react'
import Person from './person';
import Spinner from './spinner'
import img0 from '../../img/NightKing.jpg';
import img1 from '../../img/download.jpeg';
import Calendar from './cal';
import { Button } from 'react-bootstrap';

const Persons = ({items, isLoading}) => {
    let images = [img0, img1];
    const [calShow, setCalShow] = useState(false);
    const [per, setPer] = useState({});
    let wrapper = React.createRef();


    const onClickHandler = (index, person) => {
        setCalShow(true);
        setPer(person)
    }

    const homeHandler = () => {
        setCalShow(false);
    }
    
    let persons = items.map((person, index) => {
        
        return (
            <div>
                <Person
                    person={person} 
                    img={images[index]}
                    click={() => onClickHandler(index, person)}
                    key={person.id}
                    >
                </Person>
            </div>
        );
        
    });

    
    return isLoading ? (
            <Spinner/>
        ) : 
        (
            calShow ? (
                <div >
                    <Button variant="primary" style={{margin:"10px 20px"}} onClick={homeHandler}>Home</Button>
                    <Calendar ref={wrapper} className="calendar" person={per} key={per.id}></Calendar>
                </div>
            ) : (
                <div className="characterGrid">
                    {persons}
                </div>
            )
        
        )
}

export default Persons
