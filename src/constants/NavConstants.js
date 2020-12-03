import Contact from '../components/contact/Contact'
import Home from '../components/home/Home'
import About from '../components/about/About'
import Highlights from '../components/highlights/Highlights'
import BuyerResources from '../components/resources/BuyerResources'
import SellerResources from '../components/resources/SellerResources'

export const LINKS = {
    contact: '/contact',
    home: '/home',
    about: '/about',
    highlights: '/highlights',
}

export const ROUTES = [
    {path: LINKS.contact, component: Contact, title: 'Contact'},
    {path: LINKS.home, component: Home, title: 'Home'},
    {path: LINKS.about, component: About, title: 'About'},
    {path: LINKS.highlights, component: Highlights, title: 'Highlights'}
]

export const ROUTES_RESOURCES = [
    {
        path: '/resources/buyer-resources',
        title: "Buyer Resources",
        component: BuyerResources
    },
    {
        path: '/resources/seller-resources',
        title: "Seller Resources",
        component: SellerResources
    }
]
