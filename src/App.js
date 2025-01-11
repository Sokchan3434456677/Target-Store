
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Components/Header';
// import Navigation from './Components/Navigation';

// import ProductAPI from './Components/ProductAPI'; // Hoodie Page
// import DealSection from './Components/DealSection';

// import ProductShow from './Components/ProductShow';

// import Footer from './Components/Footer';
// import TShirt from './Components/Product/T-Shirt'; // T-Shirt Page
// import StussyCap from './Components/Product/Stussy-Cap';
// import SweatShorts from './Components/Product/Sweat-Shorts';
// import Cart from './Components/Cart/Cart';
// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Navigation />
//         <Routes>
//           {/* Default route for the home page */}
//           <Route
//             path="/"
//             element={
//               <>
                
//                 <ProductAPI /> {/* Hoodie Page */}

//                 {/* <DealSection /> */}

//                 {/* <ProductShow /> */}

           
//               </>
//             }
//           />
//           {/* Route for the T-Shirt component */}
//           <Route path="/t-shirt" element={<TShirt />} />
//           <Route path="/hoodie" element={<ProductAPI />} />
//           <Route path="/stussy-cap" element={<StussyCap />} />
//           <Route path="/sweat-shorts" element={<SweatShorts />} />
//           <Route path="/cart" element={<Cart />} />
//           {/* Add other routes here */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import ProductAPI from './Components/ProductAPI'; // Hoodie Page
import TShirt from './Components/Product/T-Shirt'; // T-Shirt Page
import StussyCap from './Components/Product/Stussy-Cap';
import SweatShorts from './Components/Product/Sweat-Shorts';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<ProductAPI />} /> {/* Default route */}
          <Route path="/t-shirt" element={<TShirt />} />
          <Route path="/hoodie" element={<ProductAPI />} />
          <Route path="/stussy-cap" element={<StussyCap />} />
          <Route path="/sweat-shorts" element={<SweatShorts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;