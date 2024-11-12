import { useState } from "react";

export const useTalkinghead = () => {
  const [disableTalkingHeadFlag, setDisableTalkingHeadFlag] =
    useState<boolean>(false);
  const [hideTalkingHeadFlag, setHideTalkingHeadFlag] =
    useState<boolean>(false);

  const toggleDisableTalkingHead = () => {
    setDisableTalkingHeadFlag((prev) => !prev);
  };

  const toggleHideTalkingHead = () => {
    setHideTalkingHeadFlag((prev) => !prev);
  };

  return {
    disableTalkingHeadFlag,
    hideTalkingHeadFlag,
    toggleDisableTalkingHead,
    toggleHideTalkingHead,
  };
};
