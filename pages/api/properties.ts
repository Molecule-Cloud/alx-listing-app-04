// Next.js API route for fetching all properties
import { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Simulate API delay (optional - for realistic loading states)
      // await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Return the properties data
      res.status(200).json(PROPERTYLISTINGSAMPLE);
    } catch (error) {
      console.error('Error fetching properties:', error);
      res.status(500).json({ error: 'Failed to fetch properties' });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
