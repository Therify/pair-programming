import React from "react";

export interface Provider {
  designation: "Therapist" | "Coach";
  name: string;
  specialties: ("Anger" | "Depression" | "Grief")[];
}

interface CareContext {
  providers: Provider[];
}

export const CareContext = React.createContext({
  providers: [],
});

export const CareProvider = () => {
  return (
    <CareContext.Provider
      value={{
        providers: [],
      }}
    >
      {/* children */}
    </CareContext.Provider>
  );
};
