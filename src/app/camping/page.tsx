// comps
import { Panel as Receipt } from "@/components/Receipt";
import { Panel as Brochure } from "@/components/Brochure";

const page = () => {
  return (
    <div className="grid grid-cols-3">
      <Receipt />
      <Brochure />
    </div>
  );
};

export default page;
