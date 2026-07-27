import youtube_logo from '../../assets/youtube.svg'
import "./YoutubeButton.css"

function YoutubeButton({ url }) {
  return (
    <>
      <button className='youtube-button' onClick={() => {window.open(url,'_blank')}}><a href={url} target="_blank"><img src={youtube_logo} width={30} height={30}/></a></button>
    </>
  )
}

export default YoutubeButton
