import React from "react";
import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '650px'
  };

  const center = {
    lat: 35.9081686,
    lng: 128.8087159
  };
  
  function MyComponent() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyArdm4aYCOd412dMD0JNSIF4y_Oww7eBsw"
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      // map.fitBounds(bounds);
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    return isLoaded ? (
        <div class="container">
            <GoogleMap
            zoom={18}
            mapContainerStyle={containerStyle}
            center={center}
            onLoad={onLoad}
            onUnmount={onUnmount}
            >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
            </GoogleMap>
        </div>

    ) : <></>
  }
  
  export default React.memo(MyComponent)