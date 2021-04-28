import React from 'react';
import { Card } from 'react-bootstrap';
import stadium from '../../images/background-stadium.jpg'
const SingleTeam = (props) => {
    console.log(props)
    return (
        <div>
            <Card className="bg-dark text-white text-center">
                <Card.Img style={{height:'300px', background:'#000', opacity:'0.5'}} src={stadium} alt="Card image" />
                <Card.ImgOverlay style={{top:'30%'}}>
                    <h1>Team Tracker</h1>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default SingleTeam;