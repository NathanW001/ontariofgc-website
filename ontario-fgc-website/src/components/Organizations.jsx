import './Organizations.css'
import Spacer from './Spacer'
import incendium_logo from '../assets/orgs/incendium_logo.png'
import toronto_top_tiers_logo from '../assets/orgs/toronto_top_tiers_logo.png'
import no_style_logo from '../assets/orgs/no_style_logo.png'
import dkm_network_logo from '../assets/orgs/dkm_network_logo.png'
import just_mids_team_logo from '../assets/orgs/just_mids_team_logo.png'
import whiff_city_logo from '../assets/orgs/whiff_city_logo.png'
import downtown_rumble_logo from '../assets/orgs/downtown_rumble_logo.png'
import battle_city_logo from '../assets/orgs/battle_city_logo.png'

import Incendium from './org_components/Incendium'
import TorontoTopTiers from './org_components/TorontoTopTiers'

import { useState } from 'react'
import NoStyle from './org_components/NoStyle'
import DkmNetwork from './org_components/DkmNetwork'
import JustMidsTeam from './org_components/JustMidsTeam'
import WhiffCity from './org_components/WhiffCity'
import DowntownRumble from './org_components/DowntownRumble'
import BattleCity from './org_components/BattleCity'

function Organizations() {
  const [currentInfo, setCurrentInfo] = useState(0)
  return (
    <>
      <div id="organizations-section">
        <div className='organizations-intro-section'>
          <h1 className='organizations-title'>Organizations</h1>
          <div className='organizations-paragraph'>
            <p>Listed below are some of the popular fighting game organizations and coordinators that are active in Ontario. You can scroll through them and click on them to view more information! They will be the ones to host events, so look through to find one near you. </p>
          </div>
        </div>

        <div className='organizations-listings'>
          <div className='organizations-listings-buttons'>
            <button className='organization-button' onClick={() => {setCurrentInfo(0)}}><img src={incendium_logo} width={32} height={32}/>Incendium Gaming</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(1)}}><img src={toronto_top_tiers_logo} width={32} height={32}/>Toronto Top Tiers</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(2)}}><img src={no_style_logo} width={32} height={32}/>No Style</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(3)}}><img src={dkm_network_logo} width={32} height={32}/>DKM Network</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(4)}}><img src={just_mids_team_logo} width={32} height={32}/>Just Mids Team</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(5)}}><img src={whiff_city_logo} width={32} height={32}/>Whiff City</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(6)}}><img src={downtown_rumble_logo} width={32} height={32}/>Downtown Rumble</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(7)}}><img src={battle_city_logo} width={32} height={32}/>Battle City</button>
          </div>
          <div className='organizations-listings-descriptions'>
            {currentInfo == 0 ? <Incendium/> : <></>}
            {currentInfo == 1 ? <TorontoTopTiers/> : <></>}
            {currentInfo == 2 ? <NoStyle/> : <></>}
            {currentInfo == 3 ? <DkmNetwork/> : <></>}
            {currentInfo == 4 ? <JustMidsTeam/> : <></>}
            {currentInfo == 5 ? <WhiffCity/> : <></>}
            {currentInfo == 6 ? <DowntownRumble/> : <></>}
            {currentInfo == 7 ? <BattleCity/> : <></>}
          </div>
        </div>
      </div>
      <Spacer/>
    </>
  )
}

export default Organizations
