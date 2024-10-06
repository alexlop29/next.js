// comps
import { Panel as Receipt } from "@/components/Receipt";
import { Panel as Brochure } from "@/components/Brochure";
import { Panel as Map } from "@/components/Map";
import sunset from "@/assets/images/mountainsunset.jpg";

const Page = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${sunset.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className="grid grid-cols-3 pt-4 pr-8 pl-8 pb-4 max-heightt-screen-md">
        <Receipt />
        <Brochure />
        <Map />
      </div>
    </div>
  );
};

export default Page;
