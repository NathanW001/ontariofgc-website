import "./Default.css"
import StartGGButton from "./StartGGButton"

function Default({ name, logo, logo_2, type, location, location_maps_url, description, startgg}) {
  return (
    <>
      <h1 className='event-information-title'>{name}<img src={logo} width={50} height={50}/>{logo_2!==""?<img src={logo_2} width={50} height={50}/>:<></>}</h1>
      <p className='event-information-body'><b>Event Type: </b>{type}</p>
      <p className='event-information-body'><b>Location: </b><a href={location_maps_url} target="_blank" rel="noopener noreferrer">{location}</a></p>
      <p className='event-information-body'><b>Description: </b>{description}</p>
      <div className="event-information-button-container">
        {startgg!=="" ? <StartGGButton url={startgg}/> : <></>}
      </div>
    </>
  )
}

export default Default
