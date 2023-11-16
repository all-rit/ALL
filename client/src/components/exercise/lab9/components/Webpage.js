import React, { useEffect, useState } from "react";
import uni from "../../../../assets/images/lab9/uni.jpeg";

import NewsletterForm from "./webpage-subcomponents/NewsletterForm";
import WebpageNav from "./webpage-subcomponents/WebpageNav";
import WebpageHeader from "./webpage-subcomponents/WebpageHeader";
import WebpageSidebar from "./webpage-subcomponents/WebpageSidebar";
import { ExerciseService } from "../../../../services/lab9/ExerciseService"
/**
 * Webpage is a reusable component used to display
 * the ALL University's website homepage.
 * The webpage features a navbar, header, form, and sidebar,
 * each of which are sub-components.
 * @returns rendered webpage
 */
const Webpage = () => {
  const [isNavComplete, setNavComplete] = useState(false)
  const [isDateComplete, setDateComplete] = useState(false)
  const [isAddressComplete, setAddressComplete] = useState(false)

  useEffect(() => {
    const fetchRepair = async () => {
      const response = ExerciseService.fetchExercise()
      const isNavRepaired = response.isNavComplete
      const isDateRepaired = response.isDateComplete
      const isAddressRepaired = response.isAddressComplete
      isNavRepaired ? setNavComplete(true) : setNavComplete(false)
      isDateRepaired ? setDateComplete(true) : setDateComplete(false)
      isAddressRepaired ? setAddressComplete(true) : setAddressComplete(false)
    }
    fetchRepair()
  }, [])
  return (
    <div className="tw-bg-white tw-flex tw-flex-col">
      <div className="tw-flex-col tw-bg-white tw-relative tw-flex tw-min-h-[1024px] tw-w-full">
        <img
          loading="lazy"
          src={uni}
          className="tw-absolute tw-h-full tw-w-full tw-object-cover tw-object-center"
        />
        <WebpageNav repairComplete={isNavComplete} />
        <WebpageHeader />
        <div
          className="tw-flex tw-bg-[#260D0D] tw-w-full tw-flex-row tw-mt-60"
          style={{ zIndex: 1 }}
        >
          <div className="tw-w-full tw-flex tw-flex-row tw-mt-10">
            <div className="tw-flex tw-w-1/4 tw-ml-5">
              <WebpageSidebar />
            </div>
            <div className="tw-flex tw-w-3/4 tw-mr-5">
              <NewsletterForm
                isDateRepaired={isDateComplete}
                isAddressRepaired={isAddressComplete}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webpage;
