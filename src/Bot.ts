import { Client, ClientOptions } from "discord.js";
import * as dotenv from 'dotenv';
import ready from "./listeners/ready";  // importing the ready listener
import interactionCreate from "./listeners/interactionCreate";

dotenv.config();

// Authenticate with Discord

const token = process.env.DISCORD_TOKEN;

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

// Registering listeners
ready(client);
interactionCreate(client);

client.login(token);