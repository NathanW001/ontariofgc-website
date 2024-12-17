import twitter_logo from '../../assets/twitter.svg'
import "./TwitterButton.css"

function TwitterButton({ url }) {
  return (
    <>
      <button className='twitter-button' onClick={() => {window.open(url,'_blank')}}><img src={twitter_logo} width={30} height={30}/></button>
    </>
  )
}

export default TwitterButton
