// Next.js API route for fetching property reviews
import { NextApiRequest, NextApiResponse } from 'next';

// Mock reviews data
const MOCK_REVIEWS = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Amazing property! The location was perfect and the host was very responsive. Would definitely stay again!"
  },
  {
    id: 2,
    name: "Michael Chen", 
    rating: 4,
    comment: "Great place with beautiful views. Minor issues with WiFi but overall excellent experience."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 5,
    comment: "Absolutely loved our stay! The property was exactly as described and even better in person."
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 4,
    comment: "Comfortable and clean. Good location for exploring the area. Host provided helpful local recommendations."
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      // In a real app, you'd filter reviews by property ID
      // For now, we'll return the same mock reviews for all properties
      
      // Simulate API delay (optional)
      // await new Promise(resolve => setTimeout(resolve, 600));
      
      res.status(200).json(MOCK_REVIEWS);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      res.status(500).json({ error: 'Failed to fetch reviews' });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
