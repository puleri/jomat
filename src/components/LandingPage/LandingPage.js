import Navbar from "../Navbar/Navbar";
import mtns from '../../mtns.png';

import engaged from '../../photos/engaged.jpeg'
import kiss from '../../photos/kiss.jpeg'
import handhold from '../../photos/handhold.jpeg'
import walk from '../../photos/walk.jpeg'
import rings from '../../photos/rings.jpg'




function LandingPage() {
    return (
      <>
      <Navbar className='z-top'/>
      <div className="body-background parallax-container">
        <div className="heavy-weight font-size-h1 parallax-group">
            <div className="parallax-layer base-layer">
            The Big Day
            </div>

            <div className="parallax-layer top-layer">
              <img class="parallax-img" src={mtns} alt='mountains, trees, and lake' />
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
                <div className="font-size-p raleway light-weight">Join us on this awesome moment where we celebreate the marriage of sdjifnisdf</div>
                <a className="link raleway rsvp" href="/rsvp">RSVP</a>
              </div>
            </div>
        </div>
        <div className="heavy-weight font-size-h1 parallax-group">
            <div className="parallax-layer photo-layer">
              <div className="photo">
                <img className="photo-width" src={engaged} />
                <p className="link raleway caption">Golden Gardens <span class="caption-light">Matt asked me to marry him</span></p>
              </div>
            </div>
            <div className="parallax-layer photo-layer2">
              <div className="photo-right">
                <img className="photo-width" src={kiss} />
                <p className="link raleway caption">March 18 2022<span class="caption-light">Jo said yes</span></p>
              </div>
            </div>
        </div>
        <div className="heavy-weight font-size-h1 parallax-group">
            <div className="parallax-layer photo-layer-second">
              <div className="photo">
                <img className="photo-width" src={handhold} />
                <p className="link raleway caption">At home<span class="caption-light">Jo asked me to marry her</span></p>
              </div>
            </div>
            <div className="parallax-layer photo-layer2-second">
              <div className="photo-right top">
                <img className="photo-width" src={walk} />
                <p className="link raleway caption">May 11 2022<span class="caption-light">Matt said yes</span></p>
              </div>
            </div>
            <div className="parallax-layer photo-layer2-second2">
              <div className="photo top">
                <img className="photo-width2" src={rings} />
                <p className="link raleway caption">August 12 2023<span class="caption-light">We get married</span></p>
              </div>
            </div>
            <div className="parallax-layer location-h1">
              Whidbey<br/>
              Island,<br/>
              WA
            </div>
        </div>
      </div>
      
      </>
    );
  }
  
  export default LandingPage;