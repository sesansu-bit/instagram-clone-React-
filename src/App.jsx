import './App.css';
import Sidebar from "./sidebar.jsx";
import Createpost from "./createpost.jsx";
import Createstory from "./createstory.jsx";
import Searchbar from "./searchbar.jsx";
import Notificationbar from "./notification.jsx";
import StoreContextProvider from "./socialstore.jsx";
import { useContext } from "react";
import { store } from "./socialstore.jsx";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <StoreContextProvider>
            <Content />
        </StoreContextProvider>
    );
}

function Content() {
    const { searchshow, notificationshow, createpostshow,createstoryshow } = useContext(store);
    
    return (
        <div>
            <Sidebar />
            <Outlet />
            {searchshow && <Searchbar />}
            {notificationshow && <Notificationbar />}
            {createpostshow && <Createpost />}
            {createstoryshow && <Createstory />}
        </div>
    );
}

export default App;
