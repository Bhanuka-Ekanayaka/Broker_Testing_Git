import { colorModeContext,useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { Routes, Route} from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Invoices from "./scenes/reports";
import Form from "./scenes/form";
// import Form from "./scenes/form";
// import Bar from "./scenes/bar";
// import Line from "./scenes/line";
// import Pie from "./scenes/Pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
import Contacts from "./scenes/contacts";
// import Calendar from "./scenes/calendar";

function App() {
  const [theme,colorMode]=useMode();
  return (
    <colorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <div className="app">
    <Sidebar/>
     <main className="content">
      <Topbar/>
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />}/>
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />

              {/*  />
              
              
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
         */}


      </Routes>
     </main>
    </div>
    </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
