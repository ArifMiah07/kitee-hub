import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../../Pages/Shared/Nav/NavBar";

const MainFromMotion = () => {
  const navigation = useNavigation();

  return (
    <div>
      <NavBar />

      {/* Show a loading spinner when navigating */}
      {navigation.state === "loading" && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm z-50">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default MainFromMotion;
