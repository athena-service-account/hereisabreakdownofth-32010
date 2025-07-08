import { ArtistCard } from '../components/ArtistCard';
import { artists } from '../mock-data/artists';
import { useRouter } from 'next/router';

export default function ArtistProfile() {
  const router = useRouter();
  const { id } = router.query;
  const artist = artists.find((artist) => artist.id === parseInt(id));

  if (!artist) return <div>Artist not found</div>;

  return (
    <div>
      <h1>{artist.name}</h1>
      <p>{artist.bio}</p>
      <h2>Portfolio</h2>
      <div>
        {artist.portfolio.map((artPieceId) => (
          <div key={artPieceId}>Art Piece {artPieceId}</div>
        ))}
      </div>
    </div>
  );
}