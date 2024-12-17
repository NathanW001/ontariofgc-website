import "./Default.css"
import DiscordButton from "./DiscordButton"
import TwitchButton from "./TwitchButton"
import TwitterButton from "./TwitterButton"
import YoutubeButton from "./YoutubeButton"

function Default({ title, logo, body, discord_url, youtube_url, twitter_url, twitch_url }) {
  return (
    <>
      <h1 className='organization-information-title'>{title}<img src={logo} width={50} height={50}/></h1>
      <p className='organization-information-body'>{body}</p>
      <div className="organization-information-button-container">
        {discord_url!=="" ? <DiscordButton url={discord_url}/> : <></>}
        {youtube_url!=="" ? <YoutubeButton url={youtube_url}/> : <></>}
        {twitter_url!=="" ? <TwitterButton url={twitter_url}/> : <></>}
        {twitch_url!=="" ? <TwitchButton url={twitter_url}/> : <></>}
      </div>
    </>
  )
}

export default Default
