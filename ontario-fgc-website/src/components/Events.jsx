import './Events.css'
import Spacer from './Spacer'
import incendium_logo from '../assets/orgs/incendium_logo.png'
import toronto_top_tiers_logo from '../assets/orgs/toronto_top_tiers_logo.png'
import no_style_logo from '../assets/orgs/no_style_logo.png'
import dkm_network_logo from '../assets/orgs/dkm_network_logo.png'
import just_mids_team_logo from '../assets/orgs/just_mids_team_logo.png'
import whiff_city_logo from '../assets/orgs/whiff_city_logo.png'
import downtown_rumble_logo from '../assets/orgs/downtown_rumble_logo.png'
import battle_city_logo from '../assets/orgs/battle_city_logo.png'
import toronto_melee_logo from '../assets/orgs/toronto_melee_logo.png'

import event_information from "./EventInfo.json"

import Default from './event_components/Default'

// put the assets here

import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

import { useState, Fragment} from 'react'
import { Icon } from 'leaflet'

function Events() {
  const [currentInfo, setCurrentInfo] = useState(0)
  const logo_convert = {
    "": "",
    "incendium_logo": incendium_logo,
    "toronto_top_tiers_logo": toronto_top_tiers_logo,
    "no_style_logo": no_style_logo,
    "dkm_network_logo": dkm_network_logo,
    "just_mids_team_logo": just_mids_team_logo,
    "whiff_city_logo": whiff_city_logo,
    "downtown_rumble_logo": downtown_rumble_logo,
    "battle_city_logo": battle_city_logo,
    "toronto_melee_logo": toronto_melee_logo
  }

  return (
    <>
      <div id="events-section">
        <div className='events-intro-section'>
          <h1 className='events-title'>Events</h1>
          <div className='events-paragraph'>
            <p>On the schedule and map below you can find upcoming events. You can click on the map to look around, and click on an event logo to view more information.</p>
          </div>
        </div>

        <div className='events-listings'>
          <div className='events-listings-buttons'>
            
            {event_information.map((info) => (
              <button key={info.id} className='events-button' onClick={() => {setCurrentInfo(info.id)}}><img src={logo_convert[info.logo]} width={32} height={32}/>{info.name}</button>
            ))}
          </div>
          <div className='events-listings-descriptions' id="event-info-scroll-point">
            {event_information.map((info) => (
              currentInfo == info.id ? <Default key={info.id} name={info.name} logo={logo_convert[info.logo]} logo_2={logo_convert[info.logo_2]} type={info.type} location={info.location} location_maps_url={info.location_maps_url} description={info.description} startgg={info.startgg} /> : <Fragment key={info.id}/>
            ))}
          </div>
        </div>

        <div className='events-map'>
          <MapContainer center={[43.888999, -78.729372]} zoom={8}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {event_information.map((marker) => (
              <Marker position={marker.latlong} icon={new Icon({iconUrl: logo_convert[marker.logo], iconSize: [50,50]})} key={marker.name}>
                <Popup>
                  <h2>{marker.name}</h2>
                  <p><button className="event-info-button" onClick={() => {
                    setCurrentInfo(marker.id);
                    document.getElementById('event-info-scroll-point').scrollIntoView();
                  }}>View Event Information</button></p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
      <Spacer/>
    </>
  )
}

export default Events
