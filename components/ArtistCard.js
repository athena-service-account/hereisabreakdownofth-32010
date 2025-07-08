import Link from 'next/link';

export const ArtistCard = ({ artist }) => {
  return (
    <div>
      <h2>{artist.name}</h2>
      <p>{artist.bio}</p>
      <Link href={`/artist-profile/${artist.id}`}>
        <a>View profile</a>
      </Link>
    </div>
  );
};