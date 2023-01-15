import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import { iconPerson } from './mapMarker';
import './map.scss'
import { useSelector } from "react-redux";

const MapComponent = () => {
  const from = useSelector(store => store.order.coordFrom)
  const to = useSelector(store => store.order.coordTo)
  const polyline = useSelector(store => store.polylineRoute.currentPolylineRoute)


  return (
    <MapContainer maxZoom={12} minZoom={12} dragging={false} center={[59.84660399, 30.42423701]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {from[0] !== null && to[0] !== null ?
        <>
          <Marker icon={iconPerson} position={from}>
            <Popup>
              Погрузка
            </Popup>
          </Marker>
          <Marker icon={iconPerson} position={to}>
            <Popup>
              Разгрузка
            </Popup>
          </Marker>
        </>
        :
        null
      }
      {
        polyline[0] !== null ?
          <Polyline interactive={true} pathOptions={{ color: 'blue' }} positions={polyline} />
          :
          null
      }

    </MapContainer>
  )
}

export default MapComponent