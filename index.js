ChatLib.chat("&aSuccessfully Loaded &dBotScript! &7(/bs help)")
recValue = "defaultValue"
cmd1 = "hi"
cmd2 = "hi"
cmd3 = "hi"
cmd4 = "hi"
cmd5 = "hi"

//Domain Discord Clickable Message
const domainDiscordClickMSG = new Message(
	new TextComponent("&eThe &n&5Domain&9 &9Discord. &7(Click)").setClick("open_url", "https://discord.gg/housings")," ");
 

register("command", (arg, arg2, arg3) => {
	if (arg !== 'info' && arg !== 'help' && arg !== 'credits' && arg !== 'create' && arg !== 'command') {
		ChatLib.chat("&cUsage: &c/botscript <args>");
	}
	if (arg === "info") {
		ChatLib.chat("&dBotScript&e helps you make &abots &efor custom minigames, especially useful for &fHypixel Housings.");
		ChatLib.chat("&e&nMake sure&e you set the commands before you create the criteria.");
	}
	if (arg === "credits") {
		ChatLib.chat("&7Module by &b[MVP&c+&b] glso &8- &5Domain");
	}
	if (arg === "help") {
		ChatLib.chat("&f/bs help &7- &eDisplays this.");
		ChatLib.chat("&f/bs discord &7- &eGives discord link.");
		ChatLib.chat("&f/bs credits &7- &eShows credits.");
		ChatLib.chat("&f/bs create <criteria> &7- &eAllows you to create custom chat criteria");
		ChatLib.chat("&f/bs command <#1-5> <cmd> &7- &eSet command for #.");
	}
	if (arg === "discord") {
		ChatLib.chat(domainDiscordClickMSG);
	}
	if (arg && arg.toLowerCase() === 'command') {
		if (arg2 === '1') {
			ChatLib.chat("&aSet Command #1:&e ''"+arg3+"''");
			cmd1 = arg3
		}
		if (arg2 === '2') {
			ChatLib.chat("&aSet Command #2:&e ''"+arg3+"''");
			cmd2 = arg3
			}
		if (arg2 === '3') {
			ChatLib.chat("&aSet Command #3:&e ''"+arg3+"''");
			cmd3 = arg3
		}
		if (arg2 === '4') {
			ChatLib.chat("&aSet Command #4:&e ''"+arg3+"''");
			cmd4 = arg3
		}
		if (arg2 === '5') {
			ChatLib.chat("&aSet Command #5:&e ''"+arg3+"''");
			cmd5 = arg3
		}
	}
	if (arg && arg.toLowerCase() === 'create' && arg2 && arg2.toLowerCase() !== 'undefined') {
		ChatLib.chat("&aSet Criteria:&e ''"+arg2+"''");
		const reg = register("chat", () => {
			ChatLib.command(cmd1);
			ChatLib.command(cmd2);
			ChatLib.command(cmd3);
			ChatLib.command(cmd4);
			ChatLib.command(cmd5);
		}).setCriteria(arg2).setContains();
	}
	if (arg2 && arg2.toLowerCase() === "") {
		ChatLib.chat("&cUsage: /botscript create <criteria>");
	}

}).setName("botscript").setAliases("bs");