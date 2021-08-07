import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login"
export const API_BASE_URL = 'http://localhost:8080/api/v1.0';
export const ADMIN_PANEL_PATHS = [
    {
        path:'/',
        name:'Login',
        component:Login,
        guest:true,
    },
    {
        path:'/dashboard',
        name:'Dashboard',
        component:Dashboard
    }
];