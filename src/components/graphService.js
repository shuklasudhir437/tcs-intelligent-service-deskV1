import { clientApplication } from "../msalConfig";
 
export const getProfileImage = async () => {
  try {
    const tokenRequest = {
scopes: ["user.read"],
    };
    const tokenResponse = await clientApplication.acquireTokenSilent(tokenRequest);
 
const graphResponse = await fetch("https://graph.microsoft.com/v1.0/me/photo/$value", {
      headers: {
        Authorization: `Bearer ${tokenResponse.accessToken}`,
      },
    });
 
    if (!graphResponse.ok) {
      throw new Error("Failed to fetch profile image");
    }
 
    const blob = await graphResponse.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Error fetching profile image:", error);
    return null;
  }
};