import { Client } from "discord-rpc";
import config from "./config";
const rpc = new Client({ transport: "ipc" });
rpc.login({ clientId: config.clientId }).catch((err: Error) => {
  console.log(`Erro ao conectar à Rich Presence: ${err.message}`);
});

rpc.clearActivity(process.pid);
process.exit();
