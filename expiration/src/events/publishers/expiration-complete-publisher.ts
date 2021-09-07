import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@sellmytickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
