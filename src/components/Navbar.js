'use client'

import React, { useState } from "react"

export const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const mainDivStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    margin: '0px 3% 0px 5%',
    padding: '2%',
  }

  const iconStyle = { border: '1px solid', borderRadius: '5px', padding: '5px' }

  return (<>
    <div style={mainDivStyle}>
      <div ><img src="https://leverageeduhome.gumlet.io/logo-dark.svg" /></div>

      <div className='NavContent'>
        <div>Study Abroad</div>
        <div>Accomodation</div>
        <div>Test Prep</div>
        <div>Finance</div>
        <div>Community</div>
        <div>Product</div>
        <div>More</div>
        <div>
          <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height={30} width={30}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <div><svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height={30} width={30}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
        </div>
        <div><svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={30} width={30} >
          <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
        </svg>
        </div>
      </div>

      <div className="Hmburger" onClick={() => setMenu(!menu)} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height={30} width={30}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </div>
    <div className={`MobileMenu ${menu ? 'active' : ''}`}>
      <div>Study Abroad</div>
      <div>Accomodation</div>
      <div>Test Prep</div>
      <div>Finance</div>
      <div>Community</div>
      <div>Product</div>
      <div>More</div>
      <div>
        <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height={30} width={30}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
      <div><svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height={30} width={30}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
      </div>
      <div><svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={30} width={30} >
        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
      </svg>
      </div>
    </div>
  </>)
}
