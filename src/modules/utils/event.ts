import { ClientEvents } from "discord.js";

export default class EventController<Event extends keyof ClientEvents> {
  constructor(
    event: Event,
    listener: (...args: ClientEvents[Event]) => unknown,
  ) {
    this.event = event;
    this.listener = listener;
  }
  event;
  listener;
}
