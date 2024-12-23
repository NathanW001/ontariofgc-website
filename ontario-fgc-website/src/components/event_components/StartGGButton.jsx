import startgg_logo from '../../assets/startgg.svg'
import "./StartGGButton.css"

function StartGGButton({ url }) {
  return (
    <>
      <button className='startgg-button' onClick={() => {window.open(url,'_blank')}}><img src={startgg_logo} width={30} height={30}/></button>
    </>
  )
}

export default StartGGButton
