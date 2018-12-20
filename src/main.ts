import takeScreenshot from './missions/takeScreenshot';
import find404s from './missions/find404s';

const main = async (args: string[]) => {
    const [action] = args;

    switch (action) {
        default:
            find404s();
            break;
    }
};

main(process.argv.splice(2));
