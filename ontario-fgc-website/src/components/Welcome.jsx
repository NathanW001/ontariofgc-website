import './Welcome.css'
import discord_logo from '../assets/discord.svg'
import bg1 from '../assets/background1.png'
import bg2 from '../assets/background2.png'
import bg3 from '../assets/background3.png'
import { useState, useEffect } from 'react'

function Welcome() {
  const pic_url = [
    bg1,
    bg2,
    bg3
  ];
  var index = 0;
  const [slideshowRunning, setSlideshowRunning] = useState(false);

  if (!slideshowRunning) {
    setSlideshowRunning(true);
    setInterval(() => {
      index = (index + 1) % pic_url.length;
      document.getElementById('slideshow').className += ' fade';
      setTimeout(() => {
        document.getElementById('slideshow').style.backgroundImage = "url(".concat(pic_url[index]).concat(")");
        document.getElementById('slideshow').className = "welcome-bg";
      }, 250)
      console.log(index);
    }, 5000)
  }

  return (
    <>
      <div className='welcome-bg' id="slideshow">
        <h1 className='welcome-title'>Welcome to the Ontario FGC</h1>
        <button className='welcome-button' onClick={() => {window.open('https://www.discord.gg/dy5AKKWbzm','_blank')}}><img src={discord_logo} width={32} height={32}/> Join our Discord! </button>
      </div>
    </>
  )
}

export default Welcome
