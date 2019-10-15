export class PaymentDetails {
    bookingId: string;
    rider: string;
    mobile: number;
    source: string;
    destination: string;
    distance: number;
    duration: number;
    payment_method_id: string;
    ride_fare: number;
    discount_percent: number;
    extra_charges: number;
    amount_paid: number;
    paymentId: string;
    deducted_at: Date;
    status: string;
  }
