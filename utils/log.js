const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
				console.log(chalk.bold.hex("#ff0000").bold('» Lỗi « ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#ff0000").bold('» Lỗi « ') + data);
			break;
		default:
				console.log(chalk.bold.hex("#FF0000").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#00c2cb").bold('» 𝐀𝐧𝐨𝐧𝐲𝐦𝐨𝐮𝐬 « ') + data);
			break;
		case "error":
		console.log(chalk.bold.hex("#ff1616").bold('» 𝐀𝐧𝐨𝐧𝐲𝐦𝐨𝐮𝐬 « ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#00c2cb").bold(`» 𝐀𝐧𝐨𝐧𝐲𝐦𝐨𝐮𝐬 «  `) + data);
			break;
	}
}