"use client";
import dynamic from "next/dynamic";
import { useConfirmAddress } from "@mapbox/search-js-react";
import { useState, useCallback } from "react";

const AddressAutofill = dynamic(
  //@ts-ignore
  () => import("@mapbox/search-js-react").then((mod) => mod.AddressAutofill),
  { ssr: false },
);

// types
interface ProjectAddress {
  address: string;
  apt_suite_unit: string;
  city: string;
  state: string;
  zip_code: string;
}

// env
const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

const page = () => {
  const { formRef } = useConfirmAddress({
    accessToken: MAPBOX_ACCESS_TOKEN,
  });

  const [value, setValue] = useState<ProjectAddress>({
    address: "",
    apt_suite_unit: "",
    city: "",
    state: "",
    zip_code: "",
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = {
        ...value,
        [e.target.name]: e.target.value,
      };
      setValue(newValue);
    },
    [value],
  );

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 p-4">
      <div className="sm:col-span-1 bg-white p-4 rounded-lg text-black">
        <form ref={formRef}>
          <div className="flex flex-row w-full space-x-2">
            <div className="flex flex-col w-3/5">
              <div>Address</div>
              <AddressAutofill accessToken={MAPBOX_ACCESS_TOKEN}>
                <input
                  className="border w-full h-8 text-black outline-none p-2"
                  autoComplete="address-line1"
                  name="address"
                  value={value?.address}
                  onChange={handleChange}
                  required
                  placeholder=""
                />
              </AddressAutofill>
            </div>

            <div className="flex flex-col w-2/5">
              <div>Apt/Suite/Unit</div>
              <input
                className="border h-8 text-black bg-white outline-none p-2"
                autoComplete="address-line2"
                name="apt_suite_unit"
                value={value?.apt_suite_unit}
                onChange={handleChange}
                placeholder=""
              />
            </div>
          </div>

          <div className="flex flex-row w-full space-x-2 pb-1">
            <div className="flex flex-col">
              <div>City</div>
              <input
                className="border h-8 w-full text-black bg-white outline-none p-2"
                autoComplete="address-level2"
                name="city"
                value={value?.city}
                onChange={handleChange}
                required
                placeholder=""
              />
            </div>

            <div className="flex flex-col">
              <div>State</div>
              <input
                className="border h-8 w-full text-black bg-white outline-none p-2"
                autoComplete="address-level1"
                name="state"
                value={value?.state}
                onChange={handleChange}
                required
                placeholder=""
              />
            </div>

            <div className="flex flex-col">
              <div>Zip Code</div>
              <input
                className="border h-8 w-full text-black bg-white outline-none p-2"
                autoComplete="postal-code"
                name="zip_code"
                value={value?.zip_code}
                onChange={handleChange}
                required
                placeholder=""
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
