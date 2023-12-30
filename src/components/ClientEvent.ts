import { ClientEvents } from "discord.js";
import { Bot } from "../types/Bot.js";

export default class<K extends keyof ClientEvents> {
  constructor(
    event: K,
    listener: (client: Bot<true>, ...args: ClientEvents[K]) => unknown
  ) {
    this.event = event;
    this.listener = listener;
  }
  event;
  listener;
}
