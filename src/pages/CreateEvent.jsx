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

      // ✅ Go directly to Events
      navigate("/events");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create event");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create Event
        </h2>

        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
          required
        />

        <input
          type="datetime-local"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          required
        />

        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <input
          type="number"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
          placeholder="Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}
