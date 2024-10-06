"use client";
// comps
import Map from "react-map-gl";
import Image from "next/image";

// icons
import RightArrowIcon from "@/assets/icons/RightArrow";

// images
import park from "@/assets/images/stanley.jpg";

const Address = () => {
  return (
    <div className="flex flex-col">
      <div className="text-md text-black font-bold">
        Manhattan Green Camp
      </div>
      <div className="text-xs text-black">
        Cloud City, Atmosphere 78910, Planet Earth
      </div>
    </div>
  )
};

const AddressAndPhoto = () => {
  return (
    <div className="flex flex-row justify-between">
      <Address />
      <Image
      src={park}
      width={50}
      height={50}
      alt="Picture of the author"
    />
    </div>
  )
};

const GoogleMaps = () => {
  return (
    <button className="flex flex-row justify-end items-center cursor-pointer">
      <div className="text-xs text-black mr-12"> View Directions on Google Maps </div>
      <div className="text-black flex-none"> <RightArrowIcon /> </div>
    </button>
  )
};

const Dialog = () => {
  return (
    <div className="space-y-6 p-2">
      <AddressAndPhoto />
      <GoogleMaps />
    </div>
  )
};

export const Panel = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Map
        mapboxAccessToken={"pk.eyJ1IjoiYWxvcGV6MTIzNDUiLCJhIjoiY20xOW9mbGVkMDNubzJrcTNhZHk5Y3llNiJ9.7iVHGHNL2cI1B6gW4xtUxQ"}
        initialViewState={{
          longitude: -123.139999,
          latitude: 49.299999,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        attributionControl={false}
      />
      
      <div 
        style={{
          position: "absolute",
          bottom: 50,
          left: 50,
          right: 50,
          width: "80%",
          backgroundColor: "white",
          padding: "10px",
          textAlign: "center",
        }}
      >
       <Dialog />
      </div>
    </div>
  );
};
