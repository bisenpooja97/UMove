export class Payment {
    bookingId: string;
    rider: string;
    mobile: number;
    source: string;
    destination: string;
    distance: number;
    duration: number;
    paymentMethodId: string;
    rideFare: number;
    discountPercent: number;
    extraCharges: number;
    amountPaid: number;
    paymentId: string;
    deductedAt: Date;
    status: string;
}
