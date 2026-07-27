import discord_logo from '../../assets/discord.svg'
import "./DiscordButton.css"

function DiscordButton({ url }) {
  return (
    <>
      <button className='discord-button' onClick={() => {window.open(url,'_blank')}}><a href={url} target="_blank"><img src={discord_logo} width={30} height={30}/></a></button>
    </>
  )
}

export default DiscordButton
