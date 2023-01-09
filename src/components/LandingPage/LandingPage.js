import Navbar from "../Navbar/Navbar";
import mtns from '../../mtns.png';

import engaged from '../../photos/engaged.jpeg'
import kiss from '../../photos/kiss.jpeg'
import handhold from '../../photos/handhold.jpeg'
import walk from '../../photos/walk.jpeg'
import rings from '../../photos/rings.jpg'

import { Link } from 'react-router-dom';





function LandingPage() {
    return (
      <>
      <Navbar className='z-top'/>
      <div className="heavy-weight nav-icon link text-center flex col z-top top-right-date">
            <div className="ten">10</div>
            <div className="slash2">/</div>
            <div className="m2">12</div>
      </div>
      <div className="body-background parallax-container">
        <div className="heavy-weight font-size-h1 parallax-group">
            <div className="parallax-layer base-layer">
            The Big Day
            </div>

            <div className="parallax-layer top-layer">
              <img className="parallax-img" src={mtns} alt='mountains, trees, and lake' />
            </div>
        </div>
        <div className="heavy-weight font-size-h1 parallax-group">
            <div className="parallax-layer base-layer">
              <div className="card">
                <div className="small-caps">the &nbsp;date</div>
                <div className="grey-dash"></div>
                <div className="font-size-h3">Saturday<br/>August 12<br/>2023</div>
              </div>
              <div className="card-right">
                <div className="small-caps">the &nbsp;invite</div>
                <div className="grey-dash"></div>
                <div className="font-size-p raleway light-weight">Join us on this awesome moment where we celebreate the marriage of Joëlle and Matthew <span className="together-in-the-woods">together in the woods</span> of the Pacific Northwest</div>
                <Link className="link raleway rsvp" to="/rsvp">RSVP</Link>
              </div>
            </div>
        </div>
        <div className="heavy-weight font-size-h1 parallax-group pointer-none">
            <div className="parallax-layer photo-layer">
              <div className="photo">
                <img className="photo-width" src={engaged} />
                <p className="link raleway caption">Golden Gardens <span className="caption-light">Matt asked me to marry him</span></p>
              </div>
            </div>
            <div className="parallax-layer photo-layer2">
              <div className="photo-right">
                <img className="photo-width" src={kiss} />
                <p className="link raleway caption">March 18 2022<span className="caption-light">Jo said yes</span></p>
              </div>
            </div>
        </div>
        <div className="heavy-weight font-size-h1 parallax-group">
            <div className="parallax-layer photo-layer-second">
              <div className="photo">
                <img className="photo-width" src={handhold} />
                <p className="link raleway caption">Later on...<span className="caption-light">Jo asked me if I would marry her as well</span></p>
              </div>
            </div>
            <div className="parallax-layer photo-layer2-second">
              <div className="photo-right top">
                <img className="photo-width" src={walk} />
                <p className="link raleway caption">May 11 2022<span className="caption-light">Matt said yes</span></p>
              </div>
            </div>
            <div className="parallax-layer photo-layer2-second2">
              <div className="photo top">
                <img className="photo-width2" src={rings} />
                <p className="link raleway caption">August 12 2023<span className="caption-light">We get married</span></p>
              </div>
            </div>
            <div className="parallax-layer location-h1">
              Whidbey<br/>
              Island,<br/>
              WA
            </div>
            <div className="parallax-layer come-back">
              Come back soon for updates to the Itinerary and Gallery pages
            </div>
        </div>
      </div>
      
      </>
    );
  }
  
  export default LandingPage;