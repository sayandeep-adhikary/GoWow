import React from "react";
import styles from "./CardView.module.css";
import { Box, Text } from "@chakra-ui/react";
import OpportunityCard from "./OpportunityCard/OpportunityCard";

export default function CardView() {
  return (
    <div className="container-fluid" style={{padding: '0 5rem'}}> 
      <div className="row">
        <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
          <OpportunityCard />
        </div>
        <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
          <OpportunityCard />
        </div>
        <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
          <OpportunityCard />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
          <OpportunityCard />
        </div>
        <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
          <OpportunityCard />
        </div>
        <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
          <OpportunityCard />
        </div>
      </div>
    </div>
  );
}
