import { useEffect, useState } from "react";
import PersonelList from "./components/people/PersonelList";
import Header from "./components/layout/Header";
import LocationList from "./components/locations/LocationList";
import MapView from "./components/map/MapView";
import useDutyStore from "./store/useDutyStore";
const App = () => {

  const [adding, setAdding] = useState(false);

  const fetchAll = useDutyStore((state) => state.fetchAll);

  useEffect(() => {
    fetchAll();
  }, []);

  

  return (
    <div className="flex h-screen bg-gray-100">
      <PersonelList />

      <div className="flex flex-col flex-1">
        <Header adding={adding} setAdding={setAdding} />

        <div className="flex flex-1 overflow-hidden">
          <MapView />
          <LocationList />
        </div>
      </div>
    </div>
  );
};

export default App;
