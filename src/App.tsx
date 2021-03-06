import React from 'react'
import Router from './Router'
import { ToastContainer } from 'react-toastify';
 
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover />
      <Router />
    </div>
  );
}

export default App;