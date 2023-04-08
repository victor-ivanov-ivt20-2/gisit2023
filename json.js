import G from "./geo.json" assert { type: "json" };
import * as fs from "fs";
function epsg4326toEpsg3857(coordinates) {
  let x, y;
  x = (coordinates[0] * 20037508.34) / 180;
  y =
    Math.log(Math.tan(((90 + coordinates[1]) * Math.PI) / 360)) /
    (Math.PI / 180);
  y = (y * 20037508.34) / 180;
  return [x, y];
}

fs.readFile("ya.json", (error, data) => {
  if (error) {
    console.log(error);
    throw error;
  }

  const geo = JSON.parse(data);

  geo.features.forEach((f) => {
    if (f.geometry.type === "Polygon")
      f.geometry.coordinates.forEach((element) => {
        element.forEach((el) => {
          const ans = epsg4326toEpsg3857([el[0], el[1]]);
          el[0] = ans[0];
          el[1] = ans[1];
        });
      });
    else
      f.geometry.coordinates.forEach((element) => {
        element.forEach((el) => {
          el.forEach((e) => {
            const ans = epsg4326toEpsg3857([e[0], e[1]]);
            e[0] = ans[0];
            e[1] = ans[1];
          });
        });
      });
  });
  const geoFinish = JSON.stringify(geo);
  fs.writeFile("data.json", geoFinish, (error) => {
    if (error) {
      console.error(error);
      throw error;
    }
    console.log("data.json written correctly");
  });
});
