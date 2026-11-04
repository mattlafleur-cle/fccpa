import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Forest City</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Header />
      <main className="min-h-[80vh] flex items-center justify-center bg-[#FAFAFA] pt-20">
        <div className="text-center px-4 max-w-lg mx-auto">
          <h1 className="serif-heading text-8xl mb-6 text-[#0F1820]">404</h1>
          <h2 className="text-3xl font-semibold mb-4 text-[#0F1820]">Page not found</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="px-8 py-3 bg-[#477956] text-white hover:brightness-110 active:scale-[0.98] transition-all duration-200 inline-block font-medium"
          >
            Return to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;