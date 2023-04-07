import {
  YMaps,
  Map,
  Placemark,
  TypeSelector,
  FullscreenControl,
} from "@pbe/react-yandex-maps";

const MainPage = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <YMaps>
        <div style={{ width: "100%", height: "100%" }}>
          <Map
            defaultState={{
              center: [55.75, 37.57],
              zoom: 13,
              type: "yandex#satellite",
            }}
            modules={["control.ZoomControl"]}
            options={{
              copyrightLogoVisible: false,
              copyrightProvidersVisible: false,
              copyrightUaVisible: false,
            }}
            height={"100%"}
            width={"100%"}
          >
            <Placemark defaultGeometry={[55.751574, 37.573856]} />
            <TypeSelector options={{ float: "right" }} />
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default MainPage;
