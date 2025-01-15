// PCT -> Prefix Command Types

import { Message } from "discord.js";

export interface Data {
  name: string;
  description: string;
  alias: string[];
}

export type Run<T = unknown> = (
  message: Message,
  args: string[],
) => T | Promise<T>;
