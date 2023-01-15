import axios from "axios"



export const API = 'http://router.project-osrm.org/route/v1/driving/'

export const getPolylineRoute = async (from1, from2, to1, to2) => {
    const req = await axios.get(`${API}${from1},${from2};${to1},${to2}?geometries=geojson&overview=full&annotations=true&alternatives=true&continue_straight=false`)
    const data = req.data
    return data.routes[0].geometry.coordinates
}