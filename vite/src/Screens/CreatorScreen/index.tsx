import { Input, Button } from "@programmer_network/yail";
import { secureString } from "@programmer_network/ajv";
import useAjvForm from "@programmer_network/use-ajv-form";
import { downloadPDF } from "../../Utils/pdf";

function CreatorScreen() {
  const form = useAjvForm(
    { dateOfBirth: "" },
    {
      type: "object",
      required: [],
      properties: {
        dateOfBirth: {
          type: "string",
          minLength: 3,
          "secure-string": true,
          format: "date",
        },
      },
    },
    { shouldDebounceAndValidate: false, customKeywords: [secureString] }
  );

  return (
    <div className="bg-background min-h-screen">
      <div className="flex flex-col items-center justify-center h-screen space-y-5">
        <Input
          name="dateOfBirth"
          value={form.state.dateOfBirth.value}
          error={form.state.dateOfBirth.error}
          onBlur={() => form.onBlur("dateOfBirth")}
          onChange={({ dateOfBirth }) => form.set({ dateOfBirth: dateOfBirth })}
          label="Date of Birth"
          type="date"
          required
        />

        <Button
          className="max-w-sm w-full"
          onClick={() => {
            form.validate();

            if (form.isValid) {
              downloadPDF(
                {
                  fullName: "Raphael E.",
                  role: "Software Engineer",
                  imageUrl:
                    "https://avatars.githubusercontent.com/u/4640521?v=4",
                  aboutMe:
                    "I am a highly competent IT professional with a proven track record in  designing websites, networking, and managing databases. My strong  technical skills, coupled with excellent interpersonal abilities, enable  me to interact effectively with a wide range of clients. I am eager to take on new challenges and continue improving my IT skills.",
                  dateOfBirth: form.state.dateOfBirth.value,
                  experience: [
                    {
                      company: "Google",
                      role: "Software Engineer",
                      startDate: "January 2020",
                      endDate: "January 2021",
                      description: "Worked on the Google Search Engine",
                    },
                    {
                      company: "Google1",
                      role: "Software Engineer",
                      startDate: "January 2020",
                      endDate: "January 2021",
                      description: "Worked on the Google Search Engine",
                    },
                  ],
                  socials: [
                    {
                      platform: "GitHub",
                      username: "xRxphael",
                    },
                    {
                      platform: "LinkedIn",
                      username: "TestLnikedIn",
                    },
                  ],
                },
                "cv.pdf"
              );
            }
          }}
          disabled={!form.isDirty}
        >
          Save
        </Button>
        {!form.isValid && <h1 className="text-pink-600">Invalid Form</h1>}
      </div>
    </div>
  );
}

export default CreatorScreen;
