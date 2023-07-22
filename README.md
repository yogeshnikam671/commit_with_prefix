# Commit with prefix

## Simple CLI tool built for personal use

### Motivation :
In my current work assignment, there is a practice to add a certain prefix in the commit message based on the feature that we are working on.
This prefix is then used to track the work around that feature.

If we put a wrong prefix in the commit message then it won't be able to track that commit for that specific feature.

I tended to mess up this prefix a couple of times. And hence decided to build this tool to rectify that.

### Installation :
This tool can be installed using `npm i -g cwsn`

`cwsn` stands for `commit with story number`

### Usage :
There are four flags - `-i`, `-v`, `-m`

`cwsn -i <prefix>` : This will instantiate the commit prefix.

`cwsn -v` : This will show the currently set commit prefix.

`cwsn -m <message_without_prefix>` : This will commit the message along with the prefix automatically.

`cwsn -h` : This will show how this tool can be used.

### Common problem
If the command does not work due to the error `node not found`, follow the below steps:
1. Run the command `which node` to find the current node executable path in your machine.
2. Then run the command `cp <current_path> /usr/local/bin/node`

This will resolve the problem being faced.

### Considerations :
The prefix message has to be initialised again on machine startup as it will be lost when the machine is shut down.

