import { WCAG } from "./transform";
import json2md from "json2md";
const __wcagSectionTemplate = ({ title, url, description }: WCAG.Section) => [
  {
    h2: json2md([
      {
        link: {
          title,
          url
        }
      }
    ])
  }
];

export const wcagSection = (section: WCAG.Section) =>
  json2md(__wcagSectionTemplate(section));
