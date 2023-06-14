import React from "react";
import ProviderCard from "../pages/ProviderCard";
import providersWithChangedType from "../providersWithChangeType"

export const ProviderType = (props) => {
  const providers = providersWithChangedType.filter(provider => provider.type === props.type)
  return <ProviderCard providers={providers} />;
};
