function Header({fnc : logoClick}) {
    return (
        <header className="header">
            <span onClick={logoClick} className="logo">
                <span className="logo-text">Todo</span>
                <span className="logo-plus">+</span>
            </span>
        </header>
    )
}
export default Header