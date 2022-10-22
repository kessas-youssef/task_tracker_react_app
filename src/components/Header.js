import Button from "./Button"

const Header = ({openClose, formState}) => {
    return (
        <header className="header">
            <h1 className="header__title">Task Tracker</h1>
            <Button btnClassName={`header__btn--${formState.action}`} btnText={formState.btnText} onClick={openClose} />
        </header>
    )
}


export default Header