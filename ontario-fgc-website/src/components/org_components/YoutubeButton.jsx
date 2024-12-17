import youtube_logo from '../../assets/youtube.svg'
import "./YoutubeButton.css"

function YoutubeButton({ url }) {
  return (
    <>
      <button className='youtube-button' onClick={() => {window.open(url,'_blank')}}><img src={youtube_logo} width={30} height={30}/></button>
    </>
  )
}

export default YoutubeButton
