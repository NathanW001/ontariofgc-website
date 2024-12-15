import './Header.css'

function Header() {
  return (
    <>
      <div className='top-bar'>
        <h1 className='navbar-title'>Ontario FGC</h1>
        <div className='nav-buttons'>
          <button className='nav-button' onClick={() => {document.getElementById('about-section').scrollIntoView();}}>About Us</button>
          <p className='nav=spacer'>|</p>
          <button className='nav-button' onClick={() => {document.getElementById('organizations-section').scrollIntoView();}}>Local Organizations</button>
          <p className='nav=spacer'>|</p>
          <button className='nav-button' onClick={() => {document.getElementById('events').scrollIntoView();}}>Upcoming Events</button>
          <p className='nav=spacer'>|</p>
          <button className='nav-button' onClick={() => {document.getElementById('contact').scrollIntoView();}}>Contact</button>
        </div>
      </div>
    </>
  )
}

export default Header
