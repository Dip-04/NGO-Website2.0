import './Home.css'
import { Link } from 'react-router-dom';
import food from './images/food.png';
import home from './images/home.png';
import hel from './images/hel.png';
import edu from './images/edu.png';
import soc from './images/soc.png';
import co1 from './images/co1.jpg';
import co2 from './images/co2.jpg';
import t1 from './images/t1.jpeg';
import t2 from './images/t2.jpg';
import t3 from './images/t3.jpg';
import t4 from './images/t4.jpg';
import dip from './images/dip.jpg'
import san from './images/san.jpg'
import man from './images/man.jpg'
import homebg from './images/homebg1.png'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import strip from './images/strip.png';
import strip2 from './images/strip2.png';

import bgg from './images/bg.mp4'
import { Card } from 'react-bootstrap';

import React, { useEffect, useState, useRef } from 'react';
import ini from './images/in.png'
const teamMembers = [
  {
    name: 'Shobha Motghare',
    position: 'Secretary',
    img: t1,

    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/shobha-motghare-0a6a57238/',
    }
  }, {
    name: 'Payal Badhe',
    position: 'President',
    img: t2,
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/payal-badhe-531756aa/',

    }
  },
  {
    name: 'Bharti Shendre',
    position: 'Treasurer',
    img: t3,

    socialMedia: {
      linkedin: 'https://linkedin.com/in/johndoe',

    }
  }, {
    name: 'Nilima Kalambe',
    position: 'Advisor',
    img: t4,

    socialMedia: {
      linkedin: 'https://linkedin.com/in/johndoe',

    }
  }

];
function Home() {
  const images = [img1, img2, img3];
  const testimonials = [

    {
      name: 'Sanjana Tunk',
      role: 'Content Writer',
      img: san,
      quote:
        'Thank you for giving the opportunity. Did this intership which was a bit different and unique from others.',
    },
    {

      name: 'Diptish Gohane',
      role: 'Web Developer',
      img: dip,
      quote:
        'The experience here at Suvidha Foundation was wonderful. I learnt a lot. It was worth it.',
    },
    {
      name: 'Manya Sahni',
      role: 'Digital Marketing',
      img: man,
      quote:
        'I`m glad to have worked with the Suvidha Foundation because I am passionate about their message and what they do.',
    },
  ];
  const [count, setCount] = useState({
    countries: 15,
    volunteers: 3,
    internship: 1,
    treesPlanted: 54
  });
  const [fadeIn1, setFadeIn1] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    setFadeIn(true);

    const handleScroll = () => {
      const card = document.querySelector('.card1');
      if (!fadeIn1 && isInViewport(card)) {
        setFadeIn1(true);
      }
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener('scroll', handleScroll);

    const meoElement = document.querySelector('section.meo');
    meoElement.scrollIntoView({ behavior: 'smooth' });

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        startAnimation();
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const startAnimation = () => {
      setCount({
        countries: 0,
        volunteers: 0,
        internship: 0,
        treesPlanted: 0
      });
      animateCounter('countries', 15);
      animateCounter('volunteers', 3);
      animateCounter('internship', 1);
      animateCounter('treesPlanted', 54);
    };

    const animateCounter = (key, target) => {
      const increment = target / 30;

      const interval = setInterval(() => {
        setCount(prevCount => {
          if (prevCount[key] < target) {
            return { ...prevCount, [key]: Math.min(prevCount[key] + increment, target) };
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 100);
    };

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };

  }, [images.length,fadeIn1]);


 
  return (
    <>
      <section className="wrapper meo " style={{ backgroundColor: 'white', fontFamily: 'Poppins' }} >

      <img src={strip} className="card-img-top" alt="..." style={{ zIndex: '1', position: 'absolute'}} />
  <div className="wapper pt-5 ">
        
  <div className="row mt-5">
            <div className="col-md-6 col-lg-6 mb-3 ps-5 order-2 order-md-1 ">
            <div className={`card-body ${fadeIn ? 'fade-in' : ''}`}>
                    <h1 className="fw-bold" style={{ fontSize: '4.3125rem', color: "black",position:'relative',zIndex:'2' }}>Welcome to</h1>
                    <h1 className="fw-bold ma" style={{ fontSize: '4rem', color: '#fdd831' }}>Suvidha Foundation </h1>
                    <h1 className="fw-bold "><span className="fw-bold" style={{ fontSize: '3.5rem', color: '#512a74' }}> Suvidha Mahila</span> <span className="fw-bold" style={{ fontSize: '3.5rem', color: '#512a74' }}>Mandal</span></h1>
                    <p className="fw-bold" style={{ color: 'black', fontSize: '1.2rem' }}>
                        We are a non-profit organization dedicated to providing quality
                        education and empowerment to the financially challenged sections of society.
                    </p>
                    <Link to="/donate" className="btn fw-bold mt-4 donate-btn" style={{ fontSize: '20px' }}><i className='bi bi-heart-fill me-2'></i>Donate Now</Link>
                    <Link to="/aboutus" className="btn fw-bold ms-4 mt-4 learn-more-btn" style={{ fontSize: '20px' }}>Learn More</Link>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 order-2 order-md-1 ">
            <div className="card" style={{ border: '0', }}>
                    <img src={homebg} className="card-img-top" alt="..." style={{ zIndex: '1', position: 'absolute', height: '510px' }} />
                    {/* <img src={images[currentImageIndex]}  alt="..." style={{ paddingBottom: '67px', paddingLeft: '90px', height: '514px' }} /> */}
                    <video className="card-img-top" data-rellax-speed="0" autoPlay muted loop playsInline style={{ paddingBottom: '47px', paddingLeft: '90px', height: '514px' }}>
  <source src={bgg} type="video/mp4" />
</video>

                </div>
            
       
            </div>
        </div>

    <div className="internship-strip mt-2 " style={{width: '100%', color: 'white', marginBottom: '60px',zIndex:'1',fontSize:'13px'}}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="content-moving">
                        <p className="me-5">Bringing Smile To Millions</p>
                        <p className="me-5">Get Your Donations Tax Exempted</p>
                        <p className="me-5">Student Internship Mentorship Program</p>
                        <p className="me-5">Ensuring Happy and Healthy Animals through Feeding Programs</p>
                        <p className="me-5"><i className="bi bi-phone me-2"></i>+91 7020044091 </p>
                        <p className="me-3"><i className="bi bi-chat-fill me-2"></i>info@suvidhafoundationedutech.org </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

      
        <div className="jumbotron">
          <div className='meow'>
            <div className={`container  text-center`}>
              <h1 className="display-4 fw-bold pt-5 ms-5 me-5 ps-5 pe-5" style={{ color: 'rgb(232, 127, 55)', fontSize: '' }}>Apply For Internship and Mentorship Programs</h1>
              <h3 className="mt-3 ms-5 me-5 ps-5 pe-5" style={{ color: '' }}>Seize the opportunity to gain invaluable experience and jumpstart your career with an internship that propels you towards success.</h3>
              <p className="mt-3 ms-5 me-5 ps-5 pe-5">The Suvidha Foundation Internship Program is a unique opportunity for students and recent graduates to gain experience and contribute to the work of Suvidha Foundation. Along with undertaking tasks related to their specific skills, we encourage interns to develop a reputable professional portfolio.</p>
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform" target='_blank' className="btn text-light fw-bold fs-5 mt-3 mb-4 apply-more-btn" style={{}}>Apply Here</Link>
            </div>
          </div>
        </div>
        <div className="container-fluid  mt-5 d-flex align-items-stretch mb-5" style={{padding:'0'}} >
          <div className='con3' style={{ position:'relative'}}>
          <img src={strip} className="card-img-top" alt="..." style={{ zIndex: '1', position: 'absolute'}} />

            <h1 className='fw-bold text-center he pt-1 mt-1 ' style={{ color: 'black', textDecoration: 'underline',position:'relative',zIndex:'2' }}>What We Do?</h1>
            <div className="row mt-4 ms-5">
              <div className="col-12 col-md-6 col-lg-4 ">
                <div className={`card card1 mb-4 mt-5 ${fadeIn1 ? 'fade-in1' : ''} `} style={{ width: '22rem', transition: 'all .2s linear' }}>
                  <div className="card-body">
                    <div className='container'>
                      <div className="row align-items-start">
                        <div className="col" style={{ width: '60px' }}>
                          <img src={food} width={60} height={60} alt="" style={{ transition: 'all .2s linear' }} />
                        </div>
                        <div className="col mb-4" style={{ width: '200px' }}>
                          <h5 className="card-title mt-3 me-5 fw-bold pe-" style={{ color: '#512a74', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'all .2s linear' }}>
                            Healthy Food</h5>
                        </div>
                        <p className='ms-3 me-2' style={{ transition: 'all .2s linear' }}>By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-12 col-md-6 col-lg-4 ">
                <div className={`card card1 mb-4 mt-5  ${fadeIn1 ? 'fade-in1' : ''}`} style={{ width: '22rem', transition: 'all .2s linear' }}>
                  <div className="card-body">
                    <div className='container'>
                      <div className="row align-items-start">
                        <div className="col" style={{ width: '60px' }}>
                          <img src={home} width={60} height={60} alt="" style={{ transition: 'all .2s linear' }} />
                        </div>
                        <div className="col mb-4" style={{ width: '200px' }}>
                          <h5 className="card-title mt-3 me-2 fw-bold pe-" style={{ color: '#512a74', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'all .2s linear' }}>Social Awareness</h5>
                        </div>
                        <p className='ms-3 me-2' style={{ transition: 'all .2s linear' }}>We provide resources, conduct awareness campaigns, and facilitate access to hygiene facilities, aiming to create a healthier environment.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-12 col-md-6 col-lg-4 ">
                <div className={`card card1 mb-4 mt-5 ${fadeIn1 ? 'fade-in1' : ''}`} style={{ width: '22rem', transition: 'all .2s linear' }}>
                  <div className="card-body">
                    <div className='container'>
                      <div className="row align-items-start">
                        <div className="col" style={{ width: '60px' }}>
                          <img src={food} width={60} height={60} alt="" style={{ transition: 'all .2s linear' }} />
                        </div>
                        <div className="col mb-4" style={{ width: '200px' }}>
                          <h5 className="card-title mt-3 me-3 fw-bold pe-" style={{ color: '#512a74', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'all .2s linear' }}>
                            Tree Plantation</h5>
                        </div>
                        <p className='ms-3 me-2' style={{ transition: 'all .2s linear' }}>Through community engagement and active participation, we successfully planted thousands of trees, fostering a greener and healthier ecosystem for future generations.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-12 col-md-6 col-lg-4 ">
                <div className={`card card1 mb-4 mt-5 ${fadeIn1 ? 'fade-in1' : ''}`} style={{ width: '22rem', transition: 'all .2s linear' }}>
                  <div className="card-body">
                    <div className='container'>
                      <div className="row align-items-start">
                        <div className="col" style={{ width: '60px' }}>
                          <img src={hel} width={60} height={60} alt="" style={{ transition: 'all .2s linear' }} />
                        </div>
                        <div className="col mb-4" style={{ width: '200px' }}>
                          <h5 className="card-title mt-3 me-2 fw-bold pe-" style={{ color: '#512a74', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'all .2s linear' }}>Health Care</h5>
                        </div>
                        <p className='ms-3 me-2' style={{ transition: 'all .2s linear' }}>We believe that access to healthcare is a fundamental right, and we work tirelessly to ensure that healthcare services are accessible and affordable.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className={`card card1 mb-4 mt-5 ${fadeIn1 ? 'fade-in1' : ''}`} style={{ width: '22rem', transition: 'all .2s linear' }}>
                  <div className="card-body">
                    <div className='container'>
                      <div className="row align-items-start">
                        <div className="col" style={{ width: '60px' }}>
                          <img src={edu} width={60} height={60} alt="" style={{ transition: 'all .2s linear' }} />
                        </div>
                        <div className="col mb-4" style={{ width: '200px' }}>
                          <h5 className="card-title mt-3 me-0 fw-bold pe-" style={{ color: '#512a74', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'all .2s linear' }}>Primary Education</h5>
                        </div>
                        <p className='ms-3 me-2' style={{ transition: 'all .2s linear' }}>By collaborating with local communities and educators, we aim to empower children with the knowledge and skills they need for a brighter future.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div> <div className="col-12 col-md-6 col-lg-4 ">
                <div className={`card card1 mb-4 mt-5 ${fadeIn1 ? 'fade-in1' : ''}`} style={{ width: '22rem', transition: 'all .2s linear' }}>
                  <div className="card-body">
                    <div className='container'>
                      <div className="row align-items-start">
                        <div className="col" style={{ width: '60px' }}>
                          <img src={soc} width={60} height={60} alt="" style={{ transition: 'all .2s linear' }} />
                        </div>
                        <div className="col mb-4" style={{ width: '200px' }}>
                          <h5 className="card-title mt-3 me-5 fw-bold pe-" style={{ color: '#512a74', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'all .2s linear' }}>Social Care</h5>
                        </div>
                        <p className='ms-3 me-2' style={{ transition: 'all .2s linear' }}>Our programs encompass a range of support services, including counseling, vocational training, and advocacy, with the goal of empowering individuals</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron3 mt-5 " >
          <div className="container text-center "ref={sectionRef}>
            <div className="row mt-4" ref={sectionRef}>
              <div className="col">
                <div className="card mb-4 mt-5" style={{ width: '18rem' }}>
                  <div className="card-body">
                    <div className='container'>
                      <i className="bi bi-globe-americas" style={{ fontSize: '80px', color: '#512A74' }}></i>
                      <div className="col mb-4" style={{ width: '200px' }}>
                        <h1 className="card-title mt-3 ms-5 fw-bold text-center" style={{ color: '#9f2176', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '45px' }}>
                          {count.countries.toFixed(0)}+</h1>
                      </div>
                      <p className='ms-3 me-2 fw-bold' style={{ fontSize: '25px', color: '#DD7228' }}>Countries</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card mb-4 mt-5" style={{ width: '18rem', transition: 'all .2s linear' }}>
                  <div className="card-body">
                    <div className='container'>
                      <i className="bi bi-people-fill" style={{ fontSize: '80px', color: '#512A74' }}></i>
                      <div className="col mb-4" style={{ width: '200px' }}>
                        <h1 className="card-title mt-3 ms-5 fw-bold text-center" style={{ color: '#9f2176', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '45px' }}>
                          {count.volunteers.toFixed(0)} L+</h1>
                      </div>
                      <p className='ms-3 me-2 fw-bold' style={{ fontSize: '25px', color: '#DD7228' }}>Volunteers</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card mb-4 mt-5" style={{ width: '18rem', transition: 'all .2s linear' }}>
                  <div className="card-body">
                    <div className='container'>
                      <i className="bi bi-pc-display" style={{ fontSize: '80px', color: '#512A74' }}></i>
                      <div className="col mb-4" style={{ width: '200px' }}>
                        <h1 className="card-title mt-3 ms-5 fw-bold text-center" style={{ color: '#9f2176', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '45px' }}>
                          {count.internship.toFixed(0)} Cr+</h1>
                      </div>
                      <p className='ms-3 me-2 fw-bold' style={{ fontSize: '25px', color: '#DD7228' }}>Internship Goal</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card mb-4 mt-5" style={{ width: '18rem', transition: 'all .2s linear' }}>
                  <div className="card-body">
                    <div className='container'>
                      <i className="bi bi-tree" style={{ fontSize: '80px', color: '#512A74' }}></i>
                      <div className="col mb-4" style={{ width: '200px' }}>
                        <h1 className="card-title mt-3 ms-5 fw-bold text-center" style={{ color: '#9f2176', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '45px' }}>
                          {count.treesPlanted.toFixed(0)} L+</h1>
                      </div>
                      <p className='ms-3 me-2 fw-bold' style={{ fontSize: '25px', color: '#DD7228' }}>Trees Planted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={strip2} className="card-img-top" alt="..." style={{ zIndex: '1', position: 'absolute'}} />

        <section className="meet-our-team-section se" style={{}}>
          <h1 className='fw-bold text-center he pt-4 mt-4 ' style={{ color: 'black', textDecoration: 'underline',position:'relative',zIndex:'2' }}>Meet Our Team</h1>

          <h3 className="text-center mt-4 fw-bold" style={{ color: '#DD7228',position:'relative',zIndex:'2' }}>Guys behind our charity activities</h3>

          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div className="team-member-card" key={index} style={{}}>
                <div className="member-image">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="member-details">
                  <h3 className="member-name text-light fw-bold">{member.name}</h3>
                  <p className="member-position text-light fw-bold" style={{ textDecoration: 'underline' }}>{member.position}</p>
                  <div className="social-links">
                    <Link to={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-linkedin text-dark"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="jumbotron2  pt-5 ae" style={{}} >
          <div className="container text-center">
            <h1 className='fw-bold text-center ' style={{ color: 'rgb(232, 127, 55)' }}>Empowering Change Together: Our Collaborative Initiatives</h1>

            <div className="row mt-4">
              <div className="col">
                <img src={co1} width={305} height={169} alt=""  />
              </div>

              <div className="col">
                <img src={co2} width={305} height={169} alt="" />
              </div>

              <div className="col">
                <img src={co1} width={305} height={169} alt="" />
              </div>


            </div>
          </div>
        </div>
        <div className="my-5">
        <img src={strip} className="card-img-top" alt="..." style={{ zIndex: '1', position: 'absolute'}} />

          <h1 className='fw-bold text-center he pt-4 mt-4 ' style={{ color: 'black', textDecoration: 'underline',position:'relative',zIndex:'2' }}>Testimonial</h1>

          <h3 className="text-center mt-4 fw-bold  " style={{ color: '#DD7228',position:'relative',zIndex:'2' }}>What  people are saying about us.</h3>

          <div className="d-flex justify-content-center mt-5">
            <div className="col-xs-12 col-md-10">
              <div className="row">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="col-xs-12 col-md-4 mb-4">
                    <Card style={{ backgroundColor: ' #fdd83145', border: '1px solid yellow' }}>
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src={testimonial.img}
                            width={100}
                            height={100}
                            alt=""
                            style={{ borderRadius: '50%', marginRight: '10px', border: '2px solid white' }}
                          />
                          <div>
                            <footer className="blockquote-footer fw-bold">
                              <span className="fw-bold text-dark mb-4">{testimonial.name}</span>
                              <br />
                              <cite title="Source Title " className="ms-3 mt-3">
                                {testimonial.role}
                              </cite>
                            </footer>
                          </div>
                        </div>
                        <blockquote className="blockquote mb-0 text-dark">
                          <p style={{color:'rgb(221, 114, 40) '}}><i className='bi bi-star-fill ms-3 me-2'></i><i className='bi bi-star-fill me-2'></i><i className='bi bi-star-fill me-2'></i><i className='bi bi-star-fill me-2'></i><i className='bi bi-star-fill me-2'></i></p>
                          <p style={{ fontSize: '0.8rem' }}>"{testimonial.quote}"</p>
                        </blockquote>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
<img src={ini} style={{width:'100vw'}} alt=""/>
      </section>
    </>
  );
}

export default Home;
