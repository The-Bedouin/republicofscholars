"use client";

import Link from "next/link";
import { useState } from "react";

const programs = [
  {
    id: "mentorship",
    title: "Mentorship Program",
    description: "Pairing students with experienced legal professionals for personalized guidance and career planning.",
    keyOutcome: "Build a professional network and gain career clarity.",
    icon: "fas fa-user-tie",
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    details: [
      "One-on-one mentorship with senior legal practitioners",
      "Career guidance and professional development planning",
      "Industry insights and networking opportunities",
      "Regular check-ins and milestone tracking",
      "Access to exclusive professional events and workshops"
    ]
  },
  {
    id: "skill-development",
    title: "Skill Development Workshops",
    description: "Intensive training sessions focused on practical skills like legal research, writing, advocacy, and essential soft skills.",
    keyOutcome: "Develop practical, career-ready legal skills.",
    icon: "fas fa-tools",
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    details: [
      "Legal research and writing intensive workshops",
      "Public speaking and presentation skills training",
      "Negotiation and mediation techniques",
      "Technology and digital law skills",
      "Professional communication and networking"
    ]
  },
  {
    id: "academic-excellence",
    title: "Academic Excellence Initiatives",
    description: "Structured support programs, including study groups, moot court competitions, and scholarship opportunities.",
    keyOutcome: "Achieve top academic performance.",
    icon: "fas fa-trophy",
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    details: [
      "Study groups and peer learning sessions",
      "Moot court competitions and mock trials",
      "Scholarship and grant application support",
      "Research paper writing assistance",
      "Academic performance tracking and improvement"
    ]
  },
  {
    id: "advocacy-training",
    title: "Advocacy Training",
    description: "Hands-on programs designed to develop powerful public speaking, courtroom presence, and legal advocacy skills.",
    keyOutcome: "Master effective public speaking and advocacy.",
    icon: "fas fa-microphone-alt",
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    details: [
      "Courtroom presentation and advocacy skills",
      "Debate and public speaking competitions",
      "Mock trials and legal simulations",
      "Media training and interview preparation",
      "Leadership and confidence building"
    ]
  }
];

export default function ProgramsAccordion() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  const toggleProgram = (programId: string) => {
    setExpandedProgram(expandedProgram === programId ? null : programId);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid gap-6 md:grid-cols-2">
        {programs.map((program) => (
          <div key={program.id} className={`group relative bg-white rounded-2xl border-2 ${program.borderColor} overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
            {/* Header */}
            <button
              onClick={() => toggleProgram(program.id)}
              className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#0e46a5] focus:ring-offset-2"
            >
              <div className="flex items-start gap-4">
                {/* Icon with gradient background */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    <i className={`${program.icon} text-2xl`}></i>
                  </div>
                  {/* Decorative ring */}
                  <div className={`absolute -inset-1 rounded-xl bg-gradient-to-br ${program.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-[#0e46a5] mb-2 group-hover:text-[#1a5bb8] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3 text-sm">
                    {program.description}
                  </p>
                  
                  {/* Key outcome badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${program.bgColor} ${program.textColor} font-semibold text-xs border ${program.borderColor} shadow-sm`}>
                    <i className="fas fa-star text-yellow-500 text-xs"></i>
                    <span>{program.keyOutcome}</span>
                  </div>
                </div>
                
                {/* Expand/Collapse icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors`}>
                    <i className={`fas fa-chevron-down text-sm text-gray-600 transition-transform duration-300 ${
                      expandedProgram === program.id ? 'rotate-180' : ''
                    }`}></i>
                  </div>
                </div>
              </div>
            </button>
            
            {/* Expanded content */}
            {expandedProgram === program.id && (
              <div className={`px-6 pb-6 ${program.bgColor} border-t ${program.borderColor} animate-in slide-in-from-top-2 duration-300`}>
                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <i className={`fas fa-list-ul text-lg ${program.textColor}`}></i>
                    <h4 className={`text-lg font-bold ${program.textColor}`}>Program Details</h4>
                  </div>
                  
                  <div className="grid gap-3">
                    {program.details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <i className="fas fa-check text-green-600 text-xs"></i>
                          </div>
                        </div>
                        <span className="text-gray-700 leading-relaxed text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link 
                      href="/contact" 
                      className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${program.gradient} text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 group text-sm`}
                    >
                      <i className="fas fa-rocket text-sm"></i>
                      Apply Now
                      <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform text-sm"></i>
                    </Link>
                    <Link 
                      href="/about" 
                      className={`inline-flex items-center justify-center gap-2 border-2 ${program.borderColor} ${program.textColor} px-6 py-3 rounded-lg font-bold hover:${program.bgColor} transition-all duration-300 text-sm`}
                    >
                      <i className="fas fa-info-circle text-sm"></i>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
