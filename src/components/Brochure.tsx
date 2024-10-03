//icons
import { Forest } from "@/assets/icons/Forest";
import { CampFire } from "@/assets/icons/CampFire";
import { Barbecue } from "@/assets/icons/Barbecue";

const Title = () => {
  return <div className="text-3xl">What to do</div>;
};

type ActivitiesProps = {
  icon: JSX.Element;
  activity: string;
  description: string;
};

const ActivitiesDetails = ({
  icon,
  activity,
  description,
}: ActivitiesProps) => {
  // will need to dynamically pass in the icon
  return (
    <div className="flex flex-row gap-2">
      <div>{icon}</div>
      <div>
        <div>{activity}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export const Activities = () => {
  return (
    <div>
      <ActivitiesDetails
        icon={<Forest />}
        activity="FOREST AREA"
        description="A forest area offers peaceful trails, towering trees, and diverse wildlife. It's ideal for hiking, exploring nature, or relaxing in the fresh air."
      />
      <ActivitiesDetails
        icon={<CampFire />}
        activity="CAMPFIRE"
        description="A campfire is a cozy gathering spot for warmth, storytelling, and roasting marshmallows. It's perfect for unwinding under the stars and enjoying the night outdoors."
      />
      <ActivitiesDetails
        icon={<Barbecue />}
        activity="BARBECUE"
        description="A barbecue is a fun outdoor cooking experience, perfect for grilling delicious food while enjoing the fresh air. It's great for socializing and sharing meals with friends or family."
      />
    </div>
  );
};

type ImportantNumbersProps = {
  Office: string;
  Number: string;
};

const ImportantNumbersDetails = ({ Office, Number }: ImportantNumbersProps) => {
  return (
    <div className="flex flex-row justify-between border-b border-l border-r border-transparentpurple p-2">
      <div>{Office}</div>
      <div>{Number}</div>
    </div>
  );
};

const ImportantNumbers = () => {
  return (
    <div>
      <div className="text-yellow border border-transparentpurple p-2">
        Important Numbers
      </div>
      <ImportantNumbersDetails
        Office="Camping Ground Guard"
        Number="0897654321"
      />
      <ImportantNumbersDetails Office="Main Office" Number="0897654321" />
      <ImportantNumbersDetails
        Office="Restaurant and Cafe"
        Number="0897654321"
      />
    </div>
  );
};

export const Panel = () => {
  return (
    <div className="bg-royalpurple">
      <div className="pt-7 pl-5 pr-5 pb-3.5 space-y-7">
        <Title />
        <div className="h-px bg-transparentpurple" />
        <Activities />
        <ImportantNumbers />
      </div>
    </div>
  );
};
