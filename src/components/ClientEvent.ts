import { Client, ClientEvents } from "discord.js";

class ClientEvent<E extends keyof ClientEvents> {
  constructor(
    event: E,
    listener: (client: Client, ...args: ClientEvents[E]) => any
  ) {
    this.event = event;
    this.listener = listener;
  }
  event;
  listener;
}

export default ClientEvent;
