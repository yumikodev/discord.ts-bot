import { ClientEvents } from "discord.js";

export class EventController<Event extends keyof ClientEvents> {
  constructor(
    public event: Event,
    public listener: (
      ...args: ClientEvents[Event]
    ) => unknown | Promise<unknown>,
  ) {}
}
