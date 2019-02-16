import IndividualPatientContainer from "../../areas/patient/PatientContainer";
import PageNavWrapper from "../PageNavWrapper/PageNavWrapper";
import React from "react";

export default function Patient(props) {
  return (
    <PageNavWrapper>
      <IndividualPatientContainer {...props} />
    </PageNavWrapper>
  );
}
