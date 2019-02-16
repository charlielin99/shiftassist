import PageNavWrapper from "../PageNavWrapper/PageNavWrapper";
import PatientsContainer from "../../containers/PatientContainer/PatientContainer";
import React from "react";
export default function Patients() {
  return (
    <PageNavWrapper>
      <PatientsContainer />
    </PageNavWrapper>
  );
}
