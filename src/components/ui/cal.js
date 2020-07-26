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
    let dateTimeMap = {};
    let activityPeriod = person.activity_periods;
    let dataSource = [];
    for(let activity of activityPeriod) {
        let obj = {};
        let startTime = activity.start_time;
        let endTime = activity.end_time;

        obj['id'] = person.id;
        obj['name'] = person.real_name;

        let startDateArr = startTime.split(':');
        let startTimeArr = startTime.split(" ");
        let st = startTimeArr[startTimeArr.length -1];

        
        let endDateArr = endTime.split(':');
        let endTimeArr = endTime.split(" ");
        let et = endTimeArr[endTimeArr.length -1];
        let finalSd =  new Date(startDateArr[0]);
        let finalEd = new Date(endDateArr[0]);

        obj['startDate'] = finalSd;
        obj['endDate'] = finalEd;

        dateTimeMap[finalSd.toString()] = st + "-" + et;
        

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
                        <Modal.Title style={{color:"black"}}>{ "Activity Of The Day"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <ul>
                                <li style={{color:"black"}}>
                                    <strong> Activity Time : </strong>
                                    {dateTimeMap[currentEvent.startDate]}
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
  