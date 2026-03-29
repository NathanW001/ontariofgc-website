import './Organizations.css'
import Spacer from './Spacer'
import incendium_logo from '../assets/orgs/incendium_logo.png'
import toronto_top_tiers_logo from '../assets/orgs/toronto_top_tiers_logo.png'
import no_style_logo from '../assets/orgs/no_style_logo.png'
import dkm_network_logo from '../assets/orgs/dkm_network_logo.png'
import just_mids_team_logo from '../assets/orgs/just_mids_team_logo.png'
import downtown_rumble_logo from '../assets/orgs/downtown_rumble_logo.png'
import battle_city_logo from '../assets/orgs/battle_city_logo.png'
import toronto_melee_logo from '../assets/orgs/toronto_melee_logo.png'
import north_bay_fgc_logo from '../assets/orgs/north_bay_fgc_logo.png'
import london_ontario_fgc_logo from '../assets/orgs/london_ontario_fgc_logo.png'
import smash_class_logo from '../assets/orgs/smash_class_logo.png'
import windsor_fgc_logo from '../assets/orgs/windsor_fgc_logo.png'
import uwfgc_logo from '../assets/orgs/uwfgc_logo.png'
import seneca_fgc_logo from '../assets/orgs/seneca_fgc_logo.png'
import crit_hit_fight_night_logo from '../assets/orgs/crit_hit_fight_night_logo.png'
import yufgc_logo from '../assets/orgs/yufgc_logo.png'
import smrt_esports_logo from '../assets/orgs/smrt_esports_logo.png'
import showdown_square_logo from '../assets/orgs/showdown_square_logo.png'
import rhill_local_logo from '../assets/orgs/rhill_local_logo.png'
import queens_fgc_logo from '../assets/orgs/queens_fgc_logo.png'
import peterborough_fgc_logo from '../assets/orgs/peterborough_fgc_logo.png'

import Incendium from './org_components/Incendium'
import TorontoTopTiers from './org_components/TorontoTopTiers'
import NoStyle from './org_components/NoStyle'
import DkmNetwork from './org_components/DkmNetwork'
import JustMidsTeam from './org_components/JustMidsTeam'
import SMRTeSports from './org_components/SMRTeSports'
import DowntownRumble from './org_components/DowntownRumble'
import BattleCity from './org_components/BattleCity'
import TorontoMelee from './org_components/TorontoMelee'
import NorthBayFgc from './org_components/NorthBayFgc'
import LondonOntarioFgc from './org_components/LondonOntarioFgc'
import SmashClass from './org_components/SmashClass'
import WindsorFgc from './org_components/WindsorFgc'
import UwFgc from './org_components/UwFgc'
import SenecaFgc from './org_components/SenecaFgc'
import CritHitFightNight from './org_components/CritHitFightNight'
import YuFgc from './org_components/YuFgc'
import ShowdownSquare from './org_components/ShowdownSquare'
import RhillLocal from './org_components/RhillLocal'
import QueensFgc from './org_components/QueensFgc'
import PeterboroughFgc from './org_components/PeterboroughFgc'

import { useState } from 'react'


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
            {/* I should probably refactor this at some point to be auto-generated like the eventinfo, but it's nice to have more control if I were to need it. */}
            <button className='organization-button' onClick={() => {setCurrentInfo(0)}}><img src={incendium_logo} width={32} height={32}/>Incendium Gaming</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(1)}}><img src={toronto_top_tiers_logo} width={32} height={32}/>Toronto Top Tiers</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(2)}}><img src={no_style_logo} width={32} height={32}/>No Style</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(3)}}><img src={dkm_network_logo} width={32} height={32}/>DKM Network</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(4)}}><img src={just_mids_team_logo} width={32} height={32}/>Just Mids Team</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(5)}}><img src={smrt_esports_logo} width={32} height={32}/>SMRT eSports</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(6)}}><img src={downtown_rumble_logo} width={32} height={32}/>Downtown Rumble</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(7)}}><img src={battle_city_logo} width={32} height={32}/>Battle City</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(8)}}><img src={toronto_melee_logo} width={32} height={32}/>Toronto Melee</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(9)}}><img src={north_bay_fgc_logo} width={32} height={32}/>North Bay FGC</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(10)}}><img src={london_ontario_fgc_logo} width={32} height={32}/>London Ontario FGC</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(11)}}><img src={smash_class_logo} width={32} height={32}/>Smash Class</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(12)}}><img src={windsor_fgc_logo} width={32} height={32}/>Windsor FGC</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(13)}}><img src={uwfgc_logo} width={32} height={32}/>University of Waterloo FGC</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(14)}}><img src={seneca_fgc_logo} width={32} height={32}/>Seneca Fighting Game Club</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(15)}}><img src={crit_hit_fight_night_logo} width={32} height={32}/>Crit Hit Fight Night</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(16)}}><img src={yufgc_logo} width={32} height={32}/>York University Fighting Game Community</button>
            {/* <button className='organization-button' onClick={() => {setCurrentInfo(17)}}><img src={showdown_square_logo} width={32} height={32}/>Showdown Square</button> */} {/* they don't run any fgs so I temp removed them from the org and event list */}
            <button className='organization-button' onClick={() => {setCurrentInfo(18)}}><img src={rhill_local_logo} width={32} height={32}/>Richmond Hill Locals</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(19)}}><img src={queens_fgc_logo} width={32} height={32}/>Queen's Fighting Game Club</button>
            <button className='organization-button' onClick={() => {setCurrentInfo(20)}}><img src={peterborough_fgc_logo} width={32} height={32}/>Peterborough FGC</button>
          </div>
          {/* god i really need to refactor this */}
          <div className='organizations-listings-descriptions'>
            {currentInfo == 0 ? <Incendium/> : <></>}
            {currentInfo == 1 ? <TorontoTopTiers/> : <></>}
            {currentInfo == 2 ? <NoStyle/> : <></>}
            {currentInfo == 3 ? <DkmNetwork/> : <></>}
            {currentInfo == 4 ? <JustMidsTeam/> : <></>}
            {currentInfo == 5 ? <SMRTeSports/> : <></>}
            {currentInfo == 6 ? <DowntownRumble/> : <></>}
            {currentInfo == 7 ? <BattleCity/> : <></>}
            {currentInfo == 8 ? <TorontoMelee/> : <></>}
            {currentInfo == 9 ? <NorthBayFgc/> : <></>}
            {currentInfo == 10 ? <LondonOntarioFgc/> : <></>}
            {currentInfo == 11 ? <SmashClass/> : <></>}
            {currentInfo == 12 ? <WindsorFgc/> : <></>}
            {currentInfo == 13 ? <UwFgc/> : <></>}
            {currentInfo == 14 ? <SenecaFgc/> : <></>}
            {currentInfo == 15 ? <CritHitFightNight/> : <></>}
            {currentInfo == 16 ? <YuFgc/> : <></>}
            {/* {currentInfo == 17 ? <ShowdownSquare/> : <></>} */} {/* they don't run any fgs so I temp removed them from the org and event list */}
            {currentInfo == 18 ? <RhillLocal/> : <></>}
            {currentInfo == 19 ? <QueensFgc/> : <></>}
            {currentInfo == 20 ? <PeterboroughFgc/> : <></>}
          </div>
        </div>
      </div>
      <Spacer/>
    </>
  )
}

export default Organizations
