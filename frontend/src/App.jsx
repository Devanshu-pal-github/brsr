import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import WorkforceDetails from './pages/WorkforceDetails';
import AiChat from './components/common/AiChat';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workforce/details" element={<WorkforceDetails />} />
          <Route path="/entity" element={<div>Entity Details (Coming Soon)</div>} />
          <Route path="/workforce" element={<div>Workforce (Coming Soon)</div>} />
          <Route path="/environment" element={<div>Environment (Coming Soon)</div>} />
          <Route path="/finance" element={<div>Finance (Coming Soon)</div>} />
          <Route path="/compliance" element={<div>Compliance (Coming Soon)</div>} />
          <Route path="/reports" element={<div>Reports (Coming Soon)</div>} />
        </Routes>
        <AiChat />
      </Layout>
    </Router>
  );
}

export default App;