export interface User {
  uuid: string; //clerk user id
  created_at: string;
  username: string;
  email: string;
  fullname: string;
  bio: string;
  pfp: string;
  cover: string;
  tags: string[];
  // social links
  facebook: string;
  instagram: string;
  twitter: string;
  github: string;
  linkedin: string;
  portfolio: string;
  number: string;
  customemil: string;
  //personl infos
  location: string;
  languages: string;
}
