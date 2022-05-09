const core = require("@actions/core");
const github = require("@actions/github");

try {
    //throw new Error("some error message");

    core.debug('Debug message');
    core.warning('Warning message');
    core.error('Warning message');

    const nameToGreet = core.getInput("who-to-greet");
    core.setSecret(nameToGreet);
    console.log(`Hello ${nameToGreet}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString());

    core.startGroup('Logging github ortecy')
    console.log(JSON.stringify(github, null, "\t"));
    core.endGroup();
    screenTop

    core.exportVariable("(HELLO", "Hellos");
    } catch (error) {
        core.setFailed(error.message);
    }
