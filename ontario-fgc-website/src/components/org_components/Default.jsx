import "./Default.css"

function Default({ title, logo, body }) {
  return (
    <>
      <h1 className='organization-information-title'>{title}<img src={logo} width={50} height={50}/></h1>
      <p className='organization-information-body'>{body}</p>
    </>
  )
}

export default Default
