import css from './Navbar.module.css';

function Navbar() {
  return (
    <div className="heavy-weight align-center pad-medium fixed top-0 bottom-0 left-0 flex col height-100">
        <div className="text-center flex col">
            <div className='font-small pad-bottom-tiny'>J</div>
            <div className={css.slash}>/</div>
            <div className={css.m}>M</div>
        </div>
        <div className={css.nav1}>
            RSVP
        </div>
        <div className={css.nav2}>
            Registry
        </div>
        <div className={css.nav3}>
            Gallery
        </div>
        <div className={css.navLoc}>
            Whidbey Island, WA
        </div>
    </div>
  );
}

export default Navbar;
