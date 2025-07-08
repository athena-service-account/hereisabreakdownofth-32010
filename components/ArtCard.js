import Link from 'next/link';

export const ArtCard = ({ artPiece }) => {
  return (
    <div>
      <h2>{artPiece.title}</h2>
      <p>Price: {artPiece.price}</p>
      <Link href={`/art-detail/${artPiece.id}`}>
        <a>View details</a>
      </Link>
    </div>
  );
};