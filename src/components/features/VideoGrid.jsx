import VideoCard from './VideoCard';

const mockVideos = [
  { id: 1, title: 'Understanding Anxiety', duration: '12:34', views: 2400, thumbnail: null },
  { id: 2, title: 'Coping with Academic Stress', duration: '8:22', views: 1800, thumbnail: null },
  { id: 3, title: 'Building Self-Esteem', duration: '15:10', views: 3200, thumbnail: null },
  { id: 4, title: 'Mindfulness for Students', duration: '10:45', views: 5100, thumbnail: null },
  { id: 5, title: 'Overcoming Social Anxiety', duration: '14:30', views: 2900, thumbnail: null },
  { id: 6, title: 'Sleep Hygiene Tips', duration: '7:15', views: 4300, thumbnail: null },
];

export default function VideoGrid({ videos = mockVideos }) {
  return (
    <div className="video-grid">
      {videos.map(video => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
}
