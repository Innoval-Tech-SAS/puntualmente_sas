import siteConfig from "./config/siteConfig"
import { Route, Routes, Navigate  } from "react-router-dom"

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} replace/>}/>
        {siteConfig.pages.map((page) => (
          <Route
            key={page.path}
            path={`${page.path}`}
            element={<page.page />}
          />
        ))}
      </Routes>
    </>
  )
}

export default App
