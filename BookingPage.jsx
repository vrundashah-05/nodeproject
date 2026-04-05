import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

const BookingPage = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const navigate = useNavigate();

  const handleBooking = async () => {
    try {
      console.log("Sending:", { name, room, checkin, checkout });

      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, room, checkin, checkout }),
      });

      const data = await res.json();
      console.log("Response:", data);

      alert(data.message);

      // ✅ RESET FORM
      setName("");
      setRoom("");
      setCheckin("");
      setCheckout("");

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Booking Failed ❌");
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-box">
        <h2>BOOK YOUR STAY</h2>

        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Room Type (Deluxe, Suite...)"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />

        <input
          type="date"
          value={checkin}
          onChange={(e) => setCheckin(e.target.value)}
        />

        <input
          type="date"
          value={checkout}
          onChange={(e) => setCheckout(e.target.value)}
        />

        <button onClick={handleBooking}>
          CONFIRM BOOKING
        </button>
      </div>
    </div>
  );
};

export default BookingPage;