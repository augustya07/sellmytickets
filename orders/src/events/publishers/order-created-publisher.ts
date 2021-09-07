import { Publisher, OrderCreatedEvent, Subjects } from '@sellmytickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
