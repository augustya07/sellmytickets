import { Subjects, Publisher, OrderCancelledEvent } from '@sellmytickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
