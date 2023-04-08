import React, { useRef, useState, useEffect } from "react";
import "./map.css";
import MapContext from "./context";
import * as ol from "ol";
const Map = ({ children, zoom, center, extent, projection }) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);

  map.on("click", (evt) => {
    const pixel = map.getEventPixel(evt.originalEvent);
    const feature = map.forEachFeatureAtPixel(pixel, (f) => {
      return f;
    });
    if (feature) {
      console.log(feature.values_.district);
      console.log(feature.values_.geometry.extent_);
      let center = [
        feature.values_.geometry.extent_[0],
        feature.values_.geometry.extent_[1],
      ];
      map.getView().setCenter(center);
    }
  });
  useEffect(() => {
    let options = {
      view: new ol.View({ zoom, center, extent, projection }),
      layers: [],
      controls: [],
      overlays: [],
    };
    let mapObject = new ol.Map(options);
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);
    return () => mapObject.setTarget(undefined);
  }, []); // zoom change handler
  useEffect(() => {
    if (!map) return;
    map.getView().setZoom(zoom);
  }, [zoom]); // center change handler
  useEffect(() => {
    if (!map) return;
    map.getView().setCenter(center);
  }, [center]);
  return (
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} className="ol-map">
        {children}
      </div>
    </MapContext.Provider>
  );
};

export default Map;
