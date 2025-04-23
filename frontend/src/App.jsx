import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import { HeroHeader } from '@/components/hero5-header';
import HeroSection from './components/hero-section';
import { Logo } from './components/logo';
import Features from './components/features-1';
import Testimonials from './components/testimonials';
import Pricing from './components/pricing';
import FooterSection from './components/footer';
import ContentSection from './components/content-7';
import ProjectSection from './components/project-section';
import { FAQSection } from './components/faq';
import BlogList from './components/Blogs';
import BlogDetail from './components/BlogDetails'; // 👈 new page

function HomePage() {
  return (
    <>
      <div className="bg-black text-white">
        <HeroHeader />
      </div>
      <div className="bg-black text-white">
        <HeroSection />
      </div>
      <div className='bg-black text-white'>
        <ContentSection />
      </div>
      <div className="bg-black text-white">
        <Features />
      </div>
      <div className="bg-black text-white">
        <Pricing />
      </div>
      <div className="bg-black text-white">
        <Testimonials />
      </div>
      <div className='bg-black text-white'>
        <BlogList />
      </div>
      <div className="bg-black text-white">
        <FAQSection />
      </div>
      <div className="bg-black text-white">
        <FooterSection />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:slug" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
