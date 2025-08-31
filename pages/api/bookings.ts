// Next.js API route for handling booking submissions
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const bookingData = req.body;
      
      // Validate required fields
      const requiredFields = ['firstName', 'lastName', 'email', 'phoneNumber'];
      const missingFields = requiredFields.filter(field => !bookingData[field]);
      
      if (missingFields.length > 0) {
        return res.status(400).json({ 
          error: `Missing required fields: ${missingFields.join(', ')}` 
        });
      }
      
      // Simulate processing delay
      // await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, you would:
      // 1. Validate the data more thoroughly
      // 2. Save to database
      // 3. Send confirmation emails
      // 4. Process payment
      
      console.log('Booking received:', bookingData);
      
      // Return success response
      res.status(201).json({
        success: true,
        message: 'Booking submitted successfully!',
        bookingId: `BK-${Date.now()}`, // Mock booking ID
        data: bookingData
      });
      
    } catch (error) {
      console.error('Error processing booking:', error);
      res.status(500).json({ error: 'Failed to process booking' });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
