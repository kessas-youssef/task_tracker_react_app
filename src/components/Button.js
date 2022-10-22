const Button = ({btnClassName, btnText, onClick}) => {
  return (
    <button className={btnClassName} onClick={(onClick)}>
        {btnText}
    </button>
  )
}

export default Button