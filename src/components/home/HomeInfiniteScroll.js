import React, { useRef, useEffect,useState } from 'react';
import './HomeInfiniteScroll.css';

const HomeInfiniteScroll = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setPaused] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const startScroll = () => {
      const animateScroll = () => {
        if (!isPaused) { // Check if scrolling is not paused
          setScrollPos((prevScrollPos) => {
            const newPos = prevScrollPos + 1;

            // Your scrolling logic here...

            return newPos;
          });
        }
        requestAnimationFrame(animateScroll);
      };

      requestAnimationFrame(animateScroll);
    };

    startScroll();

    return () => {
      // Clean up any necessary resources
    };
  }, [isPaused]);


  return (
    <>
      <div className='mediacoverage'>Media Coverage</div>
    <div className="scroll-container1" ref={scrollContainerRef}>
      <div className="scroll-content" >
       
        <img src="demo.png" alt="Image 1" style={{height:"25vh",marginTop:"-6vh"}} />
        <img src="india.png" style={{height:"50px",marginTop:"14px"}} alt="Image 2"  />
        <img src="yourstory.png" style={{height:"50px",marginTop:"14px"}} alt="Image 3"  />
        <img src="bbc.webp" style={{marginTop:"-1vh"}} alt="Image 4" />
        <a href="https://www.zeebiz.com/startups/news-minus-zero-unveils-autonomous-vehicle-based-on-camera-sensor-suite-238534">
          <img src="zee.png" style={{height:"68px",marginTop:"14px",width:"auto"}} alt="image7"/>
          </a>
        <a href="https://www.mobilityoutlook.com/news/minus-zero-unveils-z-pod-autonomous-vehicle/">
          <img src="outlook.png" alt="outlook" style={{height:"105px",width:"auto",marginTop:"0vh"}}/>
          </a>
        <a href="https://www.businesstoday.in/entrepreneurship/news/story/ai-based-self-driving-tech-start-up-minus-zero-unveils-indias-first-fully-autonomous-vehicle-384125-2023-06-04">
          <img src="btoday.png" style={{height:"auto",marginTop:"3.1vh"}} alt="btoday"/>
          </a>
        <a href="https://www.financialexpress.com/express-mobility/industry-express-mobility/bengaluru-start-up-unveils-autonomous-pod-plans-global-trials-in-2-years/3113318/">
          <img src="express.png" alt="express" style={{height:"50px",width:"auto",marginTop:"15px"}}/>
          </a>
        <a href="https://www.autocarindia.com/car-news/bengaluru-based-minus-zero-unveils-zpod-autonomous-driving-concept-428368">
          <img src="autocar.png" alt="autocar" style={{height:"50px" , marginTop:"4vh"}} />
          </a>
<a href="https://auto.economictimes.indiatimes.com/amp/news/auto-technology/minus-zero-unveils-indias-first-fully-autonomous-vehicle/100752879">
  <img src="etauto.png" alt="etauto" style={{height:"50px",width:"auto",marginTop:"3.1vh"}} />
  </a>
<a href="https://auto.hindustantimes.com/auto/cars/indias-first-self-driving-car-unveiled-by-bengaluru-based-startup-with-plans-to-emulate-tesla-google/amp-41685937249629.html">
  <img src="hdauto.png" alt="hdauto" style={{height:"50px",width:"auto" ,marginTop:"3.1vh"}}/>
  </a>
<a href="https://www.overdrive.in/news-cars-auto/banglore-based-start-up-minus-zero-unveils-fully-autonomous-driving-tech/">
  <img src="overdrive.png" style={{height:"50px",width:"auto",marginTop:"15px"}} alt="overdrive" />
  </a>
  <a href="https://zeenews.india.com/electric-vehicles/meet-indias-first-self-driving-car-bengaluru-based-startup-unveils-minus-zero-zpod-2617740.html">
    <img src="zeenews.png" alt="zeenews" style={{height:"70px",width:"auto"}}/>
  </a>
  <a href="https://www.hindustantimes.com/car-bike/zpod-autonomous-car-self-driving-vehicles-minus-zero-startup-bengaluru-101685943747299-amp.html">
    <img src="hindustan.png" alt="india" style={{height:"50px",width:"auto",marginTop:"3.1vh"}}/>
  </a>
        <img src="demo.png" alt="Image 5" style={{height:"25vh",marginTop:"-6vh"}} />
        <img src="india.png" style={{height:"50px",marginTop:"14px"}} alt="Image 6" />
        <img src="yourstory.png" style={{height:"50px",marginTop:"14px"}} alt="Image 7" />
        <img src="bbc.webp" style={{marginTop:"-1vh"}} alt="Image 8"/>
        <a href="https://www.zeebiz.com/startups/news-minus-zero-unveils-autonomous-vehicle-based-on-camera-sensor-suite-238534">
          <img src="zee.png" style={{height:"68px",marginTop:"14px",width:"auto"}} alt="image7"/>
          </a>
        <a href="https://www.mobilityoutlook.com/news/minus-zero-unveils-z-pod-autonomous-vehicle/">
          <img src="outlook.png" alt="outlook" style={{height:"105px",width:"auto",marginTop:"0vh"}}/>
          </a>
        <a href="https://www.businesstoday.in/entrepreneurship/news/story/ai-based-self-driving-tech-start-up-minus-zero-unveils-indias-first-fully-autonomous-vehicle-384125-2023-06-04">
          <img src="btoday.png" style={{height:"auto",marginTop:"3.1vh"}} alt="btoday"/>
          </a>
        <a href="https://www.financialexpress.com/express-mobility/industry-express-mobility/bengaluru-start-up-unveils-autonomous-pod-plans-global-trials-in-2-years/3113318/">
          <img src="express.png" alt="express" style={{height:"50px",width:"auto",marginTop:"15px"}}/>
          </a>
        <a href="https://www.autocarindia.com/car-news/bengaluru-based-minus-zero-unveils-zpod-autonomous-driving-concept-428368">
          <img src="autocar.png" alt="autocar" style={{height:"50px" , marginTop:"4vh"}} />
          </a>
<a href="https://auto.economictimes.indiatimes.com/amp/news/auto-technology/minus-zero-unveils-indias-first-fully-autonomous-vehicle/100752879">
  <img src="etauto.png" alt="etauto" style={{height:"50px",width:"auto",marginTop:"3.1vh"}} />
  </a>
<a href="https://auto.hindustantimes.com/auto/cars/indias-first-self-driving-car-unveiled-by-bengaluru-based-startup-with-plans-to-emulate-tesla-google/amp-41685937249629.html">
  <img src="hdauto.png" alt="hdauto" style={{height:"50px",width:"auto" ,marginTop:"3.1vh"}}/>
  </a>
<a href="https://www.overdrive.in/news-cars-auto/banglore-based-start-up-minus-zero-unveils-fully-autonomous-driving-tech/">
  <img src="overdrive.png" style={{height:"50px",width:"auto",marginTop:"15px"}} alt="overdrive" />
  </a>
  <a href="https://zeenews.india.com/electric-vehicles/meet-indias-first-self-driving-car-bengaluru-based-startup-unveils-minus-zero-zpod-2617740.html">
    <img src="zeenews.png" alt="zeenews" style={{height:"70px",width:"auto"}}/>
  </a>
  <a href="https://www.hindustantimes.com/car-bike/zpod-autonomous-car-self-driving-vehicles-minus-zero-startup-bengaluru-101685943747299-amp.html">
    <img src="hindustan.png" alt="india" style={{height:"50px",width:"auto",marginTop:"3.1vh"}}/>
  </a>
        <img src="demo.png" alt="Image 9" style={{height:"25vh",marginTop:"-6vh"}} />
        <img src="india.png" style={{height:"50px",marginTop:"14px"}} alt="Image 10" />
        <img src="yourstory.png" style={{height:"50px",marginTop:"14px"}} alt="Image 1" />
        <img src="bbc.webp" style={{marginTop:"-1vh"}} alt="Image 2"/>
        <a href="https://www.zeebiz.com/startups/news-minus-zero-unveils-autonomous-vehicle-based-on-camera-sensor-suite-238534">
          <img src="zee.png" style={{height:"68px",marginTop:"14px",width:"auto"}} alt="image7"/>
          </a>
        <a href="https://www.mobilityoutlook.com/news/minus-zero-unveils-z-pod-autonomous-vehicle/">
          <img src="outlook.png" alt="outlook" style={{height:"105px",width:"auto",marginTop:"0vh"}}/>
          </a>
        <a href="https://www.businesstoday.in/entrepreneurship/news/story/ai-based-self-driving-tech-start-up-minus-zero-unveils-indias-first-fully-autonomous-vehicle-384125-2023-06-04">
          <img src="btoday.png" style={{height:"auto",marginTop:"3.1vh"}} alt="btoday"/>
          </a>
        <a href="https://www.financialexpress.com/express-mobility/industry-express-mobility/bengaluru-start-up-unveils-autonomous-pod-plans-global-trials-in-2-years/3113318/">
          <img src="express.png" alt="express" style={{height:"50px",width:"auto",marginTop:"15px"}}/>
          </a>
        <a href="https://www.autocarindia.com/car-news/bengaluru-based-minus-zero-unveils-zpod-autonomous-driving-concept-428368">
          <img src="autocar.png" alt="autocar" style={{height:"50px" , marginTop:"4vh"}} />
          </a>
<a href="https://auto.economictimes.indiatimes.com/amp/news/auto-technology/minus-zero-unveils-indias-first-fully-autonomous-vehicle/100752879">
  <img src="etauto.png" alt="etauto" style={{height:"50px",width:"auto",marginTop:"3.1vh"}} />
  </a>
<a href="https://auto.hindustantimes.com/auto/cars/indias-first-self-driving-car-unveiled-by-bengaluru-based-startup-with-plans-to-emulate-tesla-google/amp-41685937249629.html">
  <img src="hdauto.png" alt="hdauto" style={{height:"50px",width:"auto" ,marginTop:"3.1vh"}}/>
  </a>
<a href="https://www.overdrive.in/news-cars-auto/banglore-based-start-up-minus-zero-unveils-fully-autonomous-driving-tech/">
  <img src="overdrive.png" style={{height:"50px",width:"auto",marginTop:"15px"}} alt="overdrive" />
  </a>
  <a href="https://zeenews.india.com/electric-vehicles/meet-indias-first-self-driving-car-bengaluru-based-startup-unveils-minus-zero-zpod-2617740.html">
    <img src="zeenews.png" alt="zeenews" style={{height:"70px",width:"auto"}}/>
  </a>
  <a href="https://www.hindustantimes.com/car-bike/zpod-autonomous-car-self-driving-vehicles-minus-zero-startup-bengaluru-101685943747299-amp.html">
    <img src="hindustan.png" alt="india" style={{height:"50px",width:"auto",marginTop:"3.1vh"}}/>
  </a>
        <img src="demo.png" alt="Image 3" style={{height:"25vh",marginTop:"-6vh"}} />
        <img src="india.png" style={{height:"50px",marginTop:"14px"}} alt="Image 4" />
        <img src="yourstory.png" style={{height:"50px",marginTop:"14px"}} alt="Image 5" />
        <img src="bbc.webp" style={{marginTop:"-1vh"}} alt="Image 6"/>
        <a href="https://www.zeebiz.com/startups/news-minus-zero-unveils-autonomous-vehicle-based-on-camera-sensor-suite-238534">
          <img src="zee.png" style={{height:"68px",marginTop:"14px",width:"auto"}} alt="image7"/>
          </a>
        <a href="https://www.mobilityoutlook.com/news/minus-zero-unveils-z-pod-autonomous-vehicle/">
          <img src="outlook.png" alt="outlook" style={{height:"105px",width:"auto",marginTop:"0vh"}}/>
          </a>
        <a href="https://www.businesstoday.in/entrepreneurship/news/story/ai-based-self-driving-tech-start-up-minus-zero-unveils-indias-first-fully-autonomous-vehicle-384125-2023-06-04">
          <img src="btoday.png" style={{height:"auto",marginTop:"3.1vh"}} alt="btoday"/>
          </a>
        <a href="https://www.financialexpress.com/express-mobility/industry-express-mobility/bengaluru-start-up-unveils-autonomous-pod-plans-global-trials-in-2-years/3113318/">
          <img src="express.png" alt="express" style={{height:"50px",width:"auto",marginTop:"15px"}}/>
          </a>
        <a href="https://www.autocarindia.com/car-news/bengaluru-based-minus-zero-unveils-zpod-autonomous-driving-concept-428368">
          <img src="autocar.png" alt="autocar" style={{height:"50px" , marginTop:"4vh"}} />
          </a>
<a href="https://auto.economictimes.indiatimes.com/amp/news/auto-technology/minus-zero-unveils-indias-first-fully-autonomous-vehicle/100752879">
  <img src="etauto.png" alt="etauto" style={{height:"50px",width:"auto",marginTop:"3.1vh"}} />
  </a>
<a href="https://auto.hindustantimes.com/auto/cars/indias-first-self-driving-car-unveiled-by-bengaluru-based-startup-with-plans-to-emulate-tesla-google/amp-41685937249629.html">
  <img src="hdauto.png" alt="hdauto" style={{height:"50px",width:"auto" ,marginTop:"3.1vh"}}/>
  </a>
<a href="https://www.overdrive.in/news-cars-auto/banglore-based-start-up-minus-zero-unveils-fully-autonomous-driving-tech/">
  <img src="overdrive.png" style={{height:"50px",width:"auto",marginTop:"15px"}} alt="overdrive" />
  </a>
  <a href="https://zeenews.india.com/electric-vehicles/meet-indias-first-self-driving-car-bengaluru-based-startup-unveils-minus-zero-zpod-2617740.html">
    <img src="zeenews.png" alt="zeenews" style={{height:"70px",width:"auto"}}/>
  </a>
  <a href="https://www.hindustantimes.com/car-bike/zpod-autonomous-car-self-driving-vehicles-minus-zero-startup-bengaluru-101685943747299-amp.html">
    <img src="hindustan.png" alt="india" style={{height:"50px",width:"auto",marginTop:"3.1vh"}}/>
  </a>
        <img src="demo.png" alt="Image 3" style={{height:"25vh",marginTop:"-6vh"}} />
        <img src="india.png" style={{height:"50px",marginTop:"14px"}} alt="Image 4" />
        <img src="yourstory.png" style={{height:"50px",marginTop:"14px"}} alt="Image 5" />
        <img src="bbc.webp" style={{marginTop:"-1vh"}} alt="Image 6"/>
        <a href="https://www.zeebiz.com/startups/news-minus-zero-unveils-autonomous-vehicle-based-on-camera-sensor-suite-238534">
          <img src="zee.png" style={{height:"68px",marginTop:"14px",width:"auto"}} alt="image7"/>
          </a>
        <a href="https://www.mobilityoutlook.com/news/minus-zero-unveils-z-pod-autonomous-vehicle/">
          <img src="outlook.png" alt="outlook" style={{height:"105px",width:"auto",marginTop:"0vh"}}/>
          </a>
        <a href="https://www.businesstoday.in/entrepreneurship/news/story/ai-based-self-driving-tech-start-up-minus-zero-unveils-indias-first-fully-autonomous-vehicle-384125-2023-06-04">
          <img src="btoday.png" style={{height:"auto",marginTop:"3.1vh"}} alt="btoday"/>
          </a>
        <a href="https://www.financialexpress.com/express-mobility/industry-express-mobility/bengaluru-start-up-unveils-autonomous-pod-plans-global-trials-in-2-years/3113318/">
          <img src="express.png" alt="express" style={{height:"50px",width:"auto",marginTop:"15px"}}/>
          </a>
        <a href="https://www.autocarindia.com/car-news/bengaluru-based-minus-zero-unveils-zpod-autonomous-driving-concept-428368">
          <img src="autocar.png" alt="autocar" style={{height:"50px" , marginTop:"4vh"}} />
          </a>
<a href="https://auto.economictimes.indiatimes.com/amp/news/auto-technology/minus-zero-unveils-indias-first-fully-autonomous-vehicle/100752879">
  <img src="etauto.png" alt="etauto" style={{height:"50px",width:"auto",marginTop:"3.1vh"}} />
  </a>
<a href="https://auto.hindustantimes.com/auto/cars/indias-first-self-driving-car-unveiled-by-bengaluru-based-startup-with-plans-to-emulate-tesla-google/amp-41685937249629.html">
  <img src="hdauto.png" alt="hdauto" style={{height:"50px",width:"auto" ,marginTop:"3.1vh"}}/>
  </a>
<a href="https://www.overdrive.in/news-cars-auto/banglore-based-start-up-minus-zero-unveils-fully-autonomous-driving-tech/">
  <img src="overdrive.png" style={{height:"50px",width:"auto",marginTop:"15px"}} alt="overdrive" />
  </a>
  <a href="https://zeenews.india.com/electric-vehicles/meet-indias-first-self-driving-car-bengaluru-based-startup-unveils-minus-zero-zpod-2617740.html">
    <img src="zeenews.png" alt="zeenews" style={{height:"70px",width:"auto"}}/>
  </a>
  <a href="https://www.hindustantimes.com/car-bike/zpod-autonomous-car-self-driving-vehicles-minus-zero-startup-bengaluru-101685943747299-amp.html">
    <img src="hindustan.png" alt="india" style={{height:"50px",width:"auto",marginTop:"3.1vh"}}/>
  </a>
        <img src="demo.png" alt="Image 3" style={{height:"25vh",marginTop:"-6vh"}} />
        <img src="india.png" style={{height:"50px",marginTop:"14px"}} alt="Image 4" />
        <img src="yourstory.png" style={{height:"50px",marginTop:"14px"}} alt="Image 5" />
        <img src="bbc.webp" style={{marginTop:"-1vh"}} alt="Image 6"/>
        <a href="https://www.zeebiz.com/startups/news-minus-zero-unveils-autonomous-vehicle-based-on-camera-sensor-suite-238534">
          <img src="zee.png" style={{height:"68px",marginTop:"14px",width:"auto"}} alt="image7"/>
          </a>
        <a href="https://www.mobilityoutlook.com/news/minus-zero-unveils-z-pod-autonomous-vehicle/">
          <img src="outlook.png" alt="outlook" style={{height:"105px",width:"auto",marginTop:"0vh"}}/>
          </a>
        <a href="https://www.businesstoday.in/entrepreneurship/news/story/ai-based-self-driving-tech-start-up-minus-zero-unveils-indias-first-fully-autonomous-vehicle-384125-2023-06-04">
          <img src="btoday.png" style={{height:"auto",marginTop:"3.1vh"}} alt="btoday"/>
          </a>
        <a href="https://www.financialexpress.com/express-mobility/industry-express-mobility/bengaluru-start-up-unveils-autonomous-pod-plans-global-trials-in-2-years/3113318/">
          <img src="express.png" alt="express" style={{height:"50px",width:"auto",marginTop:"15px"}}/>
          </a>
        <a href="https://www.autocarindia.com/car-news/bengaluru-based-minus-zero-unveils-zpod-autonomous-driving-concept-428368">
          <img src="autocar.png" alt="autocar" style={{height:"50px" , marginTop:"4vh"}} />
          </a>
<a href="https://auto.economictimes.indiatimes.com/amp/news/auto-technology/minus-zero-unveils-indias-first-fully-autonomous-vehicle/100752879">
  <img src="etauto.png" alt="etauto" style={{height:"50px",width:"auto",marginTop:"3.1vh"}} />
  </a>
<a href="https://auto.hindustantimes.com/auto/cars/indias-first-self-driving-car-unveiled-by-bengaluru-based-startup-with-plans-to-emulate-tesla-google/amp-41685937249629.html">
  <img src="hdauto.png" alt="hdauto" style={{height:"50px",width:"auto" ,marginTop:"3.1vh"}}/>
  </a>
<a href="https://www.overdrive.in/news-cars-auto/banglore-based-start-up-minus-zero-unveils-fully-autonomous-driving-tech/">
  <img src="overdrive.png" style={{height:"50px",width:"auto",marginTop:"15px"}} alt="overdrive" />
  </a>
  <a href="https://zeenews.india.com/electric-vehicles/meet-indias-first-self-driving-car-bengaluru-based-startup-unveils-minus-zero-zpod-2617740.html">
    <img src="zeenews.png" alt="zeenews" style={{height:"70px",width:"auto"}}/>
  </a>
  <a href="https://www.hindustantimes.com/car-bike/zpod-autonomous-car-self-driving-vehicles-minus-zero-startup-bengaluru-101685943747299-amp.html">
    <img src="hindustan.png" alt="india" style={{height:"50px",width:"auto",marginTop:"3.1vh"}}/>
  </a>
        <img src="demo.png" alt="Image 3" style={{height:"25vh",marginTop:"-6vh"}} />
        <img src="india.png" style={{height:"50px",marginTop:"14px"}} alt="Image 4" />
        <img src="yourstory.png" style={{height:"50px",marginTop:"14px"}} alt="Image 5" />
        <img src="bbc.webp" style={{marginTop:"-1vh"}} alt="Image 6"/>
        <a href="https://www.zeebiz.com/startups/news-minus-zero-unveils-autonomous-vehicle-based-on-camera-sensor-suite-238534">
          <img src="zee.png" style={{height:"68px",marginTop:"14px",width:"auto"}} alt="image7"/>
          </a>
        <a href="https://www.mobilityoutlook.com/news/minus-zero-unveils-z-pod-autonomous-vehicle/">
          <img src="outlook.png" alt="outlook" style={{height:"105px",width:"auto",marginTop:"0vh"}}/>
          </a>
        <a href="https://www.businesstoday.in/entrepreneurship/news/story/ai-based-self-driving-tech-start-up-minus-zero-unveils-indias-first-fully-autonomous-vehicle-384125-2023-06-04">
          <img src="btoday.png" style={{height:"auto",marginTop:"3.1vh"}} alt="btoday"/>
          </a>
        <a href="https://www.financialexpress.com/express-mobility/industry-express-mobility/bengaluru-start-up-unveils-autonomous-pod-plans-global-trials-in-2-years/3113318/">
          <img src="express.png" alt="express" style={{height:"50px",width:"auto",marginTop:"15px"}}/>
          </a>
        <a href="https://www.autocarindia.com/car-news/bengaluru-based-minus-zero-unveils-zpod-autonomous-driving-concept-428368">
          <img src="autocar.png" alt="autocar" style={{height:"50px" , marginTop:"4vh"}} />
          </a>
<a href="https://auto.economictimes.indiatimes.com/amp/news/auto-technology/minus-zero-unveils-indias-first-fully-autonomous-vehicle/100752879">
  <img src="etauto.png" alt="etauto" style={{height:"50px",width:"auto",marginTop:"3.1vh"}} />
  </a>
<a href="https://auto.hindustantimes.com/auto/cars/indias-first-self-driving-car-unveiled-by-bengaluru-based-startup-with-plans-to-emulate-tesla-google/amp-41685937249629.html">
  <img src="hdauto.png" alt="hdauto" style={{height:"50px",width:"auto" ,marginTop:"3.1vh"}}/>
  </a>
<a href="https://www.overdrive.in/news-cars-auto/banglore-based-start-up-minus-zero-unveils-fully-autonomous-driving-tech/">
  <img src="overdrive.png" style={{height:"50px",width:"auto",marginTop:"15px"}} alt="overdrive" />
  </a>
  <a href="https://zeenews.india.com/electric-vehicles/meet-indias-first-self-driving-car-bengaluru-based-startup-unveils-minus-zero-zpod-2617740.html">
    <img src="zeenews.png" alt="zeenews" style={{height:"70px",width:"auto"}}/>
  </a>
  <a href="https://www.hindustantimes.com/car-bike/zpod-autonomous-car-self-driving-vehicles-minus-zero-startup-bengaluru-101685943747299-amp.html">
    <img src="hindustan.png" alt="india" style={{height:"50px",width:"auto",marginTop:"3.1vh"}}/>
  </a>
        <img src="demo.png" alt="Image 3" style={{height:"25vh",marginTop:"-6vh"}} />
        <img src="india.png" style={{height:"50px",marginTop:"14px"}} alt="Image 4" />
        <img src="yourstory.png" style={{height:"50px",marginTop:"14px"}} alt="Image 5" />
        <img src="bbc.webp" style={{marginTop:"-1vh"}} alt="Image 6"/>
        <a href="https://www.zeebiz.com/startups/news-minus-zero-unveils-autonomous-vehicle-based-on-camera-sensor-suite-238534">
          <img src="zee.png" style={{height:"68px",marginTop:"14px",width:"auto"}} alt="image7"/>
          </a>
        <a href="https://www.mobilityoutlook.com/news/minus-zero-unveils-z-pod-autonomous-vehicle/">
          <img src="outlook.png" alt="outlook" style={{height:"105px",width:"auto",marginTop:"0vh"}}/>
          </a>
        <a href="https://www.businesstoday.in/entrepreneurship/news/story/ai-based-self-driving-tech-start-up-minus-zero-unveils-indias-first-fully-autonomous-vehicle-384125-2023-06-04">
          <img src="btoday.png" style={{height:"auto",marginTop:"3.1vh"}} alt="btoday"/>
          </a>
        <a href="https://www.financialexpress.com/express-mobility/industry-express-mobility/bengaluru-start-up-unveils-autonomous-pod-plans-global-trials-in-2-years/3113318/">
          <img src="express.png" alt="express" style={{height:"50px",width:"auto",marginTop:"15px"}}/>
          </a>
        <a href="https://www.autocarindia.com/car-news/bengaluru-based-minus-zero-unveils-zpod-autonomous-driving-concept-428368">
          <img src="autocar.png" alt="autocar" style={{height:"50px" , marginTop:"4vh"}} />
          </a>
<a href="https://auto.economictimes.indiatimes.com/amp/news/auto-technology/minus-zero-unveils-indias-first-fully-autonomous-vehicle/100752879">
  <img src="etauto.png" alt="etauto" style={{height:"50px",width:"auto",marginTop:"3.1vh"}} />
  </a>
<a href="https://auto.hindustantimes.com/auto/cars/indias-first-self-driving-car-unveiled-by-bengaluru-based-startup-with-plans-to-emulate-tesla-google/amp-41685937249629.html">
  <img src="hdauto.png" alt="hdauto" style={{height:"50px",width:"auto" ,marginTop:"3.1vh"}}/>
  </a>
<a href="https://www.overdrive.in/news-cars-auto/banglore-based-start-up-minus-zero-unveils-fully-autonomous-driving-tech/">
  <img src="overdrive.png" style={{height:"50px",width:"auto",marginTop:"15px"}} alt="overdrive" />
  </a>
  <a href="https://zeenews.india.com/electric-vehicles/meet-indias-first-self-driving-car-bengaluru-based-startup-unveils-minus-zero-zpod-2617740.html">
    <img src="zeenews.png" alt="zeenews" style={{height:"70px",width:"auto"}}/>
  </a>
  <a href="https://www.hindustantimes.com/car-bike/zpod-autonomous-car-self-driving-vehicles-minus-zero-startup-bengaluru-101685943747299-amp.html">
    <img src="hindustan.png" alt="india" style={{height:"50px",width:"auto",marginTop:"3.1vh"}}/>
  </a>
        <img src="demo.png" alt="Image 3" style={{height:"25vh",marginTop:"-6vh"}} />
        <img src="india.png" style={{height:"50px",marginTop:"14px"}} alt="Image 4" />
        <img src="yourstory.png" style={{height:"50px",marginTop:"14px"}} alt="Image 5" />
        <img src="bbc.webp" style={{marginTop:"-1vh"}} alt="Image 6"/>
        <a href="https://www.zeebiz.com/startups/news-minus-zero-unveils-autonomous-vehicle-based-on-camera-sensor-suite-238534">
          <img src="zee.png" style={{height:"68px",marginTop:"14px",width:"auto"}} alt="image7"/>
          </a>
        <a href="https://www.mobilityoutlook.com/news/minus-zero-unveils-z-pod-autonomous-vehicle/">
          <img src="outlook.png" alt="outlook" style={{height:"105px",width:"auto",marginTop:"0vh"}}/>
          </a>
        <a href="https://www.businesstoday.in/entrepreneurship/news/story/ai-based-self-driving-tech-start-up-minus-zero-unveils-indias-first-fully-autonomous-vehicle-384125-2023-06-04">
          <img src="btoday.png" style={{height:"auto",marginTop:"3.1vh"}} alt="btoday"/>
          </a>
        <a href="https://www.financialexpress.com/express-mobility/industry-express-mobility/bengaluru-start-up-unveils-autonomous-pod-plans-global-trials-in-2-years/3113318/">
          <img src="express.png" alt="express" style={{height:"50px",width:"auto",marginTop:"15px"}}/>
          </a>
        <a href="https://www.autocarindia.com/car-news/bengaluru-based-minus-zero-unveils-zpod-autonomous-driving-concept-428368">
          <img src="autocar.png" alt="autocar" style={{height:"50px" , marginTop:"4vh"}} />
          </a>
<a href="https://auto.economictimes.indiatimes.com/amp/news/auto-technology/minus-zero-unveils-indias-first-fully-autonomous-vehicle/100752879">
  <img src="etauto.png" alt="etauto" style={{height:"50px",width:"auto",marginTop:"3.1vh"}} />
  </a>
<a href="https://auto.hindustantimes.com/auto/cars/indias-first-self-driving-car-unveiled-by-bengaluru-based-startup-with-plans-to-emulate-tesla-google/amp-41685937249629.html">
  <img src="hdauto.png" alt="hdauto" style={{height:"50px",width:"auto" ,marginTop:"3.1vh"}}/>
  </a>
<a href="https://www.overdrive.in/news-cars-auto/banglore-based-start-up-minus-zero-unveils-fully-autonomous-driving-tech/">
  <img src="overdrive.png" style={{height:"50px",width:"auto",marginTop:"15px"}} alt="overdrive" />
  </a>
  <a href="https://zeenews.india.com/electric-vehicles/meet-indias-first-self-driving-car-bengaluru-based-startup-unveils-minus-zero-zpod-2617740.html">
    <img src="zeenews.png" alt="zeenews" style={{height:"70px",width:"auto"}}/>
  </a>
  <a href="https://www.hindustantimes.com/car-bike/zpod-autonomous-car-self-driving-vehicles-minus-zero-startup-bengaluru-101685943747299-amp.html">
    <img src="hindustan.png" alt="india" style={{height:"50px",width:"auto",marginTop:"3.1vh"}}/>
  </a>
        <img src="demo.png" alt="Image 7" style={{height:"25vh",marginTop:"-6vh"}} />
      </div>
    </div>
    </>
  );
};

export default HomeInfiniteScroll;