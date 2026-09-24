import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import BookingModal from './BookingModal';

const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preset, setPreset] = useState(null);

  const openBooking = useCallback((presetSlot) => {
    setPreset(presetSlot || null);
    setIsOpen(true);
  }, []);
  const closeBooking = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ openBooking, closeBooking }), [openBooking, closeBooking]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      {isOpen && <BookingModal onClose={closeBooking} preset={preset} />}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
};
