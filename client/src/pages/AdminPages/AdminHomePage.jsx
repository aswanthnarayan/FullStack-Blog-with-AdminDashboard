import React, { useState } from 'react';
import { DrawerWithNavigation } from '../../components/AdminComponents/Material/SideBar';
import Dashboard from './DashboardPage'
import UsersPage from './UsersPage';

const AdminHomePage = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard/>
      case "users":
        return <UsersPage/>
      case "sales":
        return <div>Sales Content</div>;
      case "profile":
        return <div>Profile Content</div>;
      case "tables":
        return <div>Tables Content</div>;
      default:
        return <div>Default Content</div>;
    }
  };

  return (
    <div className='flex'>
      <DrawerWithNavigation setActiveSection={setActiveSection} />
      <div className="flex flex-col w-full">
        {/* Add your navbar here */}
        <div className="p-4">
          {renderSection()} {/* Dynamic section based on menu item clicked */}
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
