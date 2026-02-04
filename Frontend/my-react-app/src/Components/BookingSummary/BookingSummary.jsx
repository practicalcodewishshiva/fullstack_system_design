import React from "react";

export default function BookingSummary() {
  const userDetails = [
    {
      location: "Hyderabad",
      status: "Completed",
      trip: "One Way Bus",
      bookingId: "NU711851152537392",
    },
    {
      location: "Hyderabad",
      status: "Completed",
      trip: "One Way Bus",
      bookingId: "NU711851152537392",
    },
    {
      location: "Hyderabad",
      status: "Completed",
      trip: "One Way Bus",
      bookingId: "NU711851152537392",
    },
    {
      location: "Hyderabad",
      status: "Completed",
      trip: "One Way Bus",
      bookingId: "NU711851152537392",
    },
    {
      location: "Hyderabad",
      status: "Completed",
      trip: "One Way Bus",
      bookingId: "NU711851152537392",
    },

    {
      location: "Hyderabad",
      status: "Completed",
      trip: "One Way Bus",
      bookingId: "NU711851152537392",
    },
    {
      location: "Hyderabad",
      status: "Completed",
      trip: "One Way Bus",
      bookingId: "NU711851152537392",
    },
    {
      location: "Hyderabad",
      status: "Completed",
      trip: "One Way Bus",
      bookingId: "NU711851152537392",
    },
  ];
  return (
    <>
      BookingSummary
      {userDetails.map((userDetails, index) => {
        return (
          <>
            <div class="card" style={{ width: "100%" }}>
              <div class="card-header">Featured</div>
              <div class="card-body">
                <h5 class="card-title">{userDetails.location}</h5>
                <h6>Trip : {userDetails.trip}</h6>
                <p class="card-text">Booking ID - {userDetails.bookingId}</p>
                <a href="#" class="btn btn-primary">
                  View and Booking Histroy
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
