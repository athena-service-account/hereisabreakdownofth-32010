# hereisabreakdownofth

**Project ID:** hereisabreakdownofth-32010
**Port:** 3001
**Created:** Tue Jul  8 11:14:00 UTC 2025

## Overview

ArtHive is a simulated social media platform designed to connect local artists with potential buyers in their area. The application will have a vibrant, modern design, incorporating a palette of colors that evoke creativity and community. All functionality, including user profiles, art showcases, and purchase interactions, will be simulated on the client-side, using mock data to demonstrate the platform's features.

The application's core functionality will be managed through a combination of hardcoded mock data and client-side logic. This will allow users to browse through a catalog of local art pieces, view artist profiles, and engage with the community through simulated comments and reviews. The platform will also include features for artists to manage their portfolios, set prices for their work, and track "sales" through the simulated environment.

Here is a breakdown of the core features and components:
*   **Pages:**
  *   **Home:** A showcase of featured local art pieces, with filters for location, art type, and price range.
  *   **Artist Profile:** A page dedicated to each artist, displaying their bio, portfolio, and contact information.
  *   **Art Detail:** A page for each art piece, including images, descriptions, prices, and a "buy now" button that simulates a purchase.
*   **Core Components:**
  *   **`ArtCard`:** A component that displays a single art piece, with image, title, price, and a "view details" button.
  *   **`ArtistCard`:** A component showcasing an artist, with their image, name, bio snippet, and a "view profile" button.
  *   **`PurchaseSimulator`:** A component that simulates the buying process, updating the user's mock "cart" and providing a confirmation message.
*   **Mock Data Structure:**
  *   **`artists.js`:** An array of artist objects, each containing `id`, `name`, `bio`, `portfolio` (an array of art piece IDs), and `location`.
  *   **`artPieces.js`:** An array of art piece objects, each with `id`, `title`, `description`, `price`, `imageUrl`, and `artistId` (linking to the artist).

## Development

This project was auto-generated and is running on port 3001.

```bash
npm install
PORT=3001 npm run dev
```

Visit: http://localhost:3001

## Auto-Generated

This project was created using the Project Manager system.
- Template: cloudflare-next-pages-2025july6
- Generated: Tue Jul  8 11:14:00 UTC 2025
