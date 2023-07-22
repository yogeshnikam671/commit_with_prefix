const fs = require("fs");

const exec = require("child_process").exec;

const getPrefixMessage = () => {
	const tmpFilePath = '/tmp/.commit_prefix.txt';
	const prefixMessage = fs.readFileSync(tmpFilePath, { encoding: 'utf8' });
	return prefixMessage;
}

const commitWithPrefix = () => {
	if(!process.argv[3]) {
		console.log("Please provide the commit message as last argument.");
		return;
	}
	const commitMessage = process.argv[3];
	const commitMessageWithPrefix = `${getPrefixMessage().trimEnd()} | ${commitMessage}`;
	console.log("The commit message : ", commitMessageWithPrefix);
	exec(`git commit -m "${commitMessageWithPrefix}" --no-verify`, (error, stdout) => {
		console.log(stdout);
	});
}

const initialisePrefixValue = () => {
	if(!process.argv[3]) {
		console.log("Please provide the prefix commit message as last argument.");
		return;
	}
	const prefixValue = process.argv[3];
	exec(`echo ${prefixValue} > /tmp/.commit_prefix.txt`, (error) => {
		if(error) {
			console.log("Some error occurred --> ", error);
			return;
		}
		console.log(`Your commit prefix has been set to : ${prefixValue}`);
	})
}

const displayHelp = () => {
	console.log("cws : commit with story");
	console.log("The usages - \n");
	console.log("To initialise a story number as commit prefix : cws -i <story_number>\n");
	console.log("To commit using cws : cws -m <commit_message_without_story_number>");
	console.log("To view the currently initialised story number : cws -v")
	console.log("\nIt is recommended to put the cws alias to gcm (git commit) so that it seems natural.");
}

const handleInputFlag = () => {
	if(process.argv.includes("-i")) {
		initialisePrefixValue();
	} else if(process.argv.includes("-m")) {
		commitWithPrefix();
	} else if(process.argv.includes("-v")) {
		console.log(getPrefixMessage());
	}else {
		displayHelp();
	}
}

const execute = () => {
	if(process.argv.length === 2) {
		displayHelp();
	} else if(process.argv.length > 2) {
		handleInputFlag();	
	} 
}

execute();

