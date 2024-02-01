import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import { Room, Star, StarBorder } from "@material-ui/icons";
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 46,
    longitude: 17,
    zoom: 4
  });

  return (
    <div className="App">
     <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
        >

     <Marker
              latitude={48.858093}
              longitude={2.294694}
              offsetLeft={-20}
              offsetTop={-10}
            >
               <Room
                style={{
                  fontSize: 7 * viewport.zoom,
                  color:"slateblue"}}/>              
              </Marker>

              <Popup
               
                latitude={48.858093}
                longitude={2.294694}
                closeButton={true}
                closeOnClick={false}                
                anchor="left"
              >
                <div>You are here</div>
                </Popup>
</ReactMapGL>      
    </div>
  );
}

export default App;


