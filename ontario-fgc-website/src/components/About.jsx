import './About.css'
import Spacer from './Spacer'

function About() {

  return (
    <>
      <div className='about-section' id="about-section">
        <h1 className='about-title'>About Us</h1>
        <div className='about-paragraph'>
          <p>This website is an unofficial landing page for all things related to the fighting game community located in Ontario, Canada. We are a passionate and diverse group of fighting game players dedicated to playing and competing in games such as Street Figher, Tekken, Guilty Gear, and more! On this page, you can find up to date information on local organizations, upcoming events in the area, and more.</p>
          <p>As <b>this site is unofficial</b>, we rely on community members to keep it up to date. If you notice something missing, or would like to add something, please contact us via the contact section below. Thanks!</p>
        </div>
      </div>
      <Spacer/>
    </>
  )
}

export default About
