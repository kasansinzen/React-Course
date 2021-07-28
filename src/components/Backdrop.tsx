function Backdrop(props: {onCancel: any}) {
  return (
    <div className="backdrop" onClick={props.onCancel} />
  )
}

export default Backdrop;