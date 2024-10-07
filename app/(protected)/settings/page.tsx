import { auth } from "@/auth";

const SettingsPagediv = async () => {
  const session = await auth();
  return <div>{JSON.stringify(session)}</div>;
};

export default SettingsPagediv;
