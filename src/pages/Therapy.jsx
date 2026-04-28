import { useState } from 'react';
import FeatureHero from '../components/features/FeatureHero';
import TherapistList from '../components/therapy/TherapistList';
import TherapistProfile from '../components/therapy/TherapistProfile';
import BookingCalendar from '../components/therapy/BookingCalendar';
import TimeSlotPicker from '../components/therapy/TimeSlotPicker';
import BookingConfirmation from '../components/therapy/BookingConfirmation';
import Modal from '../components/ui/Modal';
import Button from '../components/ui/Button';
import Footer from '../components/layout/Footer';
import { FEATURES } from '../utils/constants';

export default function Therapy() {
  const feature = FEATURES.find(f => f.id === 'therapy');
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleBook = () => {
    setShowProfile(false);
    setShowBooking(true);
  };

  const handleConfirm = () => {
    setShowBooking(false);
    setShowConfirmation(true);
  };

  return (
    <main>
      <FeatureHero 
        title={feature.title}
        subtitle={feature.heroSubtitle}
        label={feature.label}
        theme={feature.theme}
      />
      <section className="section-padding" style={{ background: 'var(--aura-off-white)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h3)', marginBottom: 'var(--space-2)', textAlign: 'center' }}>
            Our Therapists
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--aura-text-secondary)', marginBottom: 'var(--space-8)', maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
            Licensed professionals ready to support you on your journey
          </p>
          <TherapistList onSelect={(t) => {
            setSelectedTherapist(t);
            setShowProfile(true);
          }} />
        </div>
      </section>

      <TherapistProfile 
        therapist={selectedTherapist}
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
        onBook={handleBook}
      />

      <Modal 
        isOpen={showBooking} 
        onClose={() => setShowBooking(false)}
        title={`Book with ${selectedTherapist?.name}`}
      >
        <BookingCalendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
        <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 'var(--space-4) 0 var(--space-2)' }}>
          Available Times
        </h4>
        <TimeSlotPicker selectedSlot={selectedSlot} onSelect={setSelectedSlot} />
        <Button 
          variant="primary" 
          onClick={handleConfirm}
          disabled={!selectedSlot}
          style={{ width: '100%', marginTop: 'var(--space-4)' }}
        >
          Confirm Booking
        </Button>
      </Modal>

      <BookingConfirmation 
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        therapist={selectedTherapist?.name}
        date={selectedDate.toLocaleDateString()}
        time={selectedSlot}
      />
      <Footer />
    </main>
  );
}
