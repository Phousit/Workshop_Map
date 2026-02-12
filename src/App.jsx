import React from "react";
import PersonelList from "./components/people/PersonelList";
import Header from "./components/layout/Header";
import LocationList from "./components/locations/LocationList";
import MapView from "./components/map/MapView";
const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <PersonelList />

      <div className="flex flex-col flex-1">
        <Header />

        <div className="flex flex-1 overflow-hidden">
          <MapView />
          <LocationList />
        </div>
      </div>
    </div>
  );
};

export default App;
