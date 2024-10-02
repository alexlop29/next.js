const Greeting = () => {
  return (
    <div className="">
      <div className="text-3xl text-orange">Hi, Samantha</div>
      <div className="text-xl text-purple">
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
      <div className="text-md text-black">{title}</div>
      <div className="text-xl text-black font-bold">{content}</div>
    </div>
  );
};

const Reservation = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 border-b-2">
        <div className="border-r-2">
          <ReservationDetails title="CHECK-IN DATE" content="Wed, Oct 09" />
        </div>
        <ReservationDetails title="CHECK-OUT DATE" content="Fri, Oct 12" />
      </div>
      <div className="grid grid-cols-2 border-b-2">
        <div className="border-r-2">
          <ReservationDetails title="NUM OF GUESTS" content="5 persons" />
        </div>
        <ReservationDetails title="CAMP AREA" content="Main Area" />
      </div>
    </div>
  );
};

const ReceiptDetails = ({ title, content }: DetailsProps) => {
  return (
    <div className="flex flex-row justify-between border-b-2">
      <div className="text-dark font-medium">{title}</div>
      <div className="text-dark">{content}</div>
    </div>
  );
};

const Download = () => {
  return (
    <div className="bg-black">
      <div className="text-white">Download Receipt</div>
      {/* <div className="text-white">Right Arrow Icon</div> */}
    </div>
  );
};

const Receipt = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <ReceiptDetails title="Amount" content="$1,800" />
      <ReceiptDetails title="Status" content="Paid" />
      <ReceiptDetails title="Payment via" content="Credit Card" />
      <Download />
    </div>
  );
};

const CompanyExcerpt = () => {
  return (
    <div className="text-dark">
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
      <div className="pt-7 pl-5 pr-5 pb-3.5 space-y-7">
      <Greeting />
      <Reservation />
      <Receipt />
      <CompanyExcerpt />
      </div>
    </div>
  );
};
