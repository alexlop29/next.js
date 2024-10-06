// icons
import RightArrowIcon from "@/assets/icons/RightArrow";

const Greeting = () => {
  return (
    <div className="">
      <div className="text-3xl text-orange text-black">Hi, Samantha</div>
      <div className="text-xl text-purple text-black">
        We can't wait to welcome you here!
      </div>
    </div>
  );
};

type DetailsProps = {
  title: string;
  content: string;
};

const ReservationDetails = ({ title, content }: DetailsProps): JSX.Element => {
  return (
    <div>
      <div className="text-xs text-black font-medium">{title}</div>
      <div className="text-xl text-black font-bold">{content}</div>
    </div>
  );
};

const Reservation = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 border-b">
        <div className="border-r pr-4 pb-2">
          <ReservationDetails title="CHECK-IN DATE" content="Wed, Oct 09" />
        </div>
        <div className="pl-4 pb-2">
        <ReservationDetails title="CHECK-OUT DATE" content="Fri, Oct 12" />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="border-r pr-4 pt-4">
          <ReservationDetails title="NUM OF GUESTS" content="5 persons" />
        </div>
        <div className="pl-4 pt-4">
        <ReservationDetails title="CAMP AREA" content="Main Area" />
        </div>
      </div>
    </div>
  );
};

const ReceiptDetails = ({ title, content }: DetailsProps) => {
  return (
    <div className="flex flex-row justify-between border-l border-r border-b p-4">
      <div className="text-dark font-bold">{title}</div>
      <div className="text-dark">{content}</div>
    </div>
  );
};

const Download = () => {
  return (
    <div className="bg-black flex flex-row p-4 cursor-pointer justify-end items-center">
      <div className="text-white text-sm mr-24">Download Receipt</div>
      <div className="flex-none">
        <RightArrowIcon />
      </div>
    </div>
  );
};



const Receipt = () => {
  return (
    <div className="max-w-sm shadow-2xl justify-center">
      <ReceiptDetails title="Amount" content="$1,800" />
      <ReceiptDetails title="Status" content="Paid" />
      <ReceiptDetails title="Payment via" content="Credit Card" />
      <Download />
    </div>
  );
};

const CompanyExcerpt = () => {
  return (
    <div className="text-dark font-medium">
      Manhattan Green Camp, your perfect escape into nature. Nestled in lush
      forests and near serene lakes, our campground offers tent sites, RV
      spaces, and cabins for a relaxing outdoor experience. Whether you're a
      seasoned camper or a first-timer, we provide the comforts of home while
      keeping you close to nature.
    </div>
  );
};

export const Panel = () => {
  return (
    <div className="bg-offwhite">
      <div className="pt-8 pb-8 pl-8 pr-8 space-y-12">
        <Greeting />
        <Reservation />
        <Receipt />
        <CompanyExcerpt />
      </div>
    </div>
  );
};
