import "./Default.css"
import DiscordButton from "./DiscordButton"
import TwitchButton from "./TwitchButton"
import TwitterButton from "./TwitterButton"
import YoutubeButton from "./YoutubeButton"
import BlueskyButton from "./BlueskyButton"

function Default({ title, logo, body, discord_url, youtube_url, twitter_url, twitch_url, bluesky_url }) {
  return (
    <>
      {console.log(bluesky_url)}
      <h1 className='organization-information-title'>{title}<img src={logo} width={50} height={50}/></h1>
      <p className='organization-information-body'>{body}</p>
      <div className="organization-information-button-container">
        {discord_url!==undefined ? <DiscordButton url={discord_url}/> : <></>}
        {youtube_url!==undefined ? <YoutubeButton url={youtube_url}/> : <></>}
        {twitter_url!==undefined ? <TwitterButton url={twitter_url}/> : <></>}
        {bluesky_url!==undefined ? <BlueskyButton url={bluesky_url}/> : <></>}
        {twitch_url!==undefined ? <TwitchButton url={twitch_url}/> : <></>}
      </div>
    </>
  )
}

export default Default
