export type NyTimesDTO = {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  pub_date: Date;
  section_name: string;
  byline: {
    person: {
      firstname: string;
      lastname: string;
    }[];
  };
  _id: string;
};
