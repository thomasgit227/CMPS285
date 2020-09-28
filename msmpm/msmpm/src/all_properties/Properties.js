import React from 'react';
import AppNavbar from '../main_components/AppNavbar';
import PropertyList from "./PropertyList";

export default function Properties() {
  return (
    <div>
      <AppNavbar/>
      <PropertyList/>
    </div>
  );
}