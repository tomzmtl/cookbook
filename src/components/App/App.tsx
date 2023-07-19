import { Route, Routes } from "react-router-dom"
import { inventoryApi } from "../../features/inventory/api"
import IntakeReport from "../IntakeReport"
import IntakeReportOld from "../IntakeReportOld"
import Inventory from "../Inventory"

const App = () => {
  inventoryApi.useGetAllQuery()

  return (
    <Routes>
      <Route path="inventory" element={<Inventory />} />
      <Route path="report" element={<IntakeReportOld />} />
      <Route index element={<IntakeReport />} />
    </Routes>
  )
}

export default App
