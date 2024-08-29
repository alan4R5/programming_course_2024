import React, { useRef } from "react";
import video1 from '../videos/01_What_is_Software_Testing.mp4';
import video2 from '../videos/02_Seven_Testing_Principles.mp4';
import video3 from '../videos/03_SDLC_Vs_STLC.mp4';
import video4 from '../videos/04_What_is_Unit_Testing.mp4';
import video5 from '../videos/05_Acceptance_Testing.mp4';
import video6 from '../videos/06_What_is_Integration_Testing.mp4';
import video7 from '../videos/07_Smoke_and_Sanity_Testing.mp4';
import video8 from '../videos/08_What_is_Regression_Testing.mp4';
import video9 from '../videos/09_What_is_NonFunctional_Testing.mp4';
import video10 from '../videos/10_Test_Formality.mp4';
import video11 from '../videos/11_What_is_Test_Scenario_How_to_write_Test_Scenario.mp4';
import video12 from '../videos/12_What_is_Test_Basis.mp4';
import video13 from '../videos/13_How_to_write_test_case.mp4';
import video14 from '../videos/14_Requirement_Traceability_Matrix_RTM.mp4';
import video15 from '../videos/15_Boundary_Value_Analysis_and_Equivalence_Partitioning.mp4';
import video16 from '../videos/16_What_is_Decision_Table_Testing.mp4';
import video17 from '../videos/17_State_Transition_Testing.mp4';
import video18 from '../videos/18_Use_Case_Testing.mp4';
import video19 from '../videos/19_What_is_Static_Testing_What_is_a_Review.mp4';
import video20 from '../videos/20_Test_Estimation_Techniques.mp4';
import video21 from '../videos/21_What_is_a_Test_Plan.mp4';

const Video = () => {
    const vidRef = useRef(null);

    const handlePlayVideo = () => {
        console.log(vidRef);
        vidRef.current.play();
    };

    return (
        <>
            <section id="videos-section">
                <h2>Video Training</h2>
                <div className="video-div container">
                    <div>
                        <h5>Why Testing is Important?</h5>
                        <video width="900" controls ref={vidRef}>
                            <source src={video1} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div>
                        <p><br />We are opening our Training Section and our 1<sup>st</sup> course will be a preparatory journey to
                            <strong>ISTQB Certification</strong>, which is
                            mandatory for those who want to enter the IT field as a <strong>Quality Assurance
                                Technician</strong>, courtesy of our friend <a href="https://www.youtube.com/@guru99com"
                                    target="_blank" rel="noopener noreferrer"><strong>Guru99</strong></a>.
                            Software testing is a critical phase in the software development lifecycle
                            that ensures the
                            quality, functionality, and reliability of software applications.
                            It helps identify and address issues early, reduces costs, ensures compliance with standards, and
                            enhances the overall user experience.
                        </p>
                        <hr />
                    </div>
                </div>

                <div className="video-div container">
                    <div>
                        <h5>7 Testing Principles</h5>
                        <video width="270" controls>
                            <source src={video2} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div>
                        <h5>SDLC vs STLC</h5>
                        <video width="270" controls>
                            <source src={video3} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div>
                        <h5>Unit Testing</h5>
                        <video width="270" controls>
                            <source src={video4} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div>
                        <h5>Acceptance Testing</h5>
                        <video width="270" controls>
                            <source src={video5} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div>
                        <h5>Integration Testing</h5>
                        <video width="270" controls>
                            <source src={video6} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                </div>
                <div className="video-div container">
                    <div>
                        <h5>Regression Testing</h5>
                        <video width="270" controls>
                            <source src={video7} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div>
                        <h5>NonFunctional Testing</h5>
                        <video width="270" controls>
                            <source src={video8} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div>
                        <h5>Test Formality</h5>
                        <video width="270" controls>
                            <source src={video9} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div>
                        <h5>Test Scenario</h5>
                        <video width="270" height="151,88" controls>
                            <source src={video10} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div>
                        <h5>Integration Testing</h5>
                        <video width="270" height="151,88" controls>
                            <source src={video11} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                </div>
                <div className="video-div container">
                    <div>
                        <h5>RTM</h5>
                        <video width="270" height="151,88" controls>
                            <source src={video12} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div>
                        <h5>Boundary Value</h5>
                        <video width="270" controls>
                            <source src={video13} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div>
                        <h5>Decision Table Testing</h5>
                        <video width="270" height="151,88" controls>
                            <source src={video14} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div>
                        <h5>State Transition</h5>
                        <video width="270" height="151,88" controls>
                            <source src={video15} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div>
                        <h5>Use Case Testing</h5>
                        <video width="270" height="151,88" controls>
                            <source src={video16} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                </div>
                <div className="video-div container">
                    <div>
                        <h5>Estimation Techniques</h5>
                        <video width="270" height="151,88" controls>
                            <source src={video17} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div>
                        <h5>Test Plan</h5>
                        <video width="270" height="151,88" controls>
                            <source src={video18} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div>
                        <h5>Defect or Bug</h5>
                        <video width="270" height="151,88" controls>
                            <source src={video19} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div>
                        <h5>Software Testing</h5>
                        <video width="270" height="151,88" controls>
                            <source src={video20} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div>
                        <h5>7 Testing Principles</h5>
                        <video width="270" height="151,88" controls>
                            <source src={video21} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Video;
