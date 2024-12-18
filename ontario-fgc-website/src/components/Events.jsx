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

// put the assets here

import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

import { useState } from 'react'
import { Icon } from 'leaflet'

function Events() {
  const [currentInfo, setCurrentInfo] = useState(0)
  const map_markers = [
    {
      latlong: [43.65876451777865, -79.37693571250017],
      name: "Run The Set",
      logo: incendium_logo,
    },
    {
      latlong: [43.23764459640337, -79.88803286197265],
      name: "In The Lab",
      logo: incendium_logo,
    },
    {
      latlong: [43.66483324219627, -79.46396085928639],
      name: "Stun City",
      logo: toronto_top_tiers_logo,
    },
    {
      latlong: [43.78870457848849, -79.26658076155663],
      name: "No Style Skirmish",
      logo: no_style_logo,
    },
    {
      latlong: [43.17285148624579, -79.26482154024121],
      name: "DKM Offside",
      logo: dkm_network_logo,
    },
    {
      latlong: [43.54431161357553, -79.68283327257735],
      name: "Just Mids",
      logo: just_mids_team_logo,
    },
    {
      latlong: [44.392158772296035, -79.68840210625805],
      name: "Whiff City",
      logo: whiff_city_logo,
    },
    {
      latlong: [45.431611276997735, -75.68721057912461],
      name: "DTR x TKO",
      logo: downtown_rumble_logo,
    },
    {
      latlong: [45.33673016027971, -75.73025626399644],
      name: "Battle City",
      logo: battle_city_logo,
    },
  ]

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

        <div className='events-map'>
          <MapContainer center={[43.888999, -78.729372]} zoom={8}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {map_markers.map((marker) => (
              <Marker position={marker.latlong} icon={new Icon({iconUrl: marker.logo, iconSize: [50,50]})} key={marker.name}>
                <Popup>
                  <h2>{marker.name}</h2>
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
