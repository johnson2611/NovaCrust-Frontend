import { Routes, Route } from "react-router-dom";
import Checkout from "./pages/checkout";
import CheckoutReview from "./components/features/checkout/CheckoutReview";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Checkout/>} />
      <Route path="/checkout/review" element={<CheckoutReview />} />
    </Routes>
  );
};

export default App;

