import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";

// src/pages/404.tsx
const Custom404 = () => (
  <>
  <HeaderTop/>
  <Header/>
    <div className="container mx-auto py-16 px-4 bg-black text-white text-center">
      <h1 className="text-5xl font-bold mb-8">404 - Page Not Found</h1>
      <p className="py-4">The page youre looking for doesnt exist or has been moved.</p>
      <a href="/" className="bg-blue-500 py-2 px-5 mt-8 rounded-md hover:bg-blue-700">
        Go Home
      </a>
    </div>
    <Footer/>
    </>
  );
  
  export default Custom404;
