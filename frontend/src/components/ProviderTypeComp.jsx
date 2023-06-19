import React from "react";
import ProviderCard from "../pages/ProviderCard";
import providersWithChangedType from "../providersWithChangeType";
import { useLoaderData } from "react-router-dom";
export const ProviderType = (props) => {
  const initialProviders = useLoaderData();

  const filteredProviders = initialProviders.filter(
    (provider) => provider.provider_businessType === props.type
  );

  return (
    <ProviderCard
      providers={props.type === "all" ? initialProviders : filteredProviders}
      isHome = {props.type === "all" ? true : false}
    />
  );
};
