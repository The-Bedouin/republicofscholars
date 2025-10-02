import Link from "next/link";
import Image from "next/image";
import DarkVeil from '../DarkVeil';
import ProgramsAccordion from './ProgramsAccordion';

export const metadata = {
  title: "Programs - Republic of Scholars Initiative",
  description: "Explore our comprehensive programs designed to transform law students through innovative mentorship, skill development, and career advancement opportunities.",
};


export default function ProgramsPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-[--color-brand-500] via-[--color-brand-600] to-[--color-brand-700]">
        {/* DarkVeil Background */}
        <div className="absolute inset-0 w-full h-full">
          <DarkVeil />
        </div>
        
        {/* Decorative gradients */}
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_10%,_black,_transparent)] z-10">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[--color-gold]/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
        </div>
        
        <div className="container relative text-center pt-8 z-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/60 bg-white/10 backdrop-blur px-4 py-2 text-sm font-semibold text-white mb-6">
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
            Comprehensive Legal Education
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Transforming Law Students Through Innovative Programs
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
            Discover our comprehensive suite of programs designed to accelerate your legal career through mentorship, skill development, and practical experience.
          </p>
          
          {/* CTA */}
          <div>
            <Link 
              href="#programs" 
              className="inline-flex items-center gap-3 rounded-xl border-2 border-white text-white font-semibold px-8 py-4 hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 group transition-all"
            >
              Explore Our Programs
              <i className="fas fa-arrow-down transition-transform group-hover:translate-y-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_20%,_rgba(14,70,165,0.05),_transparent_60%),_radial-gradient(600px_300px_at_80%_80%,_rgba(212,175,55,0.05),_transparent_60%)]" aria-hidden="true"></div>
        
        <div className="container relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 rounded-full border-2 border-[#0e46a5] bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-bold text-[#0e46a5] mb-8 shadow-lg">
              <i className="fas fa-graduation-cap text-lg"></i>
              <span>Our Programs</span>
              <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-[#0e46a5] leading-tight mb-8 relative">
              <span className="relative">
                Comprehensive Legal Development
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#0e46a5] to-yellow-500 rounded-full"></div>
              </span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-700">Programs</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-4">
              Each program is carefully designed to provide practical skills, mentorship, and real-world experience to accelerate your legal career.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-green-500"></i>
                <span>Expert Mentorship</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-green-500"></i>
                <span>Practical Skills</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-green-500"></i>
                <span>Career Ready</span>
              </div>
            </div>
          </div>
          
          {/* Program Accordions */}
          <ProgramsAccordion />
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            {/* Features Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Features</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-8">
              Key benefits that set us apart from other firms
            </h2>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* First Benefit - Unlimited Consultations */}
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-xl hover:bg-white/30 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-comments text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Unlimited consultations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Schedule as many strategy sessions as needed to develop your legal career path with personalized guidance from experienced professionals.
                </p>
              </div>
            </div>
            
            {/* Second Benefit - Tailored Solutions */}
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-xl hover:bg-white/30 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-cloud-download-alt text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tailored solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get customized strategies designed to align with your unique career goals, learning style, and professional aspirations in the legal field.
                </p>
              </div>
            </div>
            
            {/* Third Benefit - Expert Insights */}
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-xl hover:bg-white/30 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-globe text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert insights</h3>
                <p className="text-gray-600 leading-relaxed">
                  Leverage industry-leading expertise to drive informed decisions and accelerate your professional growth in the competitive legal market.
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <Link 
              href="/programs" 
              className="inline-flex items-center gap-3 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              See All Programs
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_20%,_rgba(255,255,255,0.1),_transparent_60%),_radial-gradient(600px_300px_at_80%_80%,_rgba(59,130,246,0.2),_transparent_60%)]" aria-hidden="true"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-600 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 mb-4">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              Ready to Transform Your Legal Career?
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Join the Next Generation of
              <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Legal Leaders
              </span>
            </h2>
            
            {/* Subheading */}
            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
              Don't just study law—master it. Connect with industry experts and launch your career with confidence.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[200px] justify-center"
              >
                <span>Start Your Journey</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
              
              <Link 
                href="/about" 
                className="group inline-flex items-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 min-w-[200px] justify-center"
              >
                <span>Learn More</span>
                <i className="fas fa-info-circle group-hover:rotate-12 transition-transform"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


