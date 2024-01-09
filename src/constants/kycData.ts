import { SurveyStatuses } from "./survey";

export const genderData = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "preferNotToSay", label: "Prefer not to say" },
];

export const ageData = [
  { label: "18 - 24 years", value: "18-24" },
  { label: "25 - 34 years", value: "25-34" },
  { label: "35 - 44 years", value: "35-44" },
  { label: "45 - 54 years", value: "45-54" },
  { label: "55 - 64 years", value: "55-64" },
  { label: "65 - 74 years", value: "65-74" },
];

export const interestData = [
  { label: "Accounting", value: "accounting" },
  { label: "Banking and Financial", value: "bankingFinancial" },
  { label: "Communications and Information", value: "communicationsInformation" },
  { label: "ICT / Tech", value: "ictTech" },
  { label: "Education", value: "education" },
  { label: "Marketing", value: "marketing" },
  { label: "Others", value: "others" },
];

export const educationArray = [
  { label: "No educational background", value: "noEducationalBackground" },
  { label: "Doctorate Degrees", value: "doctorateDegree" },
  { label: "Master's Degrees", value: "mastersDegree" },
  { label: "Bachelor's Degree", value: "bachelorsDegree" },
  { label: "Higher national diploma (HND)", value: "higherNationalDiploma" },
  { label: "National diploma (ND)", value: "nationalDiploma" },
  { label: "Senior secondary school", value: "seniorSecondarySchool" },
  { label: "Junior secondary school", value: "juniorSecondarySchool" },
  { label: "Primary school", value: "primarySchool" },
];

export const employmentArray = [
  { label: "Unemployed", value: "unemployed" },
  { label: "Full-Time Employment", value: "fullTimeEmployment" },
  { label: "Part-Time Employment", value: "partTimeEmployment" },
  { label: "Temporary or Contract", value: "temporaryOrContract" },
  { label: "Freelance / Self-Employment", value: "freelanceSelfEmployment" },
  { label: "Internship", value: "internship" },
  { label: "Apprenticeship", value: "apprenticeship" },
  { label: "Remote or Telecommuting", value: "remoteOrTelecommuting" },
];

export const occupationArray = [
  { label: "Medical and Healthcare", value: "medicalAndHealthcare" },
  { label: "Technology and IT", value: "technologyAndIt" },
  { label: "Business and Management", value: "businessAndManagement" },
  { label: "Engineering", value: "engineering" },
  { label: "Architecture", value: "architecture" },
  { label: "Education and Teaching", value: "educationAndTeaching" },
  { label: "Education", value: "education" },
  { label: "Arts and Design", value: "artsAndDesign" },
  { label: "Science and Research", value: "scienceAndResearch" },
  { label: "Retail and Sales", value: "retailAndSales" },
  { label: "Legal and Law Enforcement", value: "legalAndLawEnforcement" },
];

export const monthlyIncomeArray = [
  { label: "0 - 9,999 NGN", value: "0-9999" },
  { label: "10,000 - 49,999 NGN", value: "10000-49999" },
  { label: "50,000 - 149,999 NGN", value: "50000-149999" },
  { label: "150,000 - 499,999 NGN", value: "150000-499999" },
  { label: "500,000 - 1M NGN", value: "500000-1000000" },
  { label: "1M - 5M", value: "1000000-50000000" },
  { label: "5M+", value: "50000000+" },
];
export const relationshipArray = [
  { label: "Single", value: "single" },
  { label: "In a Relationship", value: "inARelationship" },
  { label: "Married", value: "married" },
  { label: "Divorced", value: "divorced" },
  { label: "Widowed", value: "widowed" },
];
export const parentalArray = [
  { label: "No children", value: "noChildren" },
  { label: "1 child under 18", value: "oneChildUnder18" },
  { label: "2 children under 18", value: "twoChildrenUnder18" },
  { label: "3 children under 18", value: "threeChildrenUnder18" },
  { label: "4 children under 18", value: "fourChildrenUnder18" },
];

export const surveyStatus = Object.values(SurveyStatuses).map((value) => ({
  label: value.charAt(0).toUpperCase() + value.slice(1),
  value,
}));
