import './Gallary.css';
import { Link } from 'react-router-dom';
import work from './images/work.jpg'
import book from './images/book.jpg'
import on from './images/online.jpg'
import clo from './images/clo.jpg'
import tre from './images/tre.jpg'
import edu from './images/edu.jpg'
import wom from './images/wom.jpg'
import foo from './images/foo.jpg'
import ev from './images/ev.jpg'
import pad from './images/pad1.jpg'
import feed from './images/feed1.jpg'
import React, { useEffect, useState } from 'react';
import strip from './images/strip.png';


function Gallary() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);
    return (
        <section className="wrapper meo " style={{ backgroundColor: 'white', fontFamily: 'Poppins', paddingTop: '107px' }} >

        <div className="wrapper">
        <img src={strip} className="card-img-top" alt="..." style={{ zIndex: '1', position: 'absolute' }} />

            <div className=" container pb-5">
                <h1 className='fw-bold text-center he' style={{ color: 'black' , zIndex: '2', position: 'relative'}}>Our Gallary</h1>
                
                <h3 className="text-center mt-4 fw-bold" style={{ color: 'rgb(81, 42, 116)', zIndex: '2', position: 'relative' }}>Moments of Impact: Capturing the Journey of Our NGO</h3>
                <div className="card " style={{ boxShadow: 'rgb(244 255 0) 0px 0px 20px',borderRadius:'0' }}>
                    <div className="card-body">

                        <div className="row mt-4 justify-content-center">
                            <div className= {`team-member-card1 ms-3 p-0 ${animate ? 'card3' : ''}`} style={{ width: '18rem' }}>
                                <div className="member-image " style={{ borderRadius: '0%' }}>
                                    <img src={work} alt="" style={{ borderRadius: '0%' }} />
                                </div>
                                <div className="member-details1 lefttoright">

                                    <div className="overlay">
                                        <Link to="https://drive.google.com/drive/u/1/folders/11DrNvVoYiIlmKUDW2AvsiklJTuIDL3Gk" className="social-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '22px' }}>Free Workshops</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={`team-member-card1 ms-3 p-0 ${animate ? 'card3' : ''}`} style={{ width: '18rem' }}>
                                <div className="member-image " style={{ borderRadius: '0%' }}>
                                    <img src={book} alt="" style={{ borderRadius: '0%' }} />
                                </div>
                                <div className="member-details1 lefttoright">

                                    <div className="overlay">
                                        <Link to="https://drive.google.com/drive/u/1/folders/1FKG4shImI-9JRavKIP-0b-Tp9Hd205VI" className="social-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '22px' }}>Books Distribution</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={`team-member-card1 ms-2 p-0 ${animate ? 'card3' : ''}`} style={{ width: '18rem' }}>
                                <div className="member-image " style={{ borderRadius: '0%' }}>
                                    <img src={on} alt="" style={{ borderRadius: '0%' }} />
                                </div>
                                <div className="member-details1 lefttoright">

                                    <div className="overlay">
                                        <Link to="https://drive.google.com/drive/u/1/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms" className="social-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '22px' }}>Online Events</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={`team-member-card1 ms-2 p-0 ${animate ? 'card3' : ''}`} style={{ width: '18rem' }}>
                                <div className="member-image " style={{ borderRadius: '0%' }}>
                                    <img src={clo} alt="" style={{ borderRadius: '0%' }} />
                                </div>
                                <div className="member-details1 lefttoright">

                                    <div className="overlay">
                                        <Link to="https://drive.google.com/drive/u/1/folders/1nOFKvOjhWsbfVVPGumOfpLrFe2364_zK" className="social-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '22px' }}>Cloths Distribution</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={`team-member-card1 ms-3 p-0 ${animate ? 'card3' : ''}`} style={{ width: '18rem' }}>
                                <div className="member-image " style={{ borderRadius: '0%' }}>
                                    <img src={tre} alt="" style={{ borderRadius: '0%' }} />
                                </div>
                                <div className="member-details1 lefttoright">

                                    <div className="overlay">
                                        <Link to="https://drive.google.com/drive/u/1/folders/1V5Owzjc00GT_U2Mw_bdOMbiCYSxmScSw" className="social-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '22px' }}>Tree Plantation</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={`team-member-card1 ms-2 p-0 ${animate ? 'card3' : ''}`} style={{ width: '18rem' }}>
                                <div className="member-image " style={{ borderRadius: '0%' }}>
                                    <img src={edu} alt="" style={{ borderRadius: '0%' }} />
                                </div>
                                <div className="member-details1 lefttoright">

                                    <div className="overlay">
                                        <Link to="https://drive.google.com/drive/u/1/folders/1ucG-Ltm_6fAwZ-1ta4-nHhRdKpu-3EAN" className="social-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '22px' }}>Free Education</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={`team-member-card1 ms-2 p-0 ${animate ? 'card3' : ''}`} style={{ width: '18rem' }}>
                                <div className="member-image " style={{ borderRadius: '0%' }}>
                                    <img src={wom} alt="" style={{ borderRadius: '0%' }} />
                                </div>
                                <div className="member-details1 lefttoright">

                                    <div className="overlay">
                                        <Link to="https://drive.google.com/drive/u/1/folders/1_V-acFibBsweHcM-R-P__4EQWpauB6dK" className="social-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '22px' }}>Women's Day</Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`team-member-card1 ms-2 p-0 ${animate ? 'card3' : ''}`} style={{ width: '18rem'}}>
                                <div className="member-image " style={{ borderRadius: '0%' }}>
                                    <img src={foo} alt="" style={{ borderRadius: '0%' }} />
                                </div>
                                <div className="member-details1 lefttoright">

                                    <div className="overlay">
                                        <Link to="https://drive.google.com/drive/u/1/folders/1AfCK5kJqf9_N_JGd8wqUhNesS8k1tVmw" className="social-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '22px' }}>Food Distribution</Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`team-member-card1 ms-3 p-0 ${animate ? 'card3' : ''}`} style={{ width: '18rem',  }}>
                                <div className="member-image " style={{ borderRadius: '0%' }}>
                                    <img src={ev} alt="" style={{ borderRadius: '0%' }} />
                                </div>
                                <div className="member-details1 lefttoright">

                                    <div className="overlay">
                                        <Link to="https://drive.google.com/drive/u/1/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms" className="social-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '22px' }}>Suvidha Events</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={`team-member-card1 ms-2 p-0 ${animate ? 'card3' : ''}`} style={{ width: '18rem' }}>
                                <div className="member-image " style={{ borderRadius: '0%' }}>
                                    <img src={pad} alt="" style={{ borderRadius: '0%' }} />
                                </div>
                                <div className="member-details1 lefttoright">

                                    <div className="overlay">
                                        <Link to="https://drive.google.com/drive/u/1/folders/1tMkME479AhVFQ5pUZag3-YPgNWhIn7Rl" className="social-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '22px' }}>Empowering Women</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={`team-member-card1 ms-2 p-0 ${animate ? 'card3' : ''}`} style={{ width: '18rem' }}>
                                <div className="member-image " style={{ borderRadius: '0%' }}>
                                    <img src={feed} alt="" style={{ borderRadius: '0%' }} />
                                </div>
                                <div className="member-details1 lefttoright">

                                    <div className="overlay">
                                        <Link to="https://drive.google.com/drive/u/1/folders/1xr7jhBYaap-tZ2puU5HiF6ccitJtBfaB" className="social-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '22px' }}>Animal Feeding</Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </div>
        </section>


    );
}

export default Gallary;
