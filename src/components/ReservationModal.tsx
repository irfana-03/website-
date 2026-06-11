"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useApp } from "../context/AppContext";
import Button from "./Button";

const STEPS = ["Date", "Time", "Guests", "Preference", "Details"];
const TIMES = ["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"];
const GUEST_OPTIONS = ["2", "3", "4", "5", "6+"];
const PREFERENCES = ["Indoor Lounge", "Outdoor Terrace", "Bar Seating", "Private Dining"];

interface BookingData {
  date: string;
  time: string;
  guests: string;
  preference: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

const initialData: BookingData = {
  date: "",
  time: "",
  guests: "",
  preference: "",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

export default function ReservationModal() {
  const { isReservationOpen, closeReservation } = useApp();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<BookingData>(initialData);
  const [completed, setCompleted] = useState(false);

  const update = (field: keyof BookingData, value: string) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const canProceed = () => {
    if (step === 0) return !!data.date;
    if (step === 1) return !!data.time;
    if (step === 2) return !!data.guests;
    if (step === 3) return !!data.preference;
    if (step === 4) return !!data.name && !!data.phone;
    return false;
  };

  const handleClose = () => {
    closeReservation();
    setTimeout(() => {
      setStep(0);
      setData(initialData);
      setCompleted(false);
    }, 400);
  };

  const handleSubmit = () => {
    setCompleted(true);
  };

  return (
    <AnimatePresence>
      {isReservationOpen && (
        <motion.div
          className="reservation-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="reservation-modal glass-panel"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="reservation-close" onClick={handleClose} aria-label="Close">
              <X size={24} />
            </button>

            {completed ? (
              <motion.div
                className="reservation-success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="success-icon">
                  <Check size={48} />
                </div>
                <h2>Reservation Confirmed</h2>
                <p>
                  Thank you, {data.name}. Your table for {data.guests} on{" "}
                  {data.date} at {data.time} is reserved.
                </p>
                <Button variant="primary" onClick={handleClose}>
                  Done
                </Button>
              </motion.div>
            ) : (
              <div className="reservation-body">
                <div className="reservation-main">
                  <div className="reservation-steps">
                    {STEPS.map((label, i) => (
                      <div
                        key={label}
                        className={`step-indicator ${i === step ? "active" : ""} ${i < step ? "done" : ""}`}
                      >
                        <span className="step-num">{i < step ? "✓" : i + 1}</span>
                        <span className="step-label">{label}</span>
                      </div>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      className="step-content"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4 }}
                    >
                      {step === 0 && (
                        <>
                          <h2>Select Your Date</h2>
                          <input
                            type="date"
                            className="reservation-input"
                            value={data.date}
                            onChange={(e) => update("date", e.target.value)}
                          />
                        </>
                      )}
                      {step === 1 && (
                        <>
                          <h2>Choose a Time</h2>
                          <div className="option-grid">
                            {TIMES.map((t) => (
                              <button
                                key={t}
                                className={`option-btn ${data.time === t ? "selected" : ""}`}
                                onClick={() => update("time", t)}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                      {step === 2 && (
                        <>
                          <h2>Number of Guests</h2>
                          <div className="option-grid">
                            {GUEST_OPTIONS.map((g) => (
                              <button
                                key={g}
                                className={`option-btn ${data.guests === g ? "selected" : ""}`}
                                onClick={() => update("guests", g)}
                              >
                                {g} {g === "6+" ? "" : g === "1" ? "Guest" : "Guests"}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                      {step === 3 && (
                        <>
                          <h2>Seating Preference</h2>
                          <div className="option-grid option-grid-wide">
                            {PREFERENCES.map((p) => (
                              <button
                                key={p}
                                className={`option-btn ${data.preference === p ? "selected" : ""}`}
                                onClick={() => update("preference", p)}
                              >
                                {p}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                      {step === 4 && (
                        <>
                          <h2>Your Details</h2>
                          <div className="form-fields">
                            <div className="field">
                              <label>Full Name</label>
                              <input
                                type="text"
                                className="reservation-input"
                                value={data.name}
                                onChange={(e) => update("name", e.target.value)}
                              />
                            </div>
                            <div className="field">
                              <label>Phone</label>
                              <input
                                type="tel"
                                className="reservation-input"
                                value={data.phone}
                                onChange={(e) => update("phone", e.target.value)}
                              />
                            </div>
                            <div className="field">
                              <label>Email (optional)</label>
                              <input
                                type="email"
                                className="reservation-input"
                                value={data.email}
                                onChange={(e) => update("email", e.target.value)}
                              />
                            </div>
                            <div className="field">
                              <label>Special Requests</label>
                              <textarea
                                className="reservation-input"
                                rows={3}
                                value={data.notes}
                                onChange={(e) => update("notes", e.target.value)}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <div className="reservation-nav">
                    {step > 0 && (
                      <button className="nav-btn" onClick={() => setStep((s) => s - 1)}>
                        <ChevronLeft size={18} /> Back
                      </button>
                    )}
                    {step < STEPS.length - 1 ? (
                      <Button
                        variant="primary"
                        disabled={!canProceed()}
                        onClick={() => setStep((s) => s + 1)}
                        style={{ marginLeft: "auto" }}
                      >
                        Continue <ChevronRight size={16} style={{ marginLeft: 8, verticalAlign: "middle" }} />
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        disabled={!canProceed()}
                        onClick={handleSubmit}
                        style={{ marginLeft: "auto" }}
                      >
                        Confirm Reservation
                      </Button>
                    )}
                  </div>
                </div>

                <div className="reservation-summary glass-card">
                  <h3>Booking Summary</h3>
                  <div className="summary-item">
                    <span>Date</span>
                    <strong>{data.date || "—"}</strong>
                  </div>
                  <div className="summary-item">
                    <span>Time</span>
                    <strong>{data.time || "—"}</strong>
                  </div>
                  <div className="summary-item">
                    <span>Guests</span>
                    <strong>{data.guests || "—"}</strong>
                  </div>
                  <div className="summary-item">
                    <span>Preference</span>
                    <strong>{data.preference || "—"}</strong>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
