"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";


const SettingsPagediv = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };
  return (
    <div>
      {JSON.stringify(user)}
      <div>
        <button onClick={onClick} type="submit">
          Sign out
        </button>
      </div>
    </div>
  );
};

export default SettingsPagediv;
