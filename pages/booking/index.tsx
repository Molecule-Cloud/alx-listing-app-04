
import OrderSummary from "@/components/booking/OrderSummary";
import BookingForm from "@/components/booking/BookingForm";


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
                <div className="grid grid-cols-2 000 gap-6">
                    <BookingForm />
                    <OrderSummary bookingDetails="BookingDetails" />

                </div>
            </div>
        </>
    )
}

export default BookingPage;