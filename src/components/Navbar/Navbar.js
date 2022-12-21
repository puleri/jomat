import css from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="heavy-weight align-center pad-medium fixed top-0 bottom-0 left-0 flex col height-100 z-top">
       
        <Link to='/' className="link text-center flex col z-top hover-grow">
            <div className='font-small pad-bottom-tiny'>J</div>
            <div className={css.slash}>/</div>
            <div className={css.m}>M</div>
        </Link>

        <Link to='/rsvp' className={css.nav1}>
            RSVP
        </Link>

        <Link className={css.nav2}>
            Itinerary
        </Link>

        <Link to='/gallery' className={css.nav3}>
            Gallery
        </Link>

        <Link to='/things-to-do' className={css.navLoc}>
            Whidbey Island, WA
        </Link>
    </div>
  );
}

export default Navbar;
