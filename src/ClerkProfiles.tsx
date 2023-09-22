import { OrganizationProfile, UserProfile } from "@clerk/clerk-react";
import { SetStateActionProps } from "./Types";

export const ShowOrganisationDetails = (props: SetStateActionProps) => {
  return (
    <div>
      <button onClick={() => props.setPage("First")}>Home</button>
      <button onClick={() => props.setPage("User")}>User</button>

      <OrganizationProfile />
    </div>
  );
};

export const ShowUserDetails = (props: SetStateActionProps) => {
  return (
    <div>
      <button onClick={() => props.setPage("First")}>Home</button>
      <button onClick={() => props.setPage("Org")}>Org</button>

      <UserProfile />
    </div>
  );
};

export default ShowOrganisationDetails;
