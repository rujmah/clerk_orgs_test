import {
  OrganizationSwitcher,
  UserButton,
  useOrganization,
  useUser,
} from "@clerk/clerk-react";
import { SetStateActionProps } from "./Types";

const UserGreet = (props: SetStateActionProps) => {
  const { user } = useUser();
  const { organization } = useOrganization();

  return (
    <>
      <div>
        <h2>
          Welcome {user?.fullName} from {organization?.name} 👋
        </h2>
        <OrganizationSwitcher />
        <UserButton />
        <div>
          Select:
          <button onClick={() => props.setPage("Org")}>Org</button>
          <button onClick={() => props.setPage("User")}>User</button>
        </div>
      </div>
      <div>
        <ul>
          <li>✅ Show your user name or email</li>
          <li>✅ Show your org</li>
          <li>✅ add folks to your org</li>
          <li>❌ view all orgs as super user (only form the Clerk )</li>
          <li>✅ impersonate a user</li>
        </ul>
      </div>
    </>
  );
};

export default UserGreet;
