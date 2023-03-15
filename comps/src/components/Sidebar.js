import Link from "./Link";

function Sidebar() {
    const links = [
        {label: 'Dropdown', path: '/'},
        {label: 'Accordion', path: '/accordion'},
        {label: 'Buttons', path: '/buttons'},
        {label: 'Modal', path:'/modal'},
        {label: 'Table', path: '/table'},
        {label: 'Counter', path: '/counter'}
    ]

    const renderedLinks = links.map((link) => {
        return <Link activeClassName="font-bold border-l-4 border-bllue-500 pl-2" key={link.label} to={link.path} className="mb-3">{link.label}</Link>
    })

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    )
}

export default Sidebar;