"use client";

import Link from "next/link";
import Image from "next/image";
import DarkVeil from '../DarkVeil';

export default function AmbassadorsPage() {

  // Sample ambassador data
  const ambassadors = [
    {
      university: "University of Lagos",
      region: "South West",
      logo: "/university-logos/unilag.png",
      ambassadors: [
        {
          name: "Aisha Mohammed",
          role: "Campus Ambassador",
          bio: "Final-year law student passionate about mentorship and legal advocacy. Led multiple moot court competitions.",
          photo: "AM",
          email: "aisha.mohammed@unilag.edu.ng",
          linkedin: "https://linkedin.com/in/aisha-mohammed"
        },
        {
          name: "Tunde Adebayo",
          role: "Deputy Ambassador",
          bio: "Third-year law student with expertise in corporate law and legal research. Active in student government.",
          photo: "TA",
          email: "tunde.adebayo@unilag.edu.ng",
          linkedin: "https://linkedin.com/in/tunde-adebayo"
        }
      ]
    },
    {
      university: "Ahmadu Bello University",
      region: "North West",
      logo: "/university-logos/abu.png",
      ambassadors: [
        {
          name: "Fatima Ibrahim",
          role: "Campus Ambassador",
          bio: "Fourth-year law student specializing in human rights law. Published researcher and community advocate.",
          photo: "FI",
          email: "fatima.ibrahim@abu.edu.ng",
          linkedin: "https://linkedin.com/in/fatima-ibrahim"
        }
      ]
    },
    {
      university: "University of Nigeria, Nsukka",
      region: "South East",
      logo: "/university-logos/unn.png",
      ambassadors: [
        {
          name: "Chinedu Okonkwo",
          role: "Campus Ambassador",
          bio: "Final-year law student and moot court champion. Represented Nigeria at international competitions.",
          photo: "CO",
          email: "chinedu.okonkwo@unn.edu.ng",
          linkedin: "https://linkedin.com/in/chinedu-okonkwo"
        },
        {
          name: "Ngozi Eze",
          role: "Deputy Ambassador",
          bio: "Third-year law student with focus on commercial law. Excellent academic record and leadership skills.",
          photo: "NE",
          email: "ngozi.eze@unn.edu.ng",
          linkedin: "https://linkedin.com/in/ngozi-eze"
        }
      ]
    },
    {
      university: "Obafemi Awolowo University",
      region: "South West",
      logo: "/university-logos/oau.png",
      ambassadors: [
        {
          name: "Kemi Adeyemi",
          role: "Campus Ambassador",
          bio: "Fourth-year law student passionate about environmental law and sustainable development.",
          photo: "KA",
          email: "kemi.adeyemi@oau.edu.ng",
          linkedin: "https://linkedin.com/in/kemi-adeyemi"
        }
      ]
    },
    {
      university: "University of Ibadan",
      region: "South West",
      logo: "/university-logos/ui.png",
      ambassadors: [
        {
          name: "Oluwaseun Ojo",
          role: "Campus Ambassador",
          bio: "Final-year law student with expertise in constitutional law. Active in legal aid and pro bono work.",
          photo: "OO",
          email: "oluwaseun.ojo@ui.edu.ng",
          linkedin: "https://linkedin.com/in/oluwaseun-ojo"
        }
      ]
    },
    {
      university: "Bayero University Kano",
      region: "North West",
      logo: "/university-logos/buk.png",
      ambassadors: [
        {
          name: "Ahmad Sani",
          role: "Campus Ambassador",
          bio: "Fourth-year law student specializing in Islamic law and commercial transactions.",
          photo: "AS",
          email: "ahmad.sani@buk.edu.ng",
          linkedin: "https://linkedin.com/in/ahmad-sani"
        }
      ]
    },
    {
      university: "University of Benin",
      region: "South South",
      logo: "/university-logos/uniben.png",
      ambassadors: [
        {
          name: "Blessing Omoregie",
          role: "Campus Ambassador",
          bio: "Third-year law student with focus on maritime law and international trade.",
          photo: "BO",
          email: "blessing.omoregie@uniben.edu.ng",
          linkedin: "https://linkedin.com/in/blessing-omoregie"
        }
      ]
    },
    {
      university: "Lagos State University",
      region: "South West",
      logo: "/university-logos/lasu.png",
      ambassadors: [
        {
          name: "Temitope Adebisi",
          role: "Campus Ambassador",
          bio: "Fourth-year law student passionate about criminal law and social justice advocacy.",
          photo: "TA",
          email: "temitope.adebisi@lasu.edu.ng",
          linkedin: "https://linkedin.com/in/temitope-adebisi"
        }
      ]
    }
  ];


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
            Ambassador Network
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Our Ambassador Network: Empowering Law Students Across Nigeria
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
            Meet the passionate representatives from leading universities driving academic excellence and career growth.
          </p>
          
          {/* CTA */}
          <div>
            <Link 
              href="#become-ambassador" 
              className="inline-flex items-center gap-3 rounded-xl border-2 border-white text-white font-semibold px-8 py-4 hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 group transition-all"
            >
              Become an Ambassador
              <i className="fas fa-arrow-down transition-transform group-hover:translate-y-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Ambassador Directory Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e46a5] bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0e46a5] mb-6">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              Our Ambassadors
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e46a5] leading-tight mb-6">
              Meet Our University Representatives
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Connect with dedicated ambassadors from universities across Nigeria who are driving change in legal education.
            </p>
          </div>


          {/* Ambassador Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ambassadors.map((university, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
                  {/* University Header */}
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0e46a5] to-[#1a5bb8] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                      <i className="fas fa-university text-lg text-white"></i>
                    </div>
                    <h3 className="text-lg font-bold text-[#0e46a5] mb-2">{university.university}</h3>
                    <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 text-yellow-800 px-2 py-1 text-xs font-medium">
                      <i className="fas fa-map-marker-alt text-xs"></i>
                      {university.region}
                    </div>
                  </div>

                  {/* Ambassadors List */}
                  <div className="space-y-3">
                    {university.ambassadors.map((ambassador, ambIndex) => (
                      <div key={ambIndex} className="border border-gray-100 rounded-lg p-3 hover:border-[#0e46a5]/30 transition-colors">
                        <div className="flex items-start gap-3">
                          {/* Ambassador Photo */}
                          <div className="relative">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#0e46a5] to-[#1a5bb8] flex items-center justify-center shadow-sm">
                              <span className="text-white font-bold text-xs">{ambassador.photo}</span>
                            </div>
                            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-20"></div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-[#0e46a5] text-sm mb-1">{ambassador.name}</h4>
                            <div className="text-xs text-yellow-600 font-semibold mb-2">{ambassador.role}</div>
                            <p className="text-gray-600 text-xs leading-relaxed mb-2">{ambassador.bio}</p>
                            
                            {/* Contact Links */}
                            <div className="flex gap-1">
                              <a 
                                href={`mailto:${ambassador.email}`}
                                className="inline-flex items-center gap-1 text-xs bg-[#0e46a5] text-white px-2 py-1 rounded-full hover:bg-[#1a5bb8] transition-colors"
                              >
                                <i className="fas fa-envelope text-xs"></i>
                                Email
                              </a>
                              <a 
                                href={ambassador.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs bg-[#0e46a5] text-white px-2 py-1 rounded-full hover:bg-[#1a5bb8] transition-colors"
                              >
                                <i className="fab fa-linkedin text-xs"></i>
                                LinkedIn
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* How to Become an Ambassador Section */}
      <section id="become-ambassador" className="py-20 bg-gradient-to-br from-[#f0f4ff] via-[#e0e9ff] to-[#c7d6ff]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e46a5] bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-[#0e46a5] mb-6">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              Join Our Network
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e46a5] leading-tight mb-6">
              How to Become an Ambassador
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Take the first step towards becoming a campus representative and making a difference in legal education.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {[
              {
                step: "01",
                title: "Submit Application",
                description: "Complete our online application form with your academic details, leadership experience, and motivation.",
                icon: "fas fa-file-alt",
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "02",
                title: "Interview Process",
                description: "Participate in a virtual interview to discuss your vision and commitment to the role.",
                icon: "fas fa-comments",
                color: "from-green-500 to-green-600"
              },
              {
                step: "03",
                title: "Onboarding & Training",
                description: "Complete our comprehensive training program and get connected with the ambassador community.",
                icon: "fas fa-graduation-cap",
                color: "from-yellow-500 to-yellow-600"
              }
            ].map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
                  {/* Step Number */}
                  <div className="text-4xl font-bold text-gray-100 mb-3">{step.step}</div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} text-white shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                    <i className={`${step.icon} text-lg`}></i>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0e46a5] mb-3 group-hover:text-[#1a5bb8] transition-colors">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            {/* Features Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#0e46a5]"></div>
              <span className="text-[#0e46a5] font-semibold text-sm uppercase tracking-wide">Features</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-8">
              Our Unique Edge
            </h2>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* First Benefit - Exclusive Mentorship */}
            <div className="text-center group">
              <div className="w-16 h-16 rounded-xl bg-[#0e46a5] text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-hands-helping text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Exclusive mentorship</h3>
              <p className="text-gray-600 leading-relaxed">
                Access to senior legal professionals and industry experts for personalized guidance and career development.
              </p>
            </div>
            
            {/* Second Benefit - Leadership Opportunities */}
            <div className="text-center group">
              <div className="w-16 h-16 rounded-xl bg-[#0e46a5] text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-crown text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Leadership opportunities</h3>
              <p className="text-gray-600 leading-relaxed">
                Develop leadership skills through organizing events and managing campus initiatives that make a real impact.
              </p>
            </div>
            
            {/* Third Benefit - Networking Events */}
            <div className="text-center group">
              <div className="w-16 h-16 rounded-xl bg-[#0e46a5] text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-users text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Networking events</h3>
              <p className="text-gray-600 leading-relaxed">
                Attend exclusive networking events with legal professionals and fellow ambassadors to build lasting connections.
              </p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-[#0e46a5] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#1a5bb8] focus:outline-none focus:ring-2 focus:ring-[#0e46a5] focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Join Our Network
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-[#f0f4ff] via-[#e0e9ff] to-[#c7d6ff]">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
            {/* Left Side - Header */}
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              {/* TESTIMONIALS Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-600 mb-4">
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                TESTIMONIALS
              </div>
              
              {/* Main Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3">
                <span className="text-gray-500 text-2xl md:text-3xl lg:text-4xl">15+ ambassadors</span>
                <br />
                <span className="text-gray-900">One outcome: Growth</span>
              </h2>
            </div>
            
            {/* Right Side - Description and Button */}
            <div className="lg:w-1/2 lg:text-right">
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Real stories from real students who transformed their legal careers with our programs.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 shadow-lg"
              >
                Join Our Network
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            {[
              {
                name: "Aisha Mohammed",
                university: "University of Lagos",
                quote: "Being an ambassador has transformed my leadership skills and connected me with amazing mentors. I've organized three successful campus events and helped 50+ students access our programs.",
                image: "AM"
              },
              {
                name: "Chinedu Okonkwo",
                university: "University of Nigeria, Nsukka",
                quote: "The networking opportunities through this role are incredible. I've met senior advocates, secured internship opportunities, and built lasting relationships that will shape my career.",
                image: "CO"
              },
              {
                name: "Fatima Ibrahim",
                university: "Ahmadu Bello University",
                quote: "This network has given me a platform to make real change in my university. I've seen firsthand how our programs are improving academic performance and career readiness.",
                image: "FI"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Quote */}
                  <div className="mb-3">
                    <div className="text-2xl text-gray-900 mb-2 font-bold">&ldquo;</div>
                    <blockquote className="text-gray-900 leading-relaxed text-sm font-medium">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-2">
                    {/* Avatar */}
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#0e46a5] to-[#1a5bb8] flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-xs">{testimonial.image}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-gray-500 font-medium text-xs">{testimonial.university}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-900"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>

          {/* Bottom CTA */}
          <div className="text-right">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 shadow-lg"
            >
              Join Our Network
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e46a5] bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0e46a5] mb-6">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              Ready to make an impact?
            </div>
            
            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e46a5] leading-tight mb-6">
              Ready to Join Our Network and Make an Impact?
            </h2>
            
            {/* Subheading */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
              Take the first step towards becoming a campus ambassador and help shape the future of legal education in Nigeria.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-[#0e46a5] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#1a5bb8] focus:outline-none focus:ring-2 focus:ring-[#0e46a5] focus:ring-offset-2 transition-all shadow-xl hover:shadow-2xl group min-w-[200px] justify-center"
              >
                Apply Now
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-black text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all group min-w-[200px] justify-center"
              >
                Learn More
                <i className="fas fa-info-circle group-hover:scale-110 transition-transform"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


