import { Client, ClientEvents } from "discord.js";

export default class<K extends keyof ClientEvents> {
  constructor(
    event: K,
    listener: (client: Client, ...args: ClientEvents[K]) => any
  ) {
    this.event = event;
    this.listener = listener;
  }
  event;
  listener;
}
