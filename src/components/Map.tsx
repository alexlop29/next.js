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
    <a href="https://www.google.com/maps/dir//Stanley+Park,+Vancouver,+BC+V6G+1Z4,+Canada/@49.3027527,-123.1435704,15.56z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5486718cad26e4a3:0x364a639db409e216!2m2!1d-123.1442522!2d49.3042584?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" className="flex flex-row justify-end items-center cursor-pointer">
      <div className="text-xs text-black mr-12"> View Directions on Google Maps </div>
      <div className="text-black flex-none"> <RightArrowIcon /> </div>
    </a>
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
