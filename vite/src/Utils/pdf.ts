export async function downloadPDF(
  data: {
    fullName: string;
    role: string;
    imageUrl: string;
    dateOfBirth: string;
    aboutMe: string;
    experience: {
      company: string;
      role: string;
      startDate: string;
      endDate: string;
      description: string;
    }[];
    socials: {
      platform: string;
      username: string;
    }[];
  },
  filename: string
) {
  const response = await fetch("https://api.aventix.at/pdf/export", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  const blob = await response.blob();

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a temporary anchor element and trigger a download
  const a = document.createElement("a");
  a.href = url;
  a.download = filename || "download.pdf"; // Default filename if none specified
  document.body.appendChild(a); // Append to the body
  a.click(); // Simulate click to trigger download

  // Cleanup: remove element and revoke blob URL after a short delay
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 100);
}
