import { Subjects, Publisher, PaymentCreatedEvent } from '@sellmytickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
