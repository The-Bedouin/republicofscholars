import Link from "next/link";
import Image from "next/image";
import DarkVeil from '../DarkVeil';
import ProgramsAccordion from './ProgramsAccordion';

export const metadata = {
  title: "Programs - Republic of Scholars Initiative",
  description: "Explore our comprehensive programs designed to transform law students through innovative mentorship, skill development, and career advancement opportunities.",
};

const impactMetrics = [
  { number: "100+", label: "Students Mentored", icon: "fas fa-user-graduate" },
  { number: "85%", label: "Job Placement Rate", icon: "fas fa-briefcase" },
  { number: "50+", label: "Partner Organizations", icon: "fas fa-handshake" },
  { number: "95%", label: "Student Satisfaction", icon: "fas fa-star" }
];

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

      {/* Impact Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-[#f0f4ff] via-[#e0e9ff] to-[#c7d6ff]">
      <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e46a5] bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-[#0e46a5] mb-6">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              Our Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e46a5] leading-tight mb-6">
              Measurable Results That Matter
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Our programs have consistently delivered outstanding results, transforming the lives and careers of law students across Nigeria.
            </p>
          </div>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 rounded-xl bg-[--color-brand-500] text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <i className={`${metric.icon} text-2xl`}></i>
                  </div>
                  <div className="text-4xl font-bold text-[--color-brand-500] mb-2">{metric.number}</div>
                  <div className="text-gray-700 font-semibold">{metric.label}</div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_20%,_rgba(255,255,255,0.1),_transparent_60%),_radial-gradient(600px_300px_at_80%_80%,_rgba(255,215,0,0.1),_transparent_60%)]" aria-hidden="true"></div>
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e46a5] bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-[#0e46a5] mb-6">
              <span className="h-2 w-2 rounded-full bg-[#0e46a5]"></span>
              Ready to get started?
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e46a5] leading-tight mb-6">
              Join Our Programs Today
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
              Take the first step towards transforming your legal education and career. Connect with mentors, develop essential skills, and build your professional network.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-[--color-brand-500] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[--color-brand-600] focus:outline-none focus:ring-2 focus:ring-[--color-brand-500] focus:ring-offset-2 transition-all shadow-xl hover:shadow-2xl group min-w-[200px] justify-center"
              >
                Get Involved
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-3 border-2 border-[--color-brand-500] text-[--color-brand-500] font-bold text-lg px-8 py-4 rounded-xl hover:bg-[--color-brand-500] hover:text-white focus:outline-none focus:ring-2 focus:ring-[--color-brand-500] focus:ring-offset-2 transition-all min-w-[200px] justify-center"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


