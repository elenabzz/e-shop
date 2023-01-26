function Buttons({filteredProducts}) {
    return(
        <div className="cont">
            <button className="change" onClick={() => filteredProducts("accessories")}>Accessories</button>
            <button className="change" onClick={() => filteredProducts("devices") }>Portable Devices</button>
            <button className="change" onClick={() => filteredProducts("homedevices")}>Home Devices</button>
            <button className="change" onClick={() => filteredProducts("healthdevices")}>Health Devices</button>
        </div>
    )
}
export default Buttons;