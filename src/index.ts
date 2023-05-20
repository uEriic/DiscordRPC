import { Client } from "discord-rpc";
import config from "./config";
const rpc = new Client({ transport: "ipc" });

rpc.on("ready", () => {
  console.log("Conexão com a Rich Presence estabelecida com sucesso!");
  rpc.setActivity({
    details: config.details,
    state: config.state,
    startTimestamp: new Date().getTime(),
    largeImageKey: config.largeImageKey,
    largeImageText: config.largeImageText,
    smallImageKey: config.smallImageKey,
    smallImageText: config.smallImageText,
    buttons: [
      { label: 'Convite', url: 'https://dsc.gg/yunobot' },
      { label: 'Suporte', url: 'https://discord.gg/nvZE4ZPbst' }
    ]
  });
});

rpc.login({ clientId: config.clientId }).catch((err: Error) => {
  console.log(`Erro ao conectar à Rich Presence: ${err.message}`);
});