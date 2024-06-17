import React from "react";

export default function LoadingSpinner(): React.JSX.Element {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-8 h-8 border-4 border-custom-black rounded-full border-t-transparent animate-spin"></div>
        <div className=" text-2xl">Generating storybook...</div>
      </div>
    </div>
  );
}
