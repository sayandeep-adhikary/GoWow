import { Box } from "@chakra-ui/react";
import React from "react";

export default function NotificationCard() {
  return (
    <Box className="card" borderRadius={"lg"}>
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 d-flexflex-column align-items-center justify-content-start">
              <h5 className="card-title">
                स्वास्थ्य शिविर के लिए Volunteers की आवश्यकता
              </h5>
              <p className="card-text text-muted">
                New Opportunity Added : 13-Jun-2023
              </p>
            </div>
            <div className="col-sm-12 col-lg-6 d-flex align-items-center justify-content-end">
              <p className="card-text" style={{color: '#5B4899'}}>10:30 Am</p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
