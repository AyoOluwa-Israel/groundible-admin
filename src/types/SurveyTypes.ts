export type TAllSurveyDashboard = {
  image: JSX.Element;
  title: JSX.Element;
  locationDate: JSX.Element;
  responses: JSX.Element;
  activeAgents: JSX.Element;
  status: JSX.Element;
};

export type TAllSurveys = {
  image: JSX.Element;
  title: JSX.Element;
  locationDate: JSX.Element;
  responses: JSX.Element;
  activeAgents: JSX.Element;
  status: JSX.Element;
  surveyType: string;
  questions: string;
  more: JSX.Element;
};

export type TColumn = {
  field: string;
  header: string;
};
