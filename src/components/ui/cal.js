import React, {useState} from 'react';
import Calendar from 'rc-year-calendar';
import { Modal } from 'react-bootstrap';

function Cal({ person})  {

    const [currentEvent, setCurrentEvent] = useState({
        "startDate" : "",
        "endDate": ""
    });
    const [show, setShow] = useState(false);
    let wrapper = React.createRef();

    console.log('persons is', person);
    let activityPeriod = person.activity_periods;
    let dataSource = [];
    for(let activity of activityPeriod) {
        let obj = {};
        let startTime = activity.start_time;
        let endTime = activity.end_time;

        obj['id'] = person.id;
        obj['name'] = person.real_name;
        obj['startDate'] = new Date(startTime.split(':')[0]);
        obj['endDate'] = new Date(endTime.split(':')[0]);

        dataSource.push(obj);
    }

    const setCurrentEventHandler = (currentEvent) => {
        setCurrentEvent(currentEvent);

        if(currentEvent != null) {
            setShow(true);
        }else {
            setShow(false);
        }
    };

    return (
        <div>
            <Calendar
                enableRangeSelection={true}
                enableContextMenu={true}
                
                onRangeSelected={e =>  setCurrentEventHandler( { startDate: e.startDate.toString(), endDate: e.endDate.toString() } )} 
                dataSource={dataSource}
                ref={wrapper}
            />

            <Modal show={show} onHide={() => setCurrentEventHandler(null)}>
            {show && (
                <div>
                    <Modal.Header closeButton>
                        <Modal.Title>{ "Activity Of The Day"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <ul>
                                <li>
                                    {currentEvent.startDate} - {currentEvent.endDate}) 
                                </li>
                            </ul>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                    
                    </Modal.Footer>
                </div>
                )}
            </Modal>
        </div>
    );
}

export default Cal;
  