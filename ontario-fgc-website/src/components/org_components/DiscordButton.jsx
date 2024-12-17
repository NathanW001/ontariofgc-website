import discord_logo from '../../assets/discord.svg'
import "./DiscordButton.css"

function DiscordButton({ url }) {
  return (
    <>
      <button className='discord-button' onClick={() => {window.open(url,'_blank')}}><img src={discord_logo} width={30} height={30}/></button>
    </>
  )
}

export default DiscordButton
