import Head from 'next/head';
import { ArtCard } from '../components/ArtCard';
import { artists } from '../mock-data/artists';
import { artPieces } from '../mock-data/artPieces';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ArtHive</title>
        <meta name="description" content="Simulated social media platform for local artists" />
      </Head>
      <h1>Featured Art Pieces</h1>
      <div>
        {artPieces.map((artPiece) => (
          <ArtCard key={artPiece.id} artPiece={artPiece} />
        ))}
      </div>
    </div>
  );
}