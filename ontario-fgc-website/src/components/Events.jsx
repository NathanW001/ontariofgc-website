import './Events.css'
import Spacer from './Spacer'
import incendium_logo from '../assets/orgs/incendium_logo.png'
import toronto_top_tiers_logo from '../assets/orgs/toronto_top_tiers_logo.png'

// put the assets here

import { useState } from 'react'

function Events() {
  const [currentInfo, setCurrentInfo] = useState(0)
  return (
    <>
      <div id="events-section">
        <div className='events-intro-section'>
          <h1 className='events-title'>Events</h1>
          <div className='events-paragraph'>
            <p>On the schedule and map below you can find upcoming events. You can click on the map to see and event, and find more information on the event.</p>
          </div>
        </div>

        <div className='events-listings'>
          <div className='events-listings-buttons'>
            <button className='organization-button' onClick={() => {setCurrentInfo(0)}}><img src={incendium_logo} width={32} height={32}/>Incendium Gaming</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(1)}}><img src={toronto_top_tiers_logo} width={32} height={32}/>Toronto Top Tiers</button>
          </div>
          <div className='events-listings-descriptions'>
           {/* content here */}
          </div>
        </div>
      </div>
      <Spacer/>
    </>
  )
}

export default Events
