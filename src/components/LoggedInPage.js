export default function LoggedInPage() {
  return (
    <>
      <div className="display-1 mb-2">User Page!</div>
      <div className="display-4 mb-5">Welcome to Ticket Booking App</div>
      <div>
        <p className="display-6">Flight Details</p>
        <ul>
          <li>FlightNumber: 1001</li>
          <li>SeatNumber: 25-B</li>
          <li>ReferrenceNumber: NAI-123450-xxxx</li>
        </ul>
        <p className="text-muted">Last updated 3 mins ago</p>
      </div>
    </>
  );
}
