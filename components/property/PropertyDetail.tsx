import { type PropertyProps } from "@/interfaces";
import ReviewSection from "./ReviewSection";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

const PropertyDetail: React.FC<{property: PropertyProps}> = ({ property }) => {
    const {
        name,
        address,
        price,
        rating,
        offers,
        category,
        image,
        discount,
        description
    } = property;

    const [showFullDescription, setShowFullDescription] = useState(false);

    return (
        <>
            <Header />
            
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Property Header */}
                <div className="mb-6">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-2">{name}</h1>
                    <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center">
                            <span className="text-yellow-500">★</span>
                            <span className="ml-1 font-medium">{rating}</span>
                            <span className="text-gray-500 ml-1">(345 reviews)</span>
                        </div>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-700">{address.city}, {address.state}, {address.country}</span>
                        <div className="flex items-center space-x-2 ml-auto">
                            <button className="flex items-center space-x-1 text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span>Save</span>
                            </button>
                            <button className="flex items-center space-x-1 text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                </svg>
                                <span>Share</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-4 grid-rows-2 gap-2 h-96 mb-8 rounded-xl overflow-hidden">
                    {/* Main large image */}
                    <div className="col-span-2 row-span-2">
                        <img 
                            src={image} 
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Top right image spanning 2 columns */}
                    <div className="col-span-2 row-span-1">
                        <img 
                            src={image} 
                            alt="Interior view"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Bottom left image */}
                    <div className="col-span-1 row-span-1">
                        <img 
                            src={image} 
                            alt="Bedroom view"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Bottom right image with show all photos button */}
                    <div className="col-span-1 row-span-1 relative">
                        <img 
                            src={image} 
                            alt="Outdoor view"
                            className="w-full h-full object-cover"
                        />
                        <button className="absolute bottom-4 right-4 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                            Show all photos
                        </button>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2">
                        {/* Host Info & Property Details */}
                        <div className="border-b border-gray-200 pb-6 mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        Entire home hosted by Host Name
                                    </h2>
                                    <p className="text-gray-600">
                                        {offers.occupants} guests · {offers.bed} bedrooms · {offers.bed} beds · {offers.shower} bathrooms
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="border-b border-gray-200 pb-8 mb-8">
                            <h3 className="text-lg font-semibold mb-4">Description</h3>
                            <div className="text-gray-700 leading-relaxed">
                                <p className={showFullDescription ? "" : "line-clamp-3"}>
                                    Feel like exploring the Dominican? Start the day with a hike on one of Playa Morón's 
                                    many trails. Weave your way around the gated community to find secluded sandy coves 
                                    for swimming and paddleboarding. When you're ready to chill with friends, the beach 
                                    house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks 
                                    in the hot tub, and gazing out over incredible ocean views.
                                    {showFullDescription && (
                                        <span>
                                            {" "}
                                            The space features a fully equipped BEDROOM & BATHROOM. Bedroom 1 - Primary: King size bed, 
                                            Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, 
                                            Sofa, Desk, Balcony, Ocean view. Each home is fully equipped to meet your needs, with ample 
                                            space and privacy for you and your guests to enjoy.
                                        </span>
                                    )}
                                </p>
                            </div>
                            <button 
                                onClick={() => setShowFullDescription(!showFullDescription)}
                                className="text-gray-900 font-medium underline mt-2 hover:text-gray-700 transition"
                            >
                                {showFullDescription ? "Read less" : "Read more"} →
                            </button>
                        </div>

                        {/* What this place offers */}
                        <div className="border-b border-gray-200 pb-8 mb-8">
                            <h3 className="text-lg font-semibold mb-4">What this place offers</h3>
                            <p className="text-gray-600 mb-6">Each home is fully equipped to meet your needs, with ample space and privacy.</p>
                            
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                {category.map((amenity, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-800">{amenity}</span>
                                    </div>
                                ))}
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-800">Shared beach access</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-800">Chef</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-800">Cleaning available during stay</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-800">Pool - infinity</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-800">Kitchen</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-800">Wifi</span>
                                </div>
                            </div>
                        </div>

                        {/* Reviews Section */}
                        <div className="mb-8">
                            <div className="flex items-center space-x-2 mb-6">
                                <span className="text-yellow-500">★</span>
                                <span className="text-xl font-semibold">{rating}</span>
                                <span className="text-gray-600">(345 reviews)</span>
                            </div>
                            <ReviewSection propertyId={property.id} />
                        </div>
                    </div>

                    {/* Right Column - Booking Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-6">
                            <div className="border border-gray-300 rounded-xl p-6 shadow-lg">
                                <div className="flex items-baseline space-x-1 mb-4">
                                    <span className="text-2xl font-semibold">${price.toLocaleString()}</span>
                                    <span className="text-gray-600">/night</span>
                                    {discount && (
                                        <span className="ml-2 bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                                            {discount}% OFF
                                        </span>
                                    )}
                                </div>
                                
                                {/* Check-in/Check-out Dates */}
                                <div className="grid grid-cols-2 border border-gray-300 rounded-lg mb-4">
                                    <div className="p-3 border-r border-gray-300">
                                        <div className="text-xs font-semibold text-gray-900 uppercase">Check in</div>
                                        <div className="text-sm text-gray-600">Add date</div>
                                    </div>
                                    <div className="p-3">
                                        <div className="text-xs font-semibold text-gray-900 uppercase">Check out</div>
                                        <div className="text-sm text-gray-600">Add date</div>
                                    </div>
                                </div>
                                
                                {/* Guests */}
                                <div className="border border-gray-300 rounded-lg p-3 mb-6">
                                    <div className="text-xs font-semibold text-gray-900 uppercase">Guests</div>
                                    <div className="text-sm text-gray-600">1 guest</div>
                                </div>
                                
                                {/* Reserve Button */}
                                <Link href="/booking">
                                    <button className="w-full bg-[#34967C] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#2D7F6A] transition mb-4">
                                        Reserve now
                                    </button>
                                </Link>
                                
                                <p className="text-center text-sm text-gray-600 mb-4">You won't be charged yet</p>
                                
                                {/* Price Breakdown */}
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">${price} × 7 nights</span>
                                        <span className="text-gray-900">${(price * 7).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Weekly discount</span>
                                        <span className="text-green-600">-$84</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Service fee</span>
                                        <span className="text-gray-900">$13</span>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="flex justify-between font-semibold">
                                        <span>Total payment</span>
                                        <span>${((price * 7) - 84 + 13).toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}


export default PropertyDetail