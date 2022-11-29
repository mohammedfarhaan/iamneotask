import React from "react";
import Paper from "@mui/material/Paper";

function Header() {
  return (
    <Paper style={{ padding: "10px", margin: "25px", color: "blue" }} square elevation={2}>
      <div>
        <h1 className="site-name"><img style={{height:"60px" ,width:"80px"}} src="https://images.yourstory.com/cs/images/companies/iamneo-1632891059578.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" alt="companyimage" />   ToDo List</h1>
      </div>
    </Paper>
  );
}

export default Header;