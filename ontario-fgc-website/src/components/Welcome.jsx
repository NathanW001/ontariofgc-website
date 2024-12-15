import './Welcome.css'
import discord_logo from '../assets/discord.svg'

function Welcome() {

  return (
    <>
      <div className='welcome-bg'>
        <h1 className='welcome-title'>Welcome to the Ontario FGC</h1>
        <button className='welcome-button'><img src={discord_logo} width={32} height={32}/> Join our Discord! </button>
      </div>
    </>
  )
}

export default Welcome
