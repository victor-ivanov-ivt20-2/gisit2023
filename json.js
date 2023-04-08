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

fs.readFile("./src/components/map/geo.json", (error, data) => {
  if (error) {
    console.log(error);
    throw error;
  }

  const geo = JSON.parse(data);
  const temp = {
    district: "",
    coordinates: [],
  };
  geo.features.forEach((f) => {
    temp.district = f.properties.district;
    if (f.geometry.type === "Polygon")
      f.geometry.coordinates.forEach((element) => {
        temp.coordinates = element;
      });
    else
      f.geometry.coordinates.forEach((element) => {
        element.forEach((el) => {
          el.forEach((e) => {
            temp.coordinates = e;
          });
        });
      });
    const geoFinish = JSON.stringify(temp);
    fs.writeFile("./data/" + temp.district + ".json", geoFinish, (error) => {
      if (error) {
        console.error(error);
        throw error;
      }
      console.log("data.json written correctly");
    });
    temp.district = "";
    temp.coordinates = [];
  });
});
