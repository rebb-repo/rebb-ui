import {Link} from 'react-router-dom'
import {ROUTES, ROUTES_RESOURCES} from '../../constants/NavConstants'
import {Fragment} from 'react'
import './Navigation.scss'

const Navigation = () => (
    <nav className="rebb-nav">
        <ul>
            {ROUTES.map((route, index) => (
                <Fragment key={index}>
                    <li>
                        <Link to={route.path}>{route.title}</Link>
                    </li>
                </Fragment>
            ))}
            <li>
        Resources
                <ul>
                    {ROUTES_RESOURCES.map((route, index) => (
                        <Fragment key={index}>
                            <li>
                                <Link to={route.path}>{route.title}</Link>
                            </li>
                        </Fragment>
                    ))}
                </ul>
            </li>
        </ul>
    </nav>
)

export default Navigation
