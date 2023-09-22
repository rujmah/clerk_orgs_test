import { useEffect, useState } from "react";
import UserGreet from "./UserGreet";
import { ShowOrganisationDetails, ShowUserDetails } from "./ClerkProfiles";

export const Router = () => {
  const [page, setPage] = useState("First");

  useEffect(() => {
    document.title = `${page} - Clerk Orgs Test`;
  }, [page]);

  switch (page) {
    case "First":
      return <UserGreet setPage={setPage} />;

    case "Org":
      return <ShowOrganisationDetails setPage={setPage} />;

    case "User":
      return <ShowUserDetails setPage={setPage} />;

    default:
      return <div>Not found</div>;
  }
};
