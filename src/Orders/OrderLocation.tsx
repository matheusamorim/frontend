import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const position = {
    lat: -16.2347244,
    lng: -48.9589697

}

function OrderLocation() {


    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title">
                    Selecione o local de entrega
                 </h3>
                <div className="dilter-container">
                </div>
                     <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )

}

export default OrderLocation;