import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PropertyDetail from '@/components/property/PropertyDetail';
import { PropertyProps } from '@/interfaces';

export default function PropertyDetailPage() {
    const router = useRouter();
    const { id } = router.query;
    const [property, setProperty] = useState<PropertyProps | null>(null);
    const [loading, setLoading] = useState(true);


    /**
     * fetch property details based on the id from the URL
     * Handle loading and error states appropriately
     * Only fetch if ID exists (to avoid fetching on initial render when ID is undefined)
     */
    useEffect(() => {
        const fetchProperty = async () => {
            if (!id) return; // Don't fetch if no ID yet
            
            try {
                setLoading(true);
                const response = await axios.get(`/api/properties/${id}`)
                setProperty(response.data)
            } catch (error) {
                console.error("Error fetching property details:", error)
                setProperty(null); // Set to null if error occurs
            } finally {
                setLoading(false);
            }
        }
        
        fetchProperty(); // Don't forget to call the function!
    }, [id])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#34967C]"></div>
                    <p className="mt-4 text-gray-600">Loading property details...</p>
                </div>
            </div>
        )
    }

    if (!property) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Property not found</h1>
                    <p className="text-gray-600 mb-4">The property you&apos;re looking for doesn&apos;t exist.</p>
                    <button 
                        onClick={() => router.push('/')}
                        className="bg-[#34967C] text-white px-4 py-2 rounded-lg hover:bg-[#2D7F6A] transition"
                    >
                        Back to Properties
                    </button>
                </div>
            </div>
        )
    }

    return (<PropertyDetail property={property} />)
}
