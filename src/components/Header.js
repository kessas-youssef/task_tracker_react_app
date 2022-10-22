import Button from "./Button"

const Header = ({openClose}) => {
    return (
        <header className="header">
            <h1 className="header__title">Task Tracker</h1>
            <Button btnClassName='header__btn--open' btnText='Add' onClick={openClose} />
            <Button btnClassName='header__btn--close' btnText='Close' onClick={openClose} />
        </header>
    )
}


export default Header