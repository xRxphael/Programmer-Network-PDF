export type PDFInterface = {
  dateOfBirth: string;
  fullName: string;
  aboutMe: string;
  imageUrl: string;
  role: string;
  experience: {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  socials: { platform: string; username: string }[];
};
