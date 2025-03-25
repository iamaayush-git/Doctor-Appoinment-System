import React, { useState, useEffect } from "react";

const TimeSlotPicker = () => {
  const clinicHours = { start: "09:00", end: "17:00" }; // 9 AM - 5 PM
  const appointmentDuration = 30; // 30 minutes per slot
  const lunchBreak = { start: "13:00", end: "14:00" }; // 1 PM - 2 PM

  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const [selectedDay, setSelectedDay] = useState(getWeekDays()[0]);
  const [bookedSlot, setBookedSlot] = useState(null);
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    setSlots(generateTimeSlots(selectedDate));
  }, [selectedDate]);

  function getTodayDate() {
    return new Date().toISOString().split("T")[0];
  }

  function getWeekDays() {
    let weekDays = [];
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let date = new Date();
      date.setDate(today.getDate() + i);
      weekDays.push({
        day: date.toLocaleDateString("en-US", { weekday: "long" }),
        date: date.toISOString().split("T")[0],
      });
    }
    return weekDays;

  }

  const formatTime = (time) => {
    let [hour, minute] = time.split(":");
    hour = parseInt(hour, 10);
    let period = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${period}`;
  };

  const generateTimeSlots = (date) => {
    let slots = [];
    let now = new Date();
    let selectedDay = new Date(date);
    let isToday = now.toDateString() === selectedDay.toDateString();

    let startTime = new Date();
    startTime.setHours(...clinicHours.start.split(":"));
    let endTime = new Date();
    endTime.setHours(...clinicHours.end.split(":"));

    while (startTime < endTime) {
      let slotTime = startTime.toTimeString().slice(0, 5);
      let isLunchBreak = slotTime >= lunchBreak.start && slotTime < lunchBreak.end;
      let isPastTime = isToday &&
        (startTime.getHours() < now.getHours() ||
          (startTime.getHours() === now.getHours() && startTime.getMinutes() < now.getMinutes()));

      if (!isLunchBreak && !isPastTime) {
        slots.push(slotTime);
      }

      startTime.setMinutes(startTime.getMinutes() + appointmentDuration);
    }

    return slots;
  };

  const bookSlot = (slot) => {
    if (bookedSlot === slot) {
      setBookedSlot(null); // Unselect if the same slot is clicked
    } else {
      setBookedSlot(slot);
    }
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setSelectedDate(day.date);
    setBookedSlot(null); // Reset slot when day changes
  };

  return (
    <div className="w-[60vw] mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">Select a Day</h2>
      <div className="flex justify-center space-x-2 mb-4">
        {getWeekDays().map((day, index) => (
          <button
            key={index}
            onClick={() => handleDayClick(day)}
            className={`px-4 py-2 rounded-md transition duration-300 ${selectedDay.date === day.date
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-black hover:bg-gray-400"
              }`}
          >
            {day.day}
          </button>
        ))}
      </div>

      <h2 className="text-lg font-semibold text-center mb-3 text-gray-700 mt-10">
        Available Time Slots for {selectedDay.day}
      </h2>
      <div className="grid grid-cols-3 gap-2">
        {slots.length > 0 ? (
          slots.map((slot, index) => (
            <button
              key={index}
              onClick={() => bookSlot(slot)}
              className={`p-2 rounded-md text-white text-center transition duration-300 ${bookedSlot === slot
                ? "bg-red-500 border-2 border-blue-400"
                : "bg-green-500 hover:bg-green-600"
                }`}
            >
              {formatTime(slot)}
            </button>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-600">No available slots</p>
        )}
      </div>
    </div>
  );
};

export default TimeSlotPicker;
