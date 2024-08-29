import React from "react";
import Img1 from "../images/transparent.png"
import Img2 from "../images/transparent.png"
import Img3 from "../images/transparent.png"

const Main = () => {
    return (
        <>
            <div className="bgimg-1">
                <img src={Img1} style={{ position: 'relative', opacity: 'opacity: 0.85', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }} alt="skyscraper" />
                <div className="caption">
                    <span className="border">HAVE YOU EVER FEEL LOST?</span>
                </div>
            </div>
            <div className="bg1">

                <h3 style={{ textAlign: "center" }}>THIS IS COMMON IN PRACTICALLY ALL TRANSITIONS...</h3>
                <p>
                    Whether you're changing careers, seeking a new role, or stepping into a different industry, the journey can
                    often feel daunting and uncertain. Feeling uncertain and overwhelmed is a natural part of the process. It’s
                    common to question your choices and feel anxious about the unknown. The thought of leaving a familiar
                    environment for something entirely new can be intimidating. You might worry about whether you'll be able to
                    adapt to new challenges, fit into a different workplace culture, or meet the expectations of a new role.
                    These feelings of uncertainty are completely normal and are experienced by almost everyone undergoing a
                    significant transition.

                    The fear of the unknown, coupled with the pressure to succeed, can make this period particularly stressful.
                    However, it’s important to remember that these emotions are a sign of growth and change. They indicate that
                    you are stepping out of your comfort zone and pushing towards a new chapter in your professional life.
                    Embracing these feelings and seeking the right guidance and support can transform this challenging time into
                    a rewarding experience filled with personal and professional development.
                </p>
            </div >
            <div className="bgimg-2">
                <img src={Img2} style={{ position: 'relative', opacity: 'opacity: 0.85', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} alt="stairs" />
                <div className="caption">
                    <span className="border">HERE WE ARE READY TO GUIDE YOU!</span>
                </div>
            </div>
            <div className="bg1">
                <h3 style={{ textAlign: "center" }}>YOU DON'T HAVE TO NAVIGATE THIS JOURNEY ALONE.</h3>
                <p>
                    Our team of experienced career coaches and advisors is dedicated to helping you find clarity and direction.
                    With years of expertise and a deep understanding of various industries and career paths, we are equipped to
                    guide you through every step of your transition. We understand the challenges you face and are committed to
                    providing the support you need to make informed decisions and achieve your goals.

                    We know that every individual's journey is unique, and we tailor our approach to meet your specific needs
                    and aspirations. Our comprehensive services include personalized career assessments, strategic planning,
                    resume and cover letter optimization, interview preparation, and continuous mentorship. We take the time to
                    listen to your concerns, identify your strengths, and address any barriers that might be holding you back.

                    By leveraging our extensive network and industry insights, we can help you explore new opportunities and
                    connect with the right people. Our goal is not only to help you find a job but to empower you to build a
                    fulfilling and sustainable career. With our guidance, you will gain the confidence and skills necessary to
                    navigate the complexities of career transitions, allowing you to move forward with a clear vision and a
                    strong sense of purpose. Together, we will turn your uncertainties into possibilities and set you on the
                    path to long-term success and satisfaction.</p>
            </div>
            <div className="bgimg-3">
                <img src={Img3} style={{ position: 'relative', opacity: 'opacity: 0.85', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} alt="sea" />
                <div className="caption">
                    <span className="border">YOUR ACHIEVEMENTS ARE WAITING FOR YOU!</span>
                </div>
            </div>
            <div className="bg1">
                <h3 style={{ textAlign: "center" }}>DON'T WASTE TIME!</h3>
                <p>
                    Your achievements are waiting for you, don't waste time! Every moment spent feeling stuck is a moment you
                    could be moving forward towards your dreams. With our personalized career transition programs, you'll gain
                    the skills, confidence, and insights necessary to thrive in your new path. We offer tailored advice,
                    strategic planning, and actionable steps to ensure your success. Let's turn your uncertainty into
                    opportunity and your hesitation into action. The future you've been dreaming of is within reach, and we're
                    here to help you grasp it. Start your journey with us today and unlock your full potential.
                </p>
            </div>
            <div className="bgimg-1">
                <img src={Img1} style={{ position: 'relative', opacity: 'opacity: 0.85', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} alt="skyscraper" />
                <div className="caption">
                    <span className="border"><a href="about.html">LEARN MORE</a></span>
                </div>
            </div>
        </>)
}

export default Main