import { useState, useEffect } from "react";
import axios from "axios";
import { PropertyReviews } from "@/interfaces";

const ReviewSection: React.FC<PropertyReviews> = ({ propertyId }) => {
    const [reviews, setReviews] = useState<Array<{id: number, name: string, rating: number, comment: string}>>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/properties/${propertyId}/reviews`);
                setReviews(response.data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchReviews()
    } , [propertyId])

    if (loading) {
        return (
            <div className="animate-pulse">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div className="space-y-1">
                                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                                    <div className="h-3 bg-gray-300 rounded w-16"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-3 bg-gray-300 rounded"></div>
                                <div className="h-3 bg-gray-300 rounded w-4/5"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review) => (
                    <div key={review.id} className="space-y-3">
                        {/* Reviewer Profile */}
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-gray-600 font-medium">
                                    {review.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                <div className="flex items-center space-x-1">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <span 
                                                key={i} 
                                                className={`text-sm ${
                                                    i < review.rating ? 'text-yellow-500' : 'text-gray-300'
                                                }`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500">1 year on ALX</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Review Content */}
                        <div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                {review.comment}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default ReviewSection;

