import twitch_logo from '../../assets/twitch.svg'
import "./TwitchButton.css"

function TwitchButton({ url }) {
  return (
    <>
      <button className='twitch-button' onClick={() => {window.open(url,'_blank')}}><img src={twitch_logo} width={30} height={30}/></button>
    </>
  )
}

export default TwitchButton
