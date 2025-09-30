"use client";

import Link from "next/link";
import Image from "next/image";

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
    color: "from-green-500 to-green-600",
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
    color: "from-purple-500 to-purple-600",
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
    title: "Legal Writing Tips",
    icon: "fas fa-pen-fancy",
    color: "from-yellow-500 to-yellow-600",
    resources: [
      {
        title: "Guide to Writing Effective Legal Memos",
        description: "PDF guide with examples and formatting guidelines",
        type: "PDF",
        downloadUrl: "#",
        preview: "legal-memo-guide-preview.jpg"
      },
      {
        title: "Case Brief Writing Template",
        description: "Structured template for effective case analysis and briefing",
        type: "PDF",
        downloadUrl: "#",
        preview: "case-brief-template-preview.jpg"
      }
    ]
  },
  {
    title: "Networking for Law Students",
    icon: "fas fa-users",
    color: "from-red-500 to-red-600",
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
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-[#0e46a5] via-[#1a5bb8] to-[#0e46a5]">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_20%,_rgba(255,255,255,0.1),_transparent_60%),_radial-gradient(600px_300px_at_80%_80%,_rgba(255,215,0,0.1),_transparent_60%)]" aria-hidden="true"></div>
        
        <div className="container relative grid items-start gap-10 md:grid-cols-2 pt-4 z-20">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/60 bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              Career Development Tools
            </div>
            
            {/* Heading */}
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Resources to Boost Your Legal Career
            </h1>
            
            {/* Subheading */}
            <p className="mt-5 text-lg text-white/90 leading-relaxed max-w-2xl">
              Access free CV templates, cover letters, interview guides, and more to excel as a law student.
            </p>
            
            {/* CTA */}
            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('resource-listings')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white text-white font-semibold px-6 py-3 hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 group"
              >
                Explore Resources
                <i className="fas fa-arrow-down transition-transform group-hover:translate-y-1"></i>
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-white/80 text-sm">
              {[
                { icon: "fas fa-download", text: "Free Downloads" },
                { icon: "fas fa-edit", text: "Customizable" },
                { icon: "fas fa-star", text: "Professional Quality" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <i className={`${item.icon}`} style={{ fontSize: '1rem', color: 'white', display: 'inline-block' }}></i>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right visual */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_70%_20%,_rgba(255,255,255,0.25),_transparent_60%)]"></div>
              <Image 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional workspace with laptop and legal documents" 
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-lg font-medium">Professional • Accessible • Effective</div>
              </div>
            </div>
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
            {resourceCategories.map((category, categoryIndex) => (
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
                <div className="grid gap-6 md:grid-cols-2">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="group/resource">
                      <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0e46a5] h-full">
                        {/* Resource Preview */}
                        <div className="relative aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 mb-6 overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                              <i className={`${category.icon} text-2xl text-white`}></i>
                            </div>
                          </div>
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                            <span className="text-sm font-semibold text-[#0e46a5]">{resource.type}</span>
                          </div>
                        </div>
                        
                        {/* Resource Info */}
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-[#0e46a5] mb-3 group-hover/resource:text-[#1a5bb8] transition-colors">
                            {resource.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {resource.description}
                          </p>
                        </div>
                        
                        {/* Download Button */}
                        <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all shadow-lg hover:shadow-xl group/btn">
                          <i className="fas fa-download mr-2 group-hover/btn:animate-bounce"></i>
                          Download Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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


