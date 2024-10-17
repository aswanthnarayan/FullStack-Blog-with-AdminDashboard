import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

export function DrawerWithNavigation({ setActiveSection }) {
  return (
    <React.Fragment>
      <div className="shadow-2xl min-h-auth-h h-auto">
        
        <List>
          <ListItem onClick={() => setActiveSection("dashboard")}>
            <ListItemPrefix>
              {/* Dashboard Icon */}
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem onClick={() => setActiveSection("users")}>
            <ListItemPrefix>
              {/* Analytics Icon */}
            </ListItemPrefix>
            Analytics
            
          </ListItem>
          <ListItem onClick={() => setActiveSection("sales")}>
            <ListItemPrefix>
              {/* Sales Icon */}
            </ListItemPrefix>
            Sales
          </ListItem>
          <ListItem onClick={() => setActiveSection("profile")}>
            <ListItemPrefix>
              {/* Profile Icon */}
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem onClick={() => setActiveSection("tables")}>
            <ListItemPrefix>
              {/* Tables Icon */}
            </ListItemPrefix>
            Tables
          </ListItem>
        </List>
      </div>
    </React.Fragment>
  );
}
