import React, { useContext, useEffect, useState } from "react";
import GJSON from "./geo.json";
import Map from "./ol";
import Layers from "./layers";
import TileLayer from "./layers/tile";
import VectorLayer from "./layers/vector";
import Projection from "ol/proj/Projection";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import vector from "ol/source/Vector";
import osm from "ol/source/OSM";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import GeoTIFF from "ol/source/GeoTIFF.js";
import Controls from "./controls";
import { Vector } from "ol/source";
import { getCenter } from "ol/extent.js";
import FullScreenControl from "./controls/fullscreen";
import MapContext from "./context";
let styles = {
  MultiPolygon: new Style({
    stroke: new Stroke({ color: "blue", width: 1 }),
    fill: new Fill({ color: "rgba(0, 0, 255, 0.1)" }),
  }),
};

const projection = new Projection({
  code: "EPSG:32721",
  units: "m",
});
const extendMap = [11013447.6518, 7085566.549, 18614341.9101, 14052497.1404];
const source = new GeoTIFF({
  sources: [
    {
      url: "./3.tif",
    },
  ],
});
const MapOL = () => {
  const map = useContext(MapContext);
  const [center, setCenter] = useState([-94.9065, 38.9884]);
  const [zoom, setZoom] = useState(9);
  const [showLayer1, setShowLayer1] = useState(true);
  const [showLayer2, setShowLayer2] = useState(true);
  return (
    <div>
      <Map
        center={[14443110.8354, 8867208.2019]}
        zoom={zoom}
        extent={extendMap}
      >
        <Layers>
          {/* <TileLayer source={source} zIndex={2} opacity={0.7} /> */}

          <TileLayer source={new osm()} zIndex={0} />

          <VectorLayer source={GJSON} style={styles.MultiPolygon} />
        </Layers>

        <Controls>
          <FullScreenControl />
        </Controls>
      </Map>
    </div>
  );
};

export default MapOL;
