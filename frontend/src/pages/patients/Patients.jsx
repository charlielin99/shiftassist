import PageNavWrapper from "../PageNavWrapper/PageNavWrapper";
import PatientsContainer from "../../areas/patients/PatientsContainer";
import React from "react";
export default function Patients(props) {
  console.log(props);

  return (
    <PageNavWrapper>
      <PatientsContainer />
    </PageNavWrapper>
  );
}
