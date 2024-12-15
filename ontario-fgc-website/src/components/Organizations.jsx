import './Organizations.css'
import Spacer from './Spacer'
import incendium_logo from '../assets/incendium_logo.png'
import toronto_top_tiers_logo from '../assets/toronto_top_tiers_logo.png'

import Incendium from './org_components/Incendium'

function Organizations() {

  return (
    <>
      <div id="organizations-section">
        <div className='organizations-intro-section'>
          <h1 className='organizations-title'>Organizations</h1>
          <div className='organizations-paragraph'>
            <p>Listed below are some of the popular fighting game organizations and coordinators that are active in Ontario. They will be the ones to host events, so look through to find one near you.</p>
          </div>
        </div>

        <div className='organizations-listings'>
          <div className='organizations-listings-buttons'>
            <button className='organization-button' onClick={() => {}}><img src={incendium_logo} width={32} height={32}/>Incendium Gaming</button>
            <button className='organization-button' onClick={() => {}}><img src={toronto_top_tiers_logo} width={32} height={32}/>Toronto Top Tiers</button>
          </div>
          <div className='organizations-listings-descriptions'>
            <Incendium/>
          </div>
        </div>
      </div>
      <Spacer/>
    </>
  )
}

export default Organizations
