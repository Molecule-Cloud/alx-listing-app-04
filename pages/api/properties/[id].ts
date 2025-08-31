// Next.js API route for fetching a single property by ID
import { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      // Convert id to number for comparison
      const propertyId = parseInt(id as string);
      
      // Find the property with matching ID
      const property = PROPERTYLISTINGSAMPLE.find(prop => prop.id === propertyId);
      
      if (!property) {
        return res.status(404).json({ error: 'Property not found' });
      }
      
      // Simulate API delay (optional)
      // await new Promise(resolve => setTimeout(resolve, 800));
      
      res.status(200).json(property);
    } catch (error) {
      console.error('Error fetching property:', error);
      res.status(500).json({ error: 'Failed to fetch property' });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
