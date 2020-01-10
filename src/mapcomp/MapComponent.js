import React, {useRef, useEffect} from 'react'

let map;

const MapComponent = ({center}) => {

    const kakao = window.kakao

    const mapCenter = new kakao.maps.LatLng(center.lat, center.lng)
    if(map) {
        map.panTo(mapCenter)
        console.log("panTO: ", mapCenter)
    }

    const mapRef = useRef()
    const style = {
        width: "100vw",
        height: "40vh",
        backgroundColor: "pink"

    }

    useEffect(() => {

        const mapOption = {
            center: new kakao.maps.LatLng(center.lat, center.lng), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        }                              
        map =  new kakao.maps.Map(mapRef.current, mapOption);

    },[])

    return (
        <div ref={mapRef} style={style}>
            <h1>Loading...</h1>
            {/* <h1>Map DIV</h1> */}
        </div>
    )
}

export default MapComponent