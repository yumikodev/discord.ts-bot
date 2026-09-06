// SCT -> Slashs Command Types

import type {
	ChatInputCommandInteraction,
	SlashCommandBuilder,
	SlashCommandOptionsOnlyBuilder,
	SlashCommandSubcommandsOnlyBuilder,
} from 'discord.js';

export type Data =
	| SlashCommandBuilder
	| SlashCommandSubcommandsOnlyBuilder
	| SlashCommandOptionsOnlyBuilder;

export type Run<T = unknown> = (
	interaction: ChatInputCommandInteraction<'cached'>,
) => T | Promise<T>;
