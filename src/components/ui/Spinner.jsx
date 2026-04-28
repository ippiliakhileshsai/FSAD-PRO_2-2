export default function Spinner({ size = 'md', white = false }) {
  return (
    <div className={`spinner spinner-${size} ${white ? 'spinner-white' : ''}`} />
  );
}
