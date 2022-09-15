import React from 'react';
import '../styles/home';

// Icons
import CircleArrowIcon from '../assets/images/circle-arrow-01.png';
import BackgroundImage01 from '../assets/images/bg-01.png';
import UserIcon01 from '../assets/images/user-01.jpeg';
import UserIcon02 from '../assets/images/user-02.jpeg';
import UserIcon04 from '../assets/images/user-04.jpg';

// Components
import CreditCard from '../components/credit-card/CreditCard.jsx';
import Avatar from '../components/avatar/Avatar.jsx';
import PillButton from '../components/pill-button/PillButton';

const Home = () => {
   return(
      <div className='home'>
         <section className='home__introduction'>
            <div className='home__introduction__hero-text-container'>
               <h1>Make Simple</h1>
               <span />
               <h1>with One <font color='#F25C44'>Card</font></h1>
            </div>
            <div className='home__introduction__get-started'>
               <p>GET STARTED NOW</p>
               <img src={CircleArrowIcon} />
            </div>
         </section>

         <section className='home__mission-statement'>
            <p>
               <span style={{ color: '#fff', fontWeight: '500', fontSize: 18 }}>CARD </span> 
               is the digital payment service. With one card you can manage your daily financials and can also 
               <span style={{ color: '#F25C44', fontWeight: '600', }}> get more benefits</span>.
            </p>
         </section>

         <section className='home__card-section'>
            <CreditCard
               cardholderName='Malcolm Lowery'
               cardNumber='5154-2847-1601-9396'
               validDate='09/22'
               cardColor='#45454555'
               style={{ 
                  position: 'absolute',
                  zIndex: 10,
                  zoom: 0.7,
               }}
            />
            <CreditCard
               cardholderName='Malcolm Lowery'
               cardNumber='5154-2847-1601-9396'
               validDate='09/22'
               cardColor='#45454555'
               style={{ 
                  marginTop: 80,
                  zoom:  0.6,
               }}
            />
         </section>

         <section className='home__users'>
            <div className='home__users__avatars'>
               <Avatar profileImage={UserIcon01} />
               <Avatar imageTranslateX={-10} profileImage={UserIcon02} style={{ position: 'relative', left: -10 }} />
               <Avatar imageTranslateX={-3} profileImage={UserIcon04} style={{ position: 'relative', left: -20 }} />
               <PillButton style={{ position: 'relative', left: -30 }}>
                  <h1 style={{ color: '#fff', fontSize: 17, fontWeight: '400', letterSpacing: 0.3 }}>20k+</h1>
               </PillButton>
            </div>
            <div className='home__users__text'>
               <div className='orange-dot'></div>
               <p>Recommended by people</p>
            </div>
         </section>

         <section className='home__statistics'>
            <div className='home__statistics__item'>
               <h1>2.4k<span style={{ color: '#F25C44' }}>+</span></h1>
               <p>Total customers</p>
            </div>
            <div className='home__statistics__item'>
               <h1>4.9/<span style={{ color: '#F25C44' }}>5</span></h1>
               <p>Customer review</p>
            </div>
            <div className='home__statistics__item'>
               <h1><span style={{ color: '#F25C44' }}>+</span>796</h1>
               <p>Partners & Investors</p>
            </div>
            <div className='home__statistics__item'>
               <h1>89<span style={{ color: '#F25C44' }}>%</span></h1>
               <p>Company growth</p>
            </div>
         </section>

         <div className='home_line-divider'></div>

         <section className='home__learn-more'>
           <div>
            <h1 className='home__learn-more__title'>The <span style={{ color: '#F25C44' }}>Advantages</span></h1>
               <div className='home__learn-more__card'>
                  <h1 className='home__learn-more__card__title'>All payment <span style={{ display: 'block'}}>solutions</span></h1>
                  <p className='home__learn-more__card__body'>
                     There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
                     alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                  <img className='home__learn-more__card__image' src={BackgroundImage01} />
               </div>
               <div className='home__learn-more__card'>
                  <h1 className='home__learn-more__card__title'>Take control of <span style={{ display: 'block'}}>your card</span></h1>
                  <p className='home__learn-more__card__body'>
                     Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
                  </p>
                  <img className='home__learn-more__card__image' src={BackgroundImage01} />
               </div>
           </div>
         </section>

         <div className='home_line-divider'></div>

         <section className='home__we-serve'>
            <h1 className='home__we-serve__title'>
               We serve the best
               <span style={{ display: 'block'}}>services of our 
                  <span style={{ color: '#F25C44' }}> products</span>
               </span>
            </h1>

            <div className='home__we-serve__credit-card'>
               <CreditCard
                  cardholderName='Malcolm Lowery'
                  cardNumber='5154-2847-1601-9396'
                  validDate='09/22'
                  cardColor='#F25C44'
                  style={{
                     position: 'relative',
                     rotate: '30deg',
                     transform: 'skew(-45deg)',
                     zoom: 0.2,
                  }}
               />
               <CreditCard
                  cardholderName='Malcolm Lowery'
                  cardNumber='5154-2847-1601-9396'
                  validDate='09/22'
                  cardColor='#4495f2'
                  style={{ 
                     bottom: 100,
                     left: -140,
                     position: 'relative',
                     rotate: '35deg',
                     transform: 'skew(-45deg)',
                     zoom: 0.2,
                  }}
               />
            </div>

            <div className='home__we-serve__item'>
               <h1>CARD made with best material</h1>
               <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
               <div className='home__we-serve__item__button'>
                  <p>LEARN MORE</p>
                  <img src={CircleArrowIcon} />
               </div>
            </div>
            
            <div className='home__we-serve__item-divider'></div>

            <div className='home__we-serve__item'>
               <h1>Designed with love, so we produce<span style={{ display: 'block'}}>premium high quality design</span></h1>
               <div className='home__we-serve__item__button'>
                  <p>LEARN MORE</p>
                  <img src={CircleArrowIcon} />
               </div>
            </div>

            <div className='home__we-serve__item-divider'></div>

            <div className='home__we-serve__item'>
            <h1>We launch our new product special limited edition with special benefits</h1>
               <div className='home__we-serve__item__button'>
                  <p>LEARN MORE</p>
                  <img src={CircleArrowIcon} />
               </div>
            </div>
         </section>
      </div>
   )
};

export default Home;