import { useState } from "react";
import axios from "axios";



const BookingForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        country: ""
    })

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    const handleSubmit  = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
        const response = await axios.post('/api/bookings', formData);
        alert("Booking confirmed!");
        setFormData(response.data)
        } catch (error) {
            console.error("Error submitting booking:", error);
            setError("There was an error submitting your booking. Please try again.");
        } finally {
            setLoading(false); 
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev, [name]: value
        }))
    }

    return (
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold">Contact Detail</h2>
            <form onSubmit={handleSubmit}>
                    {/* Contact Information */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label>First Name</label>
                            <input type="text" name="firstName" value={formData.firstName}  onChange={handleChange} className="border p-2 w-full mt-2" />
                        </div>
                        <div>
                            <label>Last Name</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="border p-2 w-full mt-2" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label>Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 w-full mt-2" />
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="border p-2 w-full mt-2" />
                        </div>
                    </div>

                    {/* Payment Information */}
                    <h2 className="text-xl font-semibold mt-6">Pay with</h2>
                    <div className="mt-4">
                        <label>Card Number</label>
                        <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} className="border p-2 w-full mt-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label>Expiration Date</label>
                            <input type="text" name="expirationDate" value={formData.expirationDate} onChange={handleChange} className="border p-2 w-full mt-2" />
                        </div>
                        <div>
                            <label>CVV</label>
                            <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} className="border p-2 w-full mt-2" />
                        </div>
                    </div>

                    {/* Billing Address */}
                    <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
                    <div className="mt-4">
                        <label>Street Address</label>
                        <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} className="border p-2 w-full mt-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label>City</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} className="border p-2 w-full mt-2" />
                        </div>
                        <div>
                            <label>State</label>
                            <input type="text" name="state" value={formData.state} onChange={handleChange} className="border p-2 w-full mt-2" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label>Zip Code</label>
                            <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} className="border p-2 w-full mt-2" />
                        </div>
                        <div>
                            <label>Country</label>
                            <input type="text" name="country" value={formData.country} onChange={handleChange} className="border p-2 w-full mt-2" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" disabled={loading} className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full disabled:bg-gray-400">
                        {loading ? "Processing..." : "Confirm & Pay"}
                    </button>
                    
                    {/* Error Display */}
                    {error && (
                        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-red-600 text-sm">{error}</p>
                        </div>
                    )}

                </form>
            </div>
    )

}

export default BookingForm;