import React, { useState, useEffect } from "react";

import { useRouteLoaderData, useNavigate } from "react-router-dom";
import { getOnboardedProviders } from "../api";
import Select from "react-select";
const SearchBarDynamic = ({ compClassName }) => {
  // const onboardedProviders = useRouteLoaderData("home");
  // let onboardedProviders;

  useEffect(() => {
    console.log("asdasdasdasd");
    const fetchProviders = async () => {
      const providerArray = await getOnboardedProviders();

      setListOfProviderObjects(
        providerArray.map((provider) => {
          return {
            value: `/provider/profile/${provider.provider_id}`,
            label: `Provider: ${provider.provider_businessName}`,
          };
        })
      );
    };

    fetchProviders();
  }, []);

  const [listOfProviderObjects, setListOfProviderObjects] = useState([]);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  // const listOfProviderObjects = onboardedProviders.map((provider) => {
  //   return {
  //     value: `/provider/profile/${provider.provider_id}`,
  //     label: `Provider: ${provider.provider_businessName}`,
  //   };
  // });

  const handleSubmit = (event) => {
    event.preventDefault();
    return navigate(`${selected.value}`);
  };

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const options = [
    {
      value: "/providers/home_improvement",
      label: "Category: Home Improvement",
    },
    { value: "/providers/automotive", label: "Category: Automotive" },
    { value: "/providers/landscaping", label: "Category: Landscaping" },
    { value: "/providers/personal_care", label: "Category: Personal Care" },
    { value: "/providers/pet_care", label: "Category: Pet Care" },
    { value: "/providers/designer_artist", label: "Category: Designer & Art" },
    { value: "/providers/events", label: "Category: Events" },
    { value: "/providers/technology", label: "Category: Technology" },
    ...listOfProviderObjects,
  ];
  return (
    <div
      className={
        "search-dropdown-container text-start mt-4 mb-4 " + compClassName
      }
    >
      <Select
        className="react-select-container"
        classNamePrefix={"react-select-" + compClassName}
        options={options}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        onChange={handleChange}
      />
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="css-i6dzq1 search-glasses"
        onClick={handleSubmit}
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </div>
  );
};

export default SearchBarDynamic;
