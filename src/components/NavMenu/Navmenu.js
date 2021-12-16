
import './NavMenu.scss';

const NavMenu = (props) => {
    const completedItemsCount = props.items.filter(item => item.isCompleted).length;

    return (
        <header className="nav-menu">
            <nav className="nav-menu__list">
                <h2 className="nav-menu__main-title">
                    MyTrack
                </h2>
                <a href="#dashboard" className="nav-menu__link --active">
                    <svg viewBox="0 0 20 20" className="nav-menu__link-icon" height="20">
                        <use xlinkHref="#app-icon-dashboard"></use>
                    </svg>
                    <span className="nav-menu__link-text">Dashboard</span>
                    <span className="nav-menu__link-counter">{completedItemsCount}/{props.items.length}</span>
                </a>
                <a href="#calendar" className="nav-menu__link">
                    <svg viewBox="0 0 20 20" className="nav-menu__link-icon" height="20">
                        <use xlinkHref="#app-icon-calendar"></use>
                    </svg>
                    <span className="nav-menu__link-text">Calendar</span>
                </a>
                <a href="#teams" className="nav-menu__link">
                    <svg viewBox="0 0 20 20" className="nav-menu__link-icon" height="20">
                        <use xlinkHref="#app-icon-team"></use>
                    </svg>
                    <span className="nav-menu__link-text">Teams</span>
                </a>
                <a href="#charts" className="nav-menu__link">
                    <svg viewBox="0 0 20 20" className="nav-menu__link-icon" height="20">
                        <use xlinkHref="#app-icon-chart"></use>
                    </svg>
                    <span className="nav-menu__link-text">Charts</span>
                </a>
                <a href="#settings" className="nav-menu__link">
                    <svg viewBox="0 0 20 20" className="nav-menu__link-icon" height="20">
                        <use xlinkHref="#app-icon-settings"></use>
                    </svg>
                    <span className="nav-menu__link-text">Settings</span>
                </a>
            </nav>
        </header>
    )
}

export default NavMenu
