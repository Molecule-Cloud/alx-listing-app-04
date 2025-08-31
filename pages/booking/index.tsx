
import OrderSummary from "@/components/booking/OrderSummary";
import BookingForm from "@/components/booking/index"; // Updated to use API-integrated form
import CancellationPolicy from "@/components/booking/CancellationPolicy";

const BookingPage: React.FC = () => {

    const bookingDetails = {
        propertyName: "Villa Arrecife Beach",
        price: 7500,
        bookingFee: 65,
        totalNights: 7,
        startDate: "24 August 2025"
    }
    return (
        <>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <BookingForm />
                        <CancellationPolicy />
                    </div>
                    <OrderSummary bookingDetails={bookingDetails} />
                </div>
            </div>
        </>
    )
}

export default BookingPage;