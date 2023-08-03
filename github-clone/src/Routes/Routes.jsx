import { Route, Routes } from "react-router-dom"
import AppLayout from "./Layouts/AppLayout"
import Pricing from "./Pages/Pricing"
import Home from "./Pages/Home"

const RootRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
            </Route>
        </Routes>
    )
}
export default RootRoutes
