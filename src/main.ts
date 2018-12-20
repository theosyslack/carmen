import { sendSleuth } from "./actions/sleuth";
import { globe } from "./actions/log";

// add asyncIterator functionality - https://github.com/Microsoft/TypeScript/issues/14151
(<any>Symbol).asyncIterator =
    Symbol.asyncIterator || Symbol.for("Symbol.asyncIterator");

const main = async (args: string[]) => {
    const [action, pathToTravelPlan] = args;
    console.clear();
    console.log(action, pathToTravelPlan);
    switch (action) {
        default:
            const {
                default: { destinations: travelPlan }
            } = await import(pathToTravelPlan);

            runMissions(travelPlan);
            break;
    }
};

async function runMissions(travelPlan) {
    let results: any[] = [];
    for await (const destination of travelPlan) {
        const responses = sendSleuth(destination.missions, destination.url);
        for await (const response of responses) {
            results.push(response);
        }
    }

    // TODO: Something cooler than console.log
    // console.log(results);
    globe();
}

main(process.argv.splice(2));
