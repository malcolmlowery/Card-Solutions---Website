import React from 'react';
import '../styles/home';

// Icons
import CircleArrowIcon from '../assets/images/circle-arrow-01.png';
import StarIcon from '../assets/images/star-01.png';
import EmblemIcon from '../assets/images/emblem-01.png';
import UserIcon01 from '../assets/images/user-01.jpeg';
import UserIcon02 from '../assets/images/user-02.jpeg';
import UserIcon03 from '../assets/images/user-03.jpeg';

// Components
import CreditCard from '../components/credit-card/CreditCard.jsx';
import Avatar from '../components/avatar/Avatar.jsx';
import PillButton from '../components/pill-button/PillButton';

const Home = () => {
   return(
      <div className='home'>
         <section className='home__introduction'>
            <div className='home__hero-text-container'>
               <img className='home__hero-text-container__image' src={StarIcon} />
               <h1>Make Simple</h1>
               <span />
               <h1>with One <font color='#F25C44'>Card</font></h1>
            </div>
            <div className='home__get-started'>
               <p>GET STARTED NOW</p>
               <img src={CircleArrowIcon} />
            </div>
         </section>
         <section className='home__card-section'>
            <div className='home__card-section_text-01'>
               <p><span style={{ fontWeight: '400', fontSize: 18 }}>CARD</span> is the digital payment service. With one card you can</p>
               <span/>
               <p>manage your daily financials and can also <span style={{ color: '#F25C44', fontWeight: '500' }}>get more benefits</span>.</p>
            </div>
            <div className='home__card-section__credit-cards'>
               <CreditCard
                  cardholderName='Malcolm Lowery'
                  cardNumber='5154-2847-1601-9396'
                  validDate='09/22'
                  cardColor='#45454555'
                  style={{ 
                     position: 'relative',
                     zIndex: 10,
                  }}
               />
               <CreditCard
                  cardholderName='Carlos Diaz'
                  cardNumber='5147-2598-4579-5819'
                  validDate='02/25'
                  cardColor='#adadad54'
                  style={{
                     position: 'relative', 
                     zIndex: 9,
                     top: -160,
                     left: 250
                  }}
               />
               <CreditCard
                  cardholderName='Terra R Charles'
                  cardNumber='5225-0565-3902-5668'
                  validDate='05/23'
                  cardColor='#F25C44'
                  style={{
                     position: 'relative',
                     zIndex: 8,
                     top: -320,
                     left: 500
                  }}
               />
            </div>
            <img className='home__card-section__emblem' src={EmblemIcon} />
            <div className='home__card-section__users'>
               <Avatar profileImage={UserIcon01} style={{ position: 'absolute' }} />
               <Avatar imageTranslateX={-10} profileImage={UserIcon02} style={{ position: 'absolute', left: 34 }} />
               <Avatar imageTranslateX={-10} profileImage={UserIcon03} style={{ position: 'absolute', left: 74 }} />
               <PillButton style={{ position: 'absolute', left: 112, height: 45 }}>
                  <h1 style={{ color: '#fff', fontSize: 17, fontWeight: '500', letterSpacing: 0.3 }}>20k+</h1>
               </PillButton>
               <div className='home__card-section__users__text'>
                  <div className='orange-dot'></div>
                  <p>Recommended by people</p>
               </div>
            </div>
         </section>
      </div>
   )
};

export default Home;