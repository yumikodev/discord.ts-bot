import { Client, Message } from "discord.js"

declare type Cmd = {
  name: string,
  alias: [],
  run(client:Client, message: Message, args: string[])
}