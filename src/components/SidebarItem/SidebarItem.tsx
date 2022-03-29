import './SidebarItem.scss';

type Props = {
    title?: string
    children?: JSX.Element | JSX.Element[];
}

function SidebarItem({title, children} : Props) {
    return(
        <div className="SidebarItem mt-2">
            <div className="sidebar-title bg-primary">
                <h4 className="text-center text-white p-2 mb-0">{title}</h4>
            </div>
            <div className="sidebar-content bg-secondary top-0 p-3">
                {children}
            </div>
        </div>
    )
}

export default SidebarItem;
