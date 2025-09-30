"use client";

import Link from "next/link";
import Image from "next/image";
import DarkVeil from '../DarkVeil';

const resourceCategories = [
  {
    title: "CV Templates",
    icon: "fas fa-file-alt",
    color: "from-blue-500 to-blue-600",
    resources: [
      {
        title: "Professional CV Template for Law Students",
        description: "PDF template tailored for legal internships and graduate positions",
        type: "PDF",
        downloadUrl: "#",
        preview: "cv-template-preview.jpg"
      },
      {
        title: "Academic CV Template",
        description: "Specialized format for academic applications and research positions",
        type: "PDF",
        downloadUrl: "#",
        preview: "academic-cv-preview.jpg"
      }
    ]
  },
  {
    title: "Cover Letter Templates",
    icon: "fas fa-envelope-open-text",
    color: "from-blue-500 to-blue-600",
    resources: [
      {
        title: "Customizable Cover Letter for Legal Roles",
        description: "PDF template with sample text for law firm applications",
        type: "PDF",
        downloadUrl: "#",
        preview: "cover-letter-preview.jpg"
      },
      {
        title: "Internship Cover Letter Template",
        description: "Professional template specifically designed for legal internships",
        type: "PDF",
        downloadUrl: "#",
        preview: "internship-cover-letter-preview.jpg"
      }
    ]
  },
  {
    title: "Interview Guides",
    icon: "fas fa-comments",
    color: "from-blue-500 to-blue-600",
    resources: [
      {
        title: "Top 10 Interview Questions for Law Students",
        description: "PDF guide with tips and sample answers for legal interviews",
        type: "PDF",
        downloadUrl: "#",
        preview: "interview-guide-preview.jpg"
      },
      {
        title: "Behavioral Interview Preparation",
        description: "STAR method guide with legal-specific examples",
        type: "PDF",
        downloadUrl: "#",
        preview: "behavioral-interview-preview.jpg"
      }
    ]
  },
  {
    title: "Networking for Law Students",
    icon: "fas fa-users",
    color: "from-blue-500 to-blue-600",
    resources: [
      {
        title: "Building Your Legal Network in Nigeria",
        description: "PDF guide with strategies for professional networking",
        type: "PDF",
        downloadUrl: "#",
        preview: "networking-guide-preview.jpg"
      },
      {
        title: "LinkedIn Profile Optimization for Lawyers",
        description: "Step-by-step guide to creating a professional legal profile",
        type: "PDF",
        downloadUrl: "#",
        preview: "linkedin-guide-preview.jpg"
      }
    ]
  }
];

