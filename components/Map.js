import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import Image from "next/image";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  //   Transform the searchResults into the latitude and the logitude object
  // { latitude: 52.516272, longitude: 13.377722 },
  // { latitude: 51.515, longitude: 7.453619 },
  // { latitude: 51.503333, longitude: -0.119722 },
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 8,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/techprodc/cks2im81v7z0s18nxd20ysyn1"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce text-red-400"
              //   Accessibility purpose
              role="img"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {/* Popup - Show on Marker click */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              className="z-50"
            >
              <div className="relative h-32 w-full">
                <Image src={result.img} layout="fill" objectFit="contain" />
              </div>
              <p className="text-sm">{result.title}</p>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
