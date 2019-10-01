export namespace WCAG {
  export type Section = {
    ref_id: string;
    title: string;
    description: string;
    url: string;
    guidelines: Guideline[];
  };

  export type Guideline = {
    ref_id: string;
    title: string;
    description: string;
    url: string;
    references: References[];
    success_criteria: SuccessCriteria[];
  };

  export type References = {
    title: string;
    url?: string;
  };

  export type SuccessCriteria = {
    ref_id: string;
    title: string;
    description: string;
    url: string;
    level: "A" | "AA" | "AAA";
    special_cases: SpecialCases[];
    notes?: NoteContent[];
    references: References[];
  };

  export type NoteContent = {
    content: string;
  };
  export type SpecialCases = {
    type: string;
    title: string;
    description?: string;
  };

  export type ID = {
    section: string;
    guideline?: string;
    success_criteria?: string;
    path: string[];
  };
}

export const transformStringToWcagRefId = (refId: string): WCAG.ID => {
  let path = refId.split(".");
  if (path.length === 1) {
    path = refId.split("");
  }
  const [section, guideline, success_criteria] = path;

  return { section, guideline, success_criteria, path };
};
