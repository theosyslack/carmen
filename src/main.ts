import takeScreenshot from './missions/takeScreenshot';
import find404s from './missions/find404s';

const main = async (args: string[]) => {
    const [action, pathToTravelPlan] = args;
    console.clear();
    console.log(action, pathToTravelPlan);
    switch (action) {
        default:
            // const { default: travelPlan } = await import(pathToTravelPlan);
            // console.table(travelPlan);
            find404s();
            break;
    }
};

main(process.argv.splice(2));
