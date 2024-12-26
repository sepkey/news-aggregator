export type NyTimesDTO = {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  pub_date: string | Date;
  section_name: string;
  byline: {
    person: {
      firstname: string;
      lastname: string;
    }[];
  };
  _id: string;
};
