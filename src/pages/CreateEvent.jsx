import { useState } from "react";
import { createEvent } from "../api/events";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEvent({
        title,
        description,
        dateTime,
        location,
        capacity,
      });

      // ✅ BACK TO EVENTS
      navigate("/event");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create event");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Create Event</h2>

        <input className="w-full border p-2 mb-2" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <textarea className="w-full border p-2 mb-2" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
        <input type="datetime-local" className="w-full border p-2 mb-2" value={dateTime} onChange={e => setDateTime(e.target.value)} required />
        <input className="w-full border p-2 mb-2" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} required />
        <input type="number" className="w-full border p-2 mb-4" placeholder="Capacity" value={capacity} onChange={e => setCapacity(e.target.value)} required />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Create Event
        </button>
      </form>
    </div>
  );
}
