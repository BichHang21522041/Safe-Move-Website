import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkerIcon from "../../images/blueMarker.png";

interface Camera {
  _id: string;
  id: string;
  name: string;
  loc: {
    type: string;
    coordinates: [number, number]; // [longitude, latitude]
  };
  values: {
    ip: string;
  };
  dist: string;
  ptz: boolean;
  angle: number;
  liveviewUrl: string;
}

const CAMERA_API_URL =
  "https://api.notis.vn/v4/cameras/bybbox?lat1=11.160767&lng1=106.554166&lat2=9.45&lng2=128.99999";

const CameraMap: React.FC = () => {
  const [cameras, setCameras] = useState<Camera[]>([]);
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    fetch(CAMERA_API_URL)
      .then((response) => response.json())
      .then((data) => setCameras(data))
      .catch((error) => {
        console.error("Error fetching camera data", error);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimestamp(Date.now());
    }, 12000);

    return () => clearInterval(intervalId);
  }, []);

  const customIcon = new L.Icon({
    iconUrl: MarkerIcon,
    iconSize: [27, 43],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer
      center={[10.80498476893258, 106.75270736217499]}
      zoom={10}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {cameras.map((camera) => {
        const { _id, name, loc, dist, ptz, angle, liveviewUrl, values } =
          camera;
        const [longitude, latitude] = loc.coordinates;

        return (
          <Marker key={_id} position={[latitude, longitude]} icon={customIcon}>
            <Popup>
              <div>
                <h3>{_id}</h3>
                <h3>{name}</h3>
                <p>{dist}</p>
                <p>PTZ: {ptz ? "Yes" : "No"}</p>
                <p>Angle: {angle}</p>
                <p>Camera IP: {values.ip}</p>
                <a
                  href={`https://yourserver.com/${liveviewUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live View
                </a>
                <img
                  src={`http://giaothong.hochiminhcity.gov.vn/render/ImageHandler.ashx?id=${_id}&t=${timestamp}`}
                  alt="detail"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default CameraMap;
