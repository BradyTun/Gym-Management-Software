import Layout from "../components/layout/Layout";
import CurrentUser from "../components/settings/CurrentUser";
import AdminAccounts from "../components/settings/AdminAccounts";
import EmailSettings from "../components/settings/EmailSettings";
import SecuritySettings from "../components/settings/SecuritySettings";
import SystemInfo from "../components/settings/SystemInfo";

export default function Settings() {
  return (
      <div className="max-w-4xl mx-auto py-10 px-4">
        <CurrentUser />
        <AdminAccounts />
        <EmailSettings />
        <SecuritySettings />
        <SystemInfo />
        <footer className="mt-10 text-center text-gray-400 text-sm">
          &copy; 2024 Gym POS. All rights reserved.
        </footer>
      </div>
  );
}
