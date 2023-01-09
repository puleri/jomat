import Navbar from "../Navbar/Navbar";
import { useState } from 'react'
import mtns from '../../mtns.png'

import firebase from '../../firebase'
import 'firebase/firestore';



function RSVP() {

  const [rsvp, setRsvp] = useState({
    name: '',
    response: '',
    numberGuests: '',
    dietary: ''
  })

  const [formOpen, setFormOpen] = useState(false)

  const [notification, setNotification] = useState({
    active: false,
    error: false,
    message: ''
  })


  // function for creating database safe IDs
  // str = str.replace(/\s+/g, '-').toLowerCase();

  const handleSendRSVP = () => {
    if (!rsvp.name || !rsvp.response || !rsvp.numberGuests || !rsvp.dietary) {
      console.log("somehing mishing!")
        setNotification({
            active: true,
            error: true,
            message: 'Fill out name before submitting'
        })

        setTimeout(() => {
            setNotification({
                active: false,
                error: false,
                message: ''
            })
          }, "4000")
          return
    }
    const db = firebase.firestore();
    // Add a new document in collection "rsvp-going" if guests selects yes
    if (rsvp.response === "accepts") {
      db.collection("rsvp-going").doc().set({
        names: rsvp.name,
        dietary: rsvp.dietary,
        numberGuests: rsvp.numberGuests
    })
    .then(() => {
        setFormOpen(false)
        setNotification({
            active: true,
            error: false,
            message: 'We are so very excited to have you. Thank you for your response and we look forward to sharing our beautiful moment with you'
        })
        setTimeout(() => {
            setNotification({
                active: false,
                message: ''
            })
          }, "4000")
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
    }
    if (rsvp.response === "declines") {
      db.collection("rsvp-unable-to-attend").doc().set({
        names: rsvp.name,
        dietary: rsvp.dietary,
        numberGuests: rsvp.numberGuests
    })
    .then(() => {
        setFormOpen(false)
        setNotification({
            active: true,
            error: false,
            message: 'We will miss you so much, and will carry you in spirit on our special day'
        })
        setTimeout(() => {
            setNotification({
                active: false,
                message: ''
            })
          }, "4000")
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
    }
}


  return (
    <>
     <div className="overflow-hidden">
      <Navbar />
        <img className="mtns-rsvp" src={mtns} />
      <div className="flex just-center nav-pull-margin">

        <div className="relative padding-medium col text-center flex">
          <hr className="middle-hr-rsvp" />

          <h1 className="raleway light-weight black font-size-h2">
            RSVP
          </h1>
          <div className="text-align-left flex col">
            <label
              className="raleway font-size-h5 flex align-center"
            >Name<span className="font-size-p">(s)</span> 
            <input
              className="raleway font-size-h5 text-input"
              name="guestName"
              type="text"
              value={rsvp.name}
              onChange={(e) => setRsvp({ ...rsvp, name: e.target.value })} /></label>

            <label
              className="raleway font-size-h5 joyfully"
            >Joyfully accepts
            <input
              className="raleway font-size-h5 radio-input"
              name="guestName"
              type="radio"
              value="accepts"
              checked={rsvp.response === 'accepts'}
              onChange={() => { }}
              onClick={(e) => setRsvp({ ...rsvp, response: 'accepts' })} /></label>


            <label
              className="raleway font-size-h5"
            >Regretfully declines
            <input
              className="raleway font-size-h5 radio-input no"
              name="guestName"
              type="radio"
              value={"declines"}
              checked={rsvp.response === 'declines'}
              onChange={() => { }}
              onClick={(e) => setRsvp({ ...rsvp, response: 'declines' })} /></label>


            <label
              className="raleway font-size-h5 flex align-center no-guests-label"
            >No. of guests
            <input
              className="raleway font-size-h5 no-guests-input"
              name="guestName"
              type="number"
              value={rsvp.numberGuests}
              onChange={(e) => setRsvp({ ...rsvp, numberGuests: e.target.value })} /></label>

            {/* <svg viewBox="0 0 340 333">

              <path className="path" fill="white" stroke="black" strokeWidth="4" d="M66.039,133.545c0,0-21-57,18-67s49-4,65,8
                s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41
                C46.039,146.545,53.039,128.545,66.039,133.545z"/>

            </svg> */}







              <button onClick={() => handleSendRSVP()} className="mail-svg flex justify-center submit-btn">
              <h4 className="raleway font-size-h5 light-weight">
                Send
                </h4>
                <svg id="swoop" width="220" height="70" viewBox="0 0 119 49">
                  <path fill="none" strokeWidth="1" className="path" d="M117.518 21.1259C114.659 21.1259 112.081 22.6453 109.603 24.0388C106.527 25.7693 102.874 26.6367 99.7756 28.3053C92.528 32.2078 82.1777 33.8369 74.0887 33.8369C65.1509 33.8369 58.6452 33.2231 52.1091 26.687C49.5227 24.1006 46.5999 20.7534 46.0478 16.8888C45.3544 12.0349 46.0055 8.36163 49.6081 5.11933C52.3831 2.62181 56.4425 1 60.0535 1C63.8828 1 67.2505 1.0541 70.2636 3.76583C71.382 4.77242 72.4517 6.0421 73.1471 7.35554C73.9128 8.8018 74.3883 11.4375 75.2656 12.5341C77.1166 14.8478 76.2072 19.9816 76.2072 22.9796C76.2072 24.9299 76.4444 26.7714 75.5598 28.5407C75.0246 29.6112 73.1602 31.731 73.0294 32.7777C72.9016 33.7997 70.9225 35.3025 70.3813 36.2497C69.2388 38.2489 66.9509 38.7869 65.6146 40.4573C63.8849 42.6194 58.8386 43.8392 56.3461 45.2239C54.4064 46.3015 52.0667 46.6457 49.9906 47.1071C38.962 49.5579 28.6562 49.052 18.7131 43.3702C15.6882 41.6417 12.4539 39.4435 9.88598 37.1324C8.06254 35.4913 5.98297 33.9055 4.82509 31.7184C4.17562 30.4916 2.43638 28.5407 1 28.5407" stroke="#333333" strokeLinecap="round"/>
                </svg>
                <svg id='paperplane' width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11.1509C1.21534 11.1509 1.63676 11.1022 1.80296 10.9713C1.9241 10.876 2.26665 10.6793 2.41613 10.6373C2.99397 10.4748 3.63798 9.85783 4.252 9.85783C4.90293 9.85783 5.33718 9.10472 5.89078 8.94905C6.11214 8.88681 6.48891 8.6527 6.66454 8.51442C6.83423 8.38083 7.29572 8.10603 7.504 8.04747C7.76675 7.97359 7.96076 7.7343 8.22667 7.65953C8.4105 7.60784 8.61326 7.49549 8.78144 7.40091C9.12022 7.21039 9.45235 7.06168 9.8034 6.89803C10.5929 6.52996 11.3051 6.04145 12.1028 5.66958C13.024 5.24012 13.7963 4.60635 14.7818 4.28307C15.1682 4.15631 15.5214 3.94415 15.8804 3.74787C16.1787 3.58476 16.5831 3.51159 16.8476 3.27732C17.3694 2.81511 17.9755 2.588 18.5739 2.26079C18.8449 2.11265 19.1354 2.01865 19.3952 1.89081C19.5227 1.82807 19.6043 1.70126 19.7236 1.63219C19.8331 1.5688 20.1163 1.43835 20.1835 1.35561C20.2893 1.22545 20.8179 1 20.9719 1C21.1319 1 20.5603 1.5383 20.4828 1.5819C19.9716 1.86939 19.7511 2.64536 19.4937 3.10131C19.3549 3.34715 19.4282 3.65843 19.3149 3.9095C19.1911 4.1836 19.2022 4.55376 19.136 4.84701C18.9716 5.57505 18.9353 6.45155 18.5119 7.10637C18.2032 7.5838 18.0516 8.15933 17.7527 8.64374C17.4523 9.13074 17.201 9.79606 17.0301 10.3427C16.673 11.4849 16.0626 12.5556 15.6212 13.6725C15.2775 14.5424 14.8985 15.5987 14.8621 16.5317C14.8564 16.6769 14.8734 17.4653 14.7635 17.5518C14.5704 17.7039 14.8667 18.2574 14.7161 18.4427C14.5881 18.6001 14.704 19.2713 14.4022 18.7516C14.3026 18.58 13.9252 18.457 13.7452 18.457C13.4947 18.457 13.2082 18.3502 12.9897 18.2307C12.9017 18.1826 12.8128 18.0332 12.7233 18.008C12.5996 17.9733 12.4123 17.9378 12.3145 17.8608C11.8743 17.5142 11.3589 17.3318 10.9859 16.873C10.8326 16.6843 10.5449 16.6131 10.3801 16.4671C10.2727 16.3719 10.1204 16.348 10.0151 16.2444C9.91747 16.1483 9.82333 16.0326 9.70485 15.9678C9.60315 15.9122 9.49305 15.8061 9.37637 15.8061C9.18298 15.8061 9.18897 15.9295 9.06613 16.0504C8.91824 16.1959 8.87875 16.5212 8.7194 16.6467C8.32365 16.9582 8.22236 17.6672 7.73759 17.9398C7.5525 18.0439 7.44208 18.3894 7.27406 18.5217C7.13682 18.6297 6.99798 19.0597 6.97843 19.2329C6.96856 19.3203 6.89969 19.5562 6.78133 19.5562C6.71725 19.5562 6.64994 19.2067 6.64994 19.1359C6.64994 18.8932 6.75431 18.3106 6.59884 18.1194C6.5173 18.0191 6.62308 17.8421 6.53315 17.7314C6.48447 17.6716 6.47622 17.3482 6.4565 17.2609C6.39328 16.9809 6.38715 16.678 6.38715 16.388C6.38715 16.0807 6.32146 15.7978 6.32146 15.5152C6.32146 15.2591 6.13964 15.0272 6.12436 14.7717C6.10885 14.512 5.74055 14.3919 5.56594 14.2544C5.35338 14.0871 5.17922 13.7723 4.87612 13.7372C4.43723 13.6864 3.95087 13.1858 3.64248 12.8823C3.27771 12.5233 2.69117 12.3914 2.29934 12.0058C2.14386 11.8528 1.91326 11.7248 1.78836 11.5712C1.6277 11.3736 1.30421 11.3618 1.19709 11.1509" stroke="#333333" strokeLinecap="round"/>
                  <path d="M6.65039 19.7501C6.9995 19.7501 7.59906 19.4271 7.84754 19.1826C8.16214 18.873 8.63312 18.7322 8.96438 18.4714C9.33469 18.1798 9.88205 18.1212 10.2491 17.7961C10.5106 17.5645 11.3003 17.5804 11.4463 17.2932" stroke="#333333" strokeLinecap="round"/>
                  <path d="M6.125 14.5777C6.36284 14.5777 6.57143 14.2651 6.74912 14.1252C6.95744 13.9611 7.18064 13.7328 7.37324 13.5433C8.13567 12.7929 8.83094 11.9369 9.60694 11.2156C10.1413 10.7189 10.718 10.2886 11.2494 9.79322C11.9456 9.14413 12.8096 8.71033 13.4831 8.04752C13.8989 7.63826 14.4625 7.21044 14.7934 6.72208C14.9621 6.47301 15.4517 6.01706 15.7168 5.8636C15.8458 5.78889 16.035 5.5633 16.1109 5.43256C16.1898 5.29673 16.4234 5.24283 16.5051 5.1021C16.6483 4.85545 17.0376 4.52464 17.2935 4.37652C17.505 4.25407 17.7878 3.948 17.9505 3.74792C18.1868 3.45717 18.4877 3.21565 18.7534 2.95409C19.1608 2.55319 19.6671 2.34111 19.9214 1.84058" stroke="#333333" strokeLinecap="round"/>
                  <path d="M9.41016 15.6121C9.44924 15.4198 9.65383 15.2889 9.72404 15.1092C9.79999 14.9149 9.92007 14.6878 10.0343 14.5129C10.2239 14.2226 10.4515 13.8881 10.5927 13.5754C10.805 13.1053 11.1694 12.6944 11.5125 12.3146C11.852 11.9387 12.3112 11.5568 12.5636 11.1221C12.7146 10.862 13.0337 10.655 13.2206 10.3893C13.568 9.89551 13.9855 9.36353 14.4177 8.93818C14.9302 8.43384 15.5439 7.9741 16.0091 7.43314C16.2669 7.13328 16.7047 6.86726 16.8996 6.53155C16.9961 6.36532 17.2787 6.12255 17.4252 5.97838C17.6554 5.75183 17.7389 5.43713 17.9508 5.20252C18.1554 4.97597 18.3225 4.66287 18.4763 4.39791C18.6175 4.15473 18.888 3.93534 19.0019 3.68311C19.1069 3.45071 19.3408 3.24267 19.5129 3.05451C19.7107 2.83823 19.8468 2.56062 20.0531 2.35767" stroke="#333333" strokeLinecap="round"/>
                  <path d="M7.70117 13.3491C7.70117 13.931 8.16464 14.448 8.28879 14.9978C8.35998 15.3131 8.27571 15.7043 8.40924 16C8.45131 16.0932 8.48954 16.3565 8.48954 16.4526C8.48954 16.6007 8.55523 16.735 8.55523 16.9052" stroke="#333333" strokeLinecap="round"/>
                  <path d="M8.88281 12.25C8.88281 12.7935 9.04907 13.1135 9.30984 13.5754C9.50978 13.9296 9.86827 14.2733 9.86827 14.7069" stroke="#333333" strokeLinecap="round"/>
                  <path d="M10.0664 11.1509C10.0664 11.8621 10.6855 12.434 10.9862 13.0259" stroke="#333333" strokeLinecap="round"/>
                  <path d="M11.1172 10.1165C11.1172 10.4427 11.3184 10.7056 11.4785 10.9893C11.561 11.1355 11.7091 11.5392 11.8399 11.6035" stroke="#333333" strokeLinecap="round"/>
                  <path d="M12.168 9.27588C12.168 9.44881 12.2543 9.80937 12.3979 9.92244C12.5304 10.0268 12.5523 10.4202 12.6278 10.569" stroke="#333333" strokeLinecap="round"/>
                  <path d="M13.2852 8.5647C13.2852 9.00261 13.4267 9.36048 13.6136 9.7285" stroke="#333333" strokeLinecap="round"/>
                  <path d="M14.4023 7.53027C14.4023 7.79986 14.6137 8.50712 14.8622 8.62942" stroke="#333333" strokeLinecap="round"/>
                  <path d="M15.2559 6.5603C15.2559 6.87295 15.5164 7.20239 15.65 7.46548" stroke="#333333" strokeLinecap="round"/>
                  <path d="M16.3066 5.59058C16.3066 5.82753 16.4154 6.323 16.6351 6.4311" stroke="#333333" strokeLinecap="round"/>
                  <path d="M17.3594 4.42676C17.4723 4.44065 17.753 5.13695 17.8193 5.26728" stroke="#333333" strokeLinecap="round"/>
                </svg>
            </button>
            
          </div>
          <hr className="bottom-left-hr-rsvp" />
        </div>
        



        <div className="padding-small text-center flex col width-50">
          <div className="margin-top-small padding-left-medium flex col">
            <em className="font-size-h5 text-align-right">
              Joëlle<br />and<br />Matthew
            </em>
            <hr className="top-right-hr-rsvp" />
            <h4 className="font-size-h6 text-align-left raleway light-weight margin-left-small">August 12 2023<br />5307 Langley Rd.<br />Langley, WA</h4>
          </div>
          <h3 className="margin-top-large text-align-left font-size-h4 raleway light-weight">
            Dietary Restrictions
            <br/><sub className="font-size-small leave-message raleway text-align-left">Feel free to leave a note for us &hearts;</sub>
          </h3>
          <textarea value={rsvp.dietary} onChange={(e) => setRsvp({ ...rsvp, dietary: e.target.value })} className="raleway glass-textarea"/>
        </div>

      </div>
      </div>
    </>
  );
}

export default RSVP;