export default function ResourcesPage() {
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
            Career Development Resources
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Essential Resources for Legal Career Success
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
            Access our comprehensive collection of professional templates, guides, and tools designed to accelerate your legal career development.
          </p>
          
          {/* CTA */}
          <div>
            <button 
              onClick={() => document.getElementById('resource-listings')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 rounded-xl border-2 border-white text-white font-semibold px-8 py-4 hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 group transition-all"
            >
              Explore Our Resources
              <i className="fas fa-arrow-down transition-transform group-hover:translate-y-1"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Resource Listings Section */}
      <section id="resource-listings" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#0e46a5] mb-4">
              <span className="h-2 w-2 rounded-full bg-[#0e46a5]"></span>
              Downloadable Resources
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e46a5] mb-4 leading-tight">
              Professional Career Development Tools
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Download our comprehensive collection of templates, guides, and resources designed specifically for Nigerian law students.
            </p>
          </div>
          
          {/* Resource Categories */}
          <div className="space-y-16">
            {/* First Row: CV Templates and Cover Letter Templates */}
            <div className="grid gap-8 md:grid-cols-2">
              {resourceCategories.slice(0, 2).map((category, categoryIndex) => (
                <div key={categoryIndex} className="group">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                      <i className={`${category.icon} text-lg`}></i>
                    </div>
                    <h3 className="text-3xl font-bold text-[#0e46a5] group-hover:text-[#1a5bb8] transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Resources Grid */}
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                    {category.resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="group/resource">
                        <div className="bg-white border-2 border-gray-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0e46a5] h-full">
                          {/* Resource Preview */}
                          <div className="relative aspect-[4/3] rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 mb-4 overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                                <i className={`${category.icon} text-lg text-white`}></i>
                              </div>
                            </div>
                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                              <span className="text-xs font-semibold text-[#0e46a5]">{resource.type}</span>
                            </div>
                          </div>
                          
                          {/* Resource Info */}
                          <div className="mb-4">
                            <h4 className="text-sm font-bold text-[#0e46a5] mb-2 group-hover/resource:text-[#1a5bb8] transition-colors line-clamp-2">
                              {resource.title}
                            </h4>
                            <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                              {resource.description}
                            </p>
                          </div>
                          
                          {/* Download Button */}
                          <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold px-3 py-2 rounded-lg hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all shadow-lg hover:shadow-xl group/btn text-sm">
                            <i className="fas fa-download mr-1 group-hover/btn:animate-bounce"></i>
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row: Interview Guides and Networking for Law Students */}
            <div className="grid gap-8 md:grid-cols-2">
              {resourceCategories.slice(2, 4).map((category, categoryIndex) => (
                <div key={categoryIndex + 2} className="group">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                      <i className={`${category.icon} text-lg`}></i>
                    </div>
                    <h3 className="text-3xl font-bold text-[#0e46a5] group-hover:text-[#1a5bb8] transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Resources Grid */}
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                    {category.resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="group/resource">
                        <div className="bg-white border-2 border-gray-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0e46a5] h-full">
                          {/* Resource Preview */}
                          <div className="relative aspect-[4/3] rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 mb-4 overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                                <i className={`${category.icon} text-lg text-white`}></i>
                              </div>
                            </div>
                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                              <span className="text-xs font-semibold text-[#0e46a5]">{resource.type}</span>
                            </div>
                          </div>
                          
                          {/* Resource Info */}
                          <div className="mb-4">
                            <h4 className="text-sm font-bold text-[#0e46a5] mb-2 group-hover/resource:text-[#1a5bb8] transition-colors line-clamp-2">
                              {resource.title}
                            </h4>
                            <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                              {resource.description}
                            </p>
                          </div>
                          
                          {/* Download Button */}
                          <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold px-3 py-2 rounded-lg hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all shadow-lg hover:shadow-xl group/btn text-sm">
                            <i className="fas fa-download mr-1 group-hover/btn:animate-bounce"></i>
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Resources Section */}
      <section className="py-20 bg-gradient-to-br from-[#f0f4ff] via-[#e0e9ff] to-[#c7d6ff]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e46a5] bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-[#0e46a5] mb-6">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              How to Use Resources
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e46a5] leading-tight mb-6">
              Getting Started with Your Resources
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Follow these simple steps to download, customize, and use our professional resources effectively.
            </p>
          </div>
          
          {/* Instructions Grid */}
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {[
              {
                step: "1",
                title: "Download",
                description: "Click the download button on any resource card to save the file to your device",
                icon: "fas fa-download",
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "2",
                title: "Customize",
                description: "Edit templates in Microsoft Word or Google Docs to personalize them for your needs",
                icon: "fas fa-edit",
                color: "from-green-500 to-green-600"
              },
              {
                step: "3",
                title: "Apply",
                description: "Use your customized resources for applications, interviews, and professional development",
                icon: "fas fa-check-circle",
                color: "from-yellow-500 to-yellow-600"
              }
            ].map((instruction, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#0e46a5] to-[#1a5bb8] text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                    {instruction.step}
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${instruction.color} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                    <i className={`${instruction.icon} text-xl`}></i>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0e46a5] mb-4 group-hover:text-[#1a5bb8] transition-colors">
                    {instruction.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {instruction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Tips */}
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#0e46a5] mb-4">Pro Tips for Success</h3>
              <p className="text-lg text-gray-600">Maximize the impact of your resources with these expert recommendations</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-lightbulb text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0e46a5] mb-2">Keep It Professional</h4>
                    <p className="text-gray-600">Use professional fonts (Times New Roman, Arial) and maintain consistent formatting throughout your documents.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-search text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0e46a5] mb-2">Research Your Target</h4>
                    <p className="text-gray-600">Customize each application by researching the specific firm, organization, or position you're applying for.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-users text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0e46a5] mb-2">Seek Feedback</h4>
                    <p className="text-gray-600">Have mentors, professors, or peers review your documents before submitting applications.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-save text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0e46a5] mb-2">Save Multiple Versions</h4>
                    <p className="text-gray-600">Keep different versions of your documents for different types of applications and opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-6">
              Ready to accelerate your legal career?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/programs" 
                className="inline-flex items-center gap-3 bg-[#0e46a5] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#1a5bb8] focus:outline-none focus:ring-2 focus:ring-[#0e46a5] focus:ring-offset-2 transition-all shadow-xl hover:shadow-2xl group"
              >
                Explore Our Programs
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 border-2 border-[#0e46a5] text-[#0e46a5] font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#0e46a5] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0e46a5] focus:ring-offset-2 transition-all group"
              >
                Get Support
                <i className="fas fa-message group-hover:scale-110 transition-transform"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


