import TherapistCard from './TherapistCard';

const mockTherapists = [
  { id: 1, name: 'Dr. Sarah Mitchell', specialty: 'Anxiety & Stress', bio: 'Licensed clinical psychologist with 12 years of experience helping students manage anxiety, stress, and academic pressure.', rating: 4.9 },
  { id: 2, name: 'Dr. James Chen', specialty: 'Depression & CBT', bio: 'Specializes in cognitive behavioral therapy and evidence-based approaches to depression and mood disorders.', rating: 4.8 },
  { id: 3, name: 'Maria Rodriguez', specialty: 'Trauma & PTSD', bio: 'Trauma-informed therapist with expertise in EMDR and narrative therapy for complex trauma recovery.', rating: 4.9 },
  { id: 4, name: 'Dr. Aisha Patel', specialty: 'Relationships', bio: 'Expert in interpersonal dynamics, attachment theory, and building healthier relationship patterns.', rating: 4.7 },
  { id: 5, name: 'David Park', specialty: 'Mindfulness', bio: 'Integrative therapist combining mindfulness practices with traditional therapy for holistic wellness.', rating: 4.8 },
  { id: 6, name: 'Dr. Emily Foster', specialty: 'Self-Esteem', bio: 'Dedicated to helping students build confidence, self-worth, and a positive self-image through compassionate therapy.', rating: 4.9 },
];

export default function TherapistList({ onSelect }) {
  return (
    <div className="therapist-grid">
      {mockTherapists.map(therapist => (
        <TherapistCard 
          key={therapist.id} 
          {...therapist} 
          onBook={() => onSelect?.(therapist)}
        />
      ))}
    </div>
  );
}
