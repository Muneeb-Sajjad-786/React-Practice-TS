



interface Props {
    hideAlert : () => void
}


const ShowAlert = ({hideAlert}: Props) => {

  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
  My Alert
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={hideAlert}></button>
</div>
  )
}

export default ShowAlert