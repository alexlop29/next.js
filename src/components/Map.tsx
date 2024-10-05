"use client";
import Map from "react-map-gl";

export const Panel = () => {
  console.log("Mapbox Token:", process.env.NEXT_MAPBOX_API_TOKEN);
  
  return (
    <div style={{ width: "100%", height: "90vh" }}> {/* Set height to 100vh to fill the viewport */}
      <Map
        mapboxAccessToken={"pk.eyJ1IjoiYWxvcGV6MTIzNDUiLCJhIjoiY20xOW9mbGVkMDNubzJrcTNhZHk5Y3llNiJ9.7iVHGHNL2cI1B6gW4xtUxQ"}
        initialViewState={{
          longitude: -123.139999,
          latitude: 49.299999,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }} // Use 100% to fill the parent container
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
};
