"use client"

import { AuthProvider } from "@/contexts/authContext";
import React from "react";





const Layout: React.FC<any> = ({ children }) => {

      return (
        <AuthProvider>
            {children}
        </AuthProvider>
    
      );
}

export default Layout
