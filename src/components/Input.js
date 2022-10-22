const Input = ({ inputType, inputIdClassName, nameOfSet, labelText, inputVal, onAction }) => {
  if (labelText) return (
    <div className={nameOfSet}>
      <label htmlFor={inputIdClassName}>{labelText}</label>
      <input type={inputType} className={inputIdClassName} id={inputIdClassName} onChange={onAction}/>
    </div>
  )
  else return (
    <input type={inputType} className={inputIdClassName} id={inputIdClassName} value={inputVal} onClick={onAction} />
  )
}

export default Input