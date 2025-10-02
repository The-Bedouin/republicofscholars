"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import DarkVeil from '../DarkVeil';

export default function AboutPage() {
  // Set page title dynamically for Client Component
  useEffect(() => {
    document.title = "About Republic of Scholars Initiative";
  }, []);

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
            About Our Initiative
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            About Republic of Scholars Initiative
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
            An intellectual community dedicated to empowering law students through academic excellence, mentorship, and career development.
          </p>
          
          {/* CTA */}
          <div>
            <button 
              onClick={() => document.getElementById('leadership-team')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 rounded-xl border-2 border-white text-white font-semibold px-8 py-4 hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 group transition-all"
            >
              Meet Our Leadership
              <i className="fas fa-arrow-down transition-transform group-hover:translate-y-1"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-2">
              {/* Gold icon */}
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 ring-4 ring-yellow-500/20 grid place-items-center shadow-lg">
                <i className="fas fa-book text-3xl text-white"></i>
              </div>
            </div>
            
            <div className="lg:col-span-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900 shadow-sm mb-6">
                <span className="h-2 w-2 rounded-full bg-yellow-600"></span>
                Our Story
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0e46a5] leading-tight mb-6">
                Building Tomorrow&apos;s Legal Leaders
              </h2>
              
              <p className="text-xl text-black leading-relaxed font-medium max-w-4xl">
                The Republic of Scholars Initiative is a community founded on vast experience, committed to academic excellence and employability for law students across Nigeria. We bridge the gap between academic learning and career success through comprehensive mentorship, practical skill development, and advocacy training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-12 bg-gradient-to-br from-[#f0f4ff] via-[#e0e9ff] to-[#c7d6ff]">
        <div className="container">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e46a5] bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-[#0e46a5] mb-4">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              Our Purpose & Values
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e46a5] leading-tight mb-4">
              Mission, Vision & Core Values
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              The guiding principles and values that drive our commitment to transforming legal education in Nigeria.
            </p>
          </div>
          
          {/* Mission & Vision */}
          <div className="grid gap-8 md:grid-cols-2 mb-10">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 ring-4 ring-yellow-500/20 grid place-items-center shadow-lg">
                  <i className="fas fa-book text-lg text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-[#0e46a5]">Our Mission</h3>
              </div>
              
              <p className="text-base text-black leading-relaxed">
                To foster academic excellence and career development for law students across Nigeria through mentorship, skill-building, and advocacy.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 ring-4 ring-yellow-500/20 grid place-items-center shadow-lg">
                  <i className="fas fa-star text-lg text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-[#0e46a5]">Our Vision</h3>
              </div>
              
              <p className="text-base text-black leading-relaxed">
                To create a thriving community of empowered law professionals shaping Nigeria&apos;s legal landscape.
              </p>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-[#0e46a5] mb-3">Core Values That Guide Us</h3>
              <p className="text-base text-gray-700 leading-relaxed max-w-xl mx-auto">
                The principles that shape our approach to legal education and student development.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Academic Excellence",
                  description: "Committed to rigorous scholarship and intellectual growth that prepares students for legal practice.",
                  icon: "fas fa-graduation-cap"
                },
                {
                  title: "Mentorship",
                  description: "Building meaningful relationships between students and experienced legal professionals for guidance and support.",
                  icon: "fas fa-hands-helping"
                },
                {
                  title: "Advocacy",
                  description: "Developing confident advocates who can effectively represent clients and contribute to justice.",
                  icon: "fas fa-gavel"
                },
                {
                  title: "Employability",
                  description: "Ensuring students develop practical skills and professional networks for successful career transitions.",
                  icon: "fas fa-briefcase"
                }
              ].map((value, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 h-full group-hover:border-[#0e46a5]/30">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#0e46a5] text-white shadow-sm mb-4 group-hover:shadow-md transition-all duration-300">
                      <i className={`${value.icon} text-xl`}></i>
                    </div>
                    
                    <h4 className="text-lg font-bold text-[#0e46a5] mb-3 group-hover:text-[#1a5bb8] transition-colors">
                      {value.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History and Founding Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e46a5] bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0e46a5] mb-6">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              Our Foundation
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e46a5] leading-tight mb-6">
              History & Founding
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              The story of how one visionary leader&apos;s passion became a movement transforming legal education.
            </p>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-100">
                <div className="flex items-center gap-4 mb-6">
                  {/* Founder placeholder headshot */}
                  <div className="relative">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                      <div className="h-18 w-18 rounded-full bg-white flex items-center justify-center">
                        <span className="text-2xl font-bold text-yellow-600">FR</span>
                      </div>
                    </div>
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-30"></div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-[#0e46a5]">Fatudimu Oluwaseun Raphael</h3>
                    <p className="text-blue-600 font-medium">Founder & Executive Director</p>
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-800 leading-relaxed italic mb-6">
                  &ldquo;Fatudimu Oluwaseun Raphael, a seasoned legal professional, founded the Republic of Scholars Initiative to bridge the gap between academic learning and career success. His vision was to create a community where law students could access mentorship, practical training, and career guidance from experienced professionals.&rdquo;
                </blockquote>
                
                <p className="text-base text-gray-700 leading-relaxed">
                  With extensive experience in law and education, Fatudimu recognized the challenges facing Nigerian law students and committed to creating solutions that would empower the next generation of legal professionals.
                </p>
              </div>
            </div>
            
            <div>
              {/* Timeline graphic */}
              <div className="space-y-8">
                {[
                  {
                    year: "2020",
                    title: "Foundation",
                    description: "Republic of Scholars Initiative established with a clear vision for legal education transformation."
                  },
                  {
                    year: "2021",
                    title: "First Programs",
                    description: "Launched mentorship and skill development programs across 5 universities."
                  },
                  {
                    year: "2022",
                    title: "Expansion",
                    description: "Extended reach to 15+ universities and introduced advocacy training programs."
                  },
                  {
                    year: "2023",
                    title: "Recognition",
                    description: "Received recognition from Nigerian Bar Association and other legal institutions."
                  },
                  {
                    year: "2024",
                    title: "Impact",
                    description: "Reached 500+ students with 95% success rate and 150+ job placements."
                  }
                ].map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-sm">{milestone.year}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0e46a5] mb-2">{milestone.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section id="leadership-team" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e46a5] bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0e46a5] mb-6">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              Leadership Team
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e46a5] leading-tight mb-6">
              Meet Our Leadership
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Experienced professionals dedicated to empowering the next generation of legal leaders.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Founder */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-100 h-full">
                <div className="text-center mb-6">
                  <div className="relative mx-auto mb-4">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg mx-auto">
                      <div className="h-22 w-22 rounded-full bg-white flex items-center justify-center">
                        <span className="text-3xl font-bold text-yellow-600">FR</span>
                      </div>
                    </div>
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-30"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#0e46a5] mb-2">Fatudimu Oluwaseun Raphael</h3>
                  <p className="text-blue-600 font-semibold text-lg mb-4">Founder & Executive Director</p>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-center">
                  A visionary leader with extensive experience in law and education, dedicated to mentoring the next generation of legal professionals. His passion for academic excellence and career development drives the initiative&apos;s mission.
                </p>
              </div>
            </div>
            
            {/* Team Member Placeholders */}
            {[
              {
                name: "Dr. Amina Hassan",
                title: "Program Director",
                initials: "AH",
                bio: "Experienced in legal education, passionate about student success and curriculum development."
              },
              {
                name: "Chinedu Okonkwo",
                title: "Mentorship Coordinator",
                initials: "CO",
                bio: "Dedicated to building meaningful mentor-student relationships and career guidance programs."
              }
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="text-center mb-6">
                    <div className="relative mx-auto mb-4">
                      <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#0e46a5] to-[#1a5bb8] flex items-center justify-center shadow-lg mx-auto">
                        <span className="text-3xl font-bold text-white">{member.initials}</span>
                      </div>
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-20"></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#0e46a5] mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold text-lg mb-4">{member.title}</p>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-center">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-br from-[#f0f4ff] via-[#e0e9ff] to-[#c7d6ff]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e46a5] bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-[#0e46a5] mb-6">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              Join Our Community
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e46a5] leading-tight mb-6">
              Ready to Transform Your Legal Journey?
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
              Connect with mentors, access resources, and build your legal career with confidence. Join hundreds of students already benefiting from our programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/programs" 
                className="inline-flex items-center gap-3 bg-[#0e46a5] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#1a5bb8] focus:outline-none focus:ring-2 focus:ring-[#0e46a5] focus:ring-offset-2 transition-all shadow-xl hover:shadow-2xl group"
              >
                Explore Programs
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 border-2 border-[#0e46a5] text-[#0e46a5] font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#0e46a5] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0e46a5] focus:ring-offset-2 transition-all group"
              >
                Get in Touch
                <i className="fas fa-message group-hover:scale-110 transition-transform"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
