import React, { useEffect, useState } from 'react';
import './TeamDetail.css'
import { useParams } from 'react-router';
import male from "../../images/male.png"
import female from "../../images/female.png"
import stadium from "../../images/background-stadium.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faFutbol, faMapMarkerAlt, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const TeamDetail = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [teamId])
    const{strTeamBadge, strDescriptionEN , strStadiumDescription , strTeam , intFormedYear , strCountry , strSport , strGender , strTwitter , strWebsite , strYoutube} = team;
    return (
            <div>
                <Card className="bg-dark text-white text-center">
                    <Card.Img style={{ height: '300px', background: '#fff', opacity: '0.4' }} src={stadium} alt="Card image" />
                    <Card.ImgOverlay style={{ top: '30%' }}>
                        <img style={{ height: "6.2rem" }} src={strTeamBadge} alt="" />
                    </Card.ImgOverlay>
                </Card>
                <div className="player-details">
                    <div className="container ">
                        <section className="about-team mt-5" >
                            <div className="row d-flex">
                                <div className="col-md-6  p-5">
                                    <h2>{strTeam}</h2>
                                    <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded : {intFormedYear}</h5>
                                    <h5><FontAwesomeIcon icon={faFlag} /> Country : {strCountry}</h5>
                                    <h5><FontAwesomeIcon icon={faFutbol} /> Sport Type : {strSport}</h5>
                                    <h5><FontAwesomeIcon icon={faVenusMars} /> Gender : {strGender}</h5>
                                </div>
                                <div className="col-md-6  conditional-image">
                                    {
                                        strGender === "Male" ? <img src={male} alt="..." /> : <img src={female} alt="..." />
                                    }
                                </div>
                            </div>
                        </section>
                        <section className="mt-5">
                            <p>{strDescriptionEN}</p>
                            <p className="mt-5">{strStadiumDescription}</p>
                        </section>
                        <section className="social-link text-center mt-5 mb-5">
                            <a target="-blank" href={`https://${strTwitter}`} className="twitter text-info mr-3">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a target="-blank" href={`https://${strWebsite}`} className="facebook text-primary ">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a target="-blank" href={`https://${strYoutube}`} className="youTube text-danger ml-3">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </section>
                    </div>
                </div>
            </div>
        );
    };

    export default TeamDetail;