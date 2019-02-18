import * as resemblejs from "resemblejs";
import { resolve as resolvePath } from "path";
import { write, writeObjectToFile } from "./file";
import log from "./log";
import * as axe from "axe-core";
import WCAG from "../consts/WCAG";
import { wcagSection } from "./markdown";
import {transformStringToWcagRefId} from "../actions/transform"
import {pathOr, clone, assocPath, mergeDeepRight, append} from 'ramda';

export const compareImages = async (
  imageOneRelativeFilePath: string = "johnsonville-1.png",
  imageTwoRelativeFilePath: string = "johnsonville-2.png",
  outputRelativePath: string = "diff.png"
) => {
  const rootPath = process.cwd();
  const imageOnePath = resolvePath(rootPath, imageOneRelativeFilePath);
  const imageTwoPath = resolvePath(rootPath, imageTwoRelativeFilePath);

  log("Comparing", "pending");
  log(`${imageOneRelativeFilePath} | ${imageTwoRelativeFilePath}`, "pending");

  await resemblejs(imageOnePath)
    .compareTo(imageTwoPath)
    .onComplete(async data => {
      log("Comparison complete!", "success");
      return await write(outputRelativePath, await data.getBuffer());
    });
};

export const summarizeAxeResults = async (results: axe.AxeResults) => {
  const { violations, inapplicable, incomplete, passes } = results;

  const wcagTemplate = clone(WCAG);

  const reducerGenerator = (type) => (acc, result) => {
    const {path : sectionPath} =  getWCAGRefIdFromAxeResult(result); 

    const resultsSectionPath = [...sectionPath, type];
    
    const existingResults = pathOr([], resultsSectionPath, acc);
    const updatedResults = append(result, existingResults);

    return assocPath(resultsSectionPath, updatedResults, acc);
  }

  const keys = ["violations", "inapplicable", "incomplete", "passes"];


  const resultsOrganizedByWcag = keys.reduce((acc, key) => {
    const reducer = reducerGenerator(key);
    const resultsForKey = results[key]; 
    return resultsForKey.reduce(reducer, acc);
  }, wcagTemplate);

  await writeObjectToFile(resultsOrganizedByWcag, 'aria-results.json');
  return resultsOrganizedByWcag
};

const getWCAGRefIdFromAxeResult = (result) => {
  const {tags} = result;
  const refIdString = tags.find(tag => {
    if (tag.length === 7 && tag.includes("wcag")) {
      return true;
    } else {
      return false;
    }
  });

  if (!refIdString) {
    return {
      section: "Best Practices",
      guideline: null,
      success_criteria: null,
      path: ['Best Practices']
    }
  } else {
    return transformStringToWcagRefId(refIdString.replace('wcag', ''))
  }
}

export const summarizeAxeResult = ({
  description,
  help,
  helpUrl,
  id,
  impact,
  tags,
  nodes
}: axe.Result) => {
  const summary = `TODO: Make this.`;
  return summary;
};

const __summarizeAxeNodes = (nodes: axe.NodeResult[]) => {
  // const selectiveNodes = nodes.map(node => {
  //   const { target, impact, failureSummary, html } = node;
  //   return {
  //     summary: failureSummary.replace(/\n/g, ""),
  //     target: code(target.join(", ")),
  //     html: code(html),
  //     impact
  //   };
  // });
  // return table(selectiveNodes);
};
