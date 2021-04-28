import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import '../Team/Team.css'

const Team = (props) => {
    const {strTeamBadge,strAlternate,idTeam} = props.team;
    let history = useHistory();
    const handleClick = (teamId) => {
        history.push(`/teams/${teamId}`)
    }
    return (
        <div className="teams">
            <div className="single-team">
            <Col lg={4} md={6} xs={12}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{width:'7rem'}} variant="center" src={strTeamBadge} />
                    <Card.Body>
                        <Card.Title>{strAlternate}</Card.Title>
                        <Card.Text>
                            Soccer type: Football
                        </Card.Text>
                        <Button onClick={() => handleClick(idTeam)} variant="primary" className="custom">Explore<FontAwesomeIcon style={{margin:'5px 0 0 5px'}} icon={faLongArrowAltRight} /></Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
        </div>
    );
};

export default Team;