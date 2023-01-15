import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('../../assets/marker.png'),
    iconRetinaUrl: require('../../assets/marker.png'),
    iconAnchor: null,
    shadowAnchor: null,
    iconSize: new L.Point(110, 65),
    className: 'leaflet-div-icon'
});

export { iconPerson };