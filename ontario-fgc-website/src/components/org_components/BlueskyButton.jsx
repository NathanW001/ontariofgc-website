import bluesky_logo from '../../assets/bluesky.svg'
import "./BlueskyButton.css"

function BlueskyButton({ url }) {
  return (
    <>
      <button className='bluesky-button' onClick={() => {window.open(url,'_blank')}}><a href={url} target="_blank"><img src={bluesky_logo} width={30} height={30}/></a></button>
    </>
  )
}

export default BlueskyButton
