'use client'

import styles from './page.module.css'
import { Navbar } from '../components/Navbar'
import SwiperSlider from './Slider';

export default function Home() {

  return (
    <main style={{ backgroundColor: 'black', color: 'white', paddingBottom: '12px' }}>
      <Navbar />
      <div className='content'>
        <div className='infoDiv' >
          <p className='p1' >FIRST IN THE FAMILY</p>
          <p className='p2' >They are the global citizens of tomorrow. Start your study abroad journey today.</p>
          <div style={{ display: 'flex', columnGap: '10px' , alignItems : 'center'}}>
            <span><svg xmlns="http://www.w3.org/2000/svg" height={15} width={15} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            </span>
            <p>Live on</p>
            <span><img src='/icons8-disney-plus.svg' /></span>
          </div>
          <div className='btnGrp' >
            <button className='btn btnColor'>Get Your Shortlist for FREE</button>
            <button className='btn' >Talk to an Expert</button>
            <p className='pSmall'>95% of our students get an admit in less than 4 weeks</p>
            <p className='pSmall' style={{ marginTop: '30px' }}>Our students finished university to work at global offices of:</p>
            <div className='logos'>
              <span><img width={60} src='/google.svg' /></span>
              <span><img width={60} height={60} src='/BCS_BIG.svg' /></span>
              <span><img width={60} src='/amazon.svg' /></span>
              <span><img width={60} height={40} src='/ey.svg' /></span>
              <span><img width={60} height={50} src='/Accenture.svg' /></span>
            </div>
          </div>
        </div>
        <div className='carosal' >
          <SwiperSlider/>
        </div>
          <img className='whatsapp' src="/whatsapp.svg" width={60} />
      </div>
    </main>
  )
}
