import Link from "next/link";
import Image from "next/image";
import DarkVeil from './DarkVeil';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-4 md:py-8 bg-gradient-to-br from-[--color-brand-500] via-[--color-brand-600] to-[--color-brand-700]">
        {/* DarkVeil Background */}
        <div className="absolute inset-0 w-full h-full">
          <DarkVeil />
        </div>
        {/* Decorative gradients */}
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_10%,_black,_transparent)] z-10">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[--color-gold]/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
        </div>
        <div className="container relative grid items-start gap-10 md:grid-cols-2 pt-4 z-20">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/60 bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              Shaping Legal Trailblazers
            </div>
            {/* Heading */}
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Empowering Nigeria's next generation of legal professionals
            </h1>
            {/* Subheading */}
            <p className="mt-5 text-lg text-white/90 leading-relaxed max-w-2xl">
              Practical mentorship, skills training, and pathways to employment—built for law students across Nigeria.
            </p>
            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Link href="/programs" className="inline-flex items-center gap-2 rounded-xl border-2 border-white text-white font-semibold px-6 py-3 hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 group">
                Explore Programs
                <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border-2 border-yellow-500 text-white px-6 py-3 hover:bg-yellow-500 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                Talk to us
                <i className="fas fa-message"></i>
              </Link>
            </div>
            {/* Trust row */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/80 text-sm">
              {[
                { icon: "fas fa-user-graduate", text: "500+ Students" },
                { icon: "fas fa-chalkboard-teacher", text: "100+ Mentors" },
                { icon: "fas fa-university", text: "20+ Universities" },
                { icon: "fas fa-star", text: "95% Success rate" },
              ].map((it) => (
                <div key={it.text} className="flex items-center gap-2">
                  <i className={`${it.icon}`} style={{ fontSize: '1rem', color: 'white', display: 'inline-block' }}></i>
                  <span>{it.text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right visual */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_70%_20%,_rgba(255,255,255,0.25),_transparent_60%)]"></div>
              <Image 
                src="/lady of justice.png" 
                alt="Lady of Justice representing legal excellence and fairness" 
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-lg font-medium">Mentorship • Skills • Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Snapshot */}
      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            {/* Badge - White background with blue text and gold accent */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-white px-4 py-2 text-xs font-semibold text-blue-900 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-600"></span>
              Our mission
            </div>
            
            {/* Main heading - Blue for prominence */}
            <h2 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-[#0e46a5] leading-tight">
              Mission Snapshot
            </h2>
            
            {/* Body text - Black for maximum readability */}
            <p className="mt-6 text-xl text-black leading-relaxed font-medium">
              We champion rigorous scholarship and practical training so every Nigerian law student can excel
              academically and transition confidently into the legal profession.
            </p>
            
            {/* Feature list with gold accents */}
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Academic excellence",
                  desc: "Study support plus research & writing labs that raise performance.",
                  icon: "fas fa-graduation-cap",
                },
                {
                  title: "Mentorship that matters",
                  desc: "Matched mentors, milestone plans, and consistent feedback.",
                  icon: "fas fa-hands-helping",
                },
                {
                  title: "Career readiness",
                  desc: "Clinics, moots, and employability coaching for real-world impact.",
                  icon: "fas fa-briefcase",
                },
                {
                  title: "Inclusive community",
                  desc: "Peer networks and opportunities across 20+ universities.",
                  icon: "fas fa-users",
                },
              ].map((i) => (
                <li key={i.title} className="flex items-start gap-4">
                  {/* Gold accent icon */}
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-yellow-600 text-white shadow-md">
                    <i className={`${i.icon} text-sm`}></i>
                  </span>
                  <div>
                    {/* Blue headings for prominence */}
                    <div className="font-bold text-[#0e46a5] text-lg">{i.title}</div>
                    {/* Black body text for readability */}
                    <p className="text-base text-black mt-2 leading-relaxed">{i.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            {/* CTA link with gold accent */}
            <div className="mt-10">
              <Link
                href="/programs"
                aria-label="Explore programs"
                className="inline-flex items-center gap-3 text-[#0e46a5] font-bold text-lg hover:text-[#1a5bb8] focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 rounded-lg px-2 py-2 transition-colors group"
              >
                Explore our programs
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform"><path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </Link>
            </div>
          </div>
          
          {/* Right side card - White background with blue accents */}
          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="rounded-2xl border-2 border-blue-200 bg-white p-8 shadow-xl">
              <div className="flex items-center gap-5 mb-8">
                {/* Gold accent icon */}
                <div className="h-18 w-18 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 ring-4 ring-yellow-500/20 grid place-items-center shadow-lg" aria-hidden="true">
                  <i className="fas fa-globe text-3xl text-white"></i>
                </div>
                <div>
                  {/* Blue heading */}
                  <div className="font-bold text-[#0e46a5] text-xl">Learn • Grow • Lead</div>
                  {/* Black body text */}
                  <p className="text-base text-black mt-2 font-medium">Mentorship, skills, and real-world experience to accelerate your legal journey.</p>
                </div>
              </div>
              
              {/* Stats grid - Modern cards with subtle gradient and icons */}
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { k: "Students", v: "500+", icon: "fas fa-user-graduate" },
                  { k: "Mentors", v: "100+", icon: "fas fa-user-group" },
                  { k: "Universities", v: "20+", icon: "fas fa-university" },
                ].map((s) => (
                  <div key={s.k} className="rounded-xl border border-[#c7d6ff] bg-gradient-to-br from-[#f0f4ff] to-white py-5 shadow-sm">
                    <div className="text-[#0e46a5] mb-1"><i className={`${s.icon}`}></i></div>
                    <div className="text-2xl font-bold text-[#0e46a5]">{s.v}</div>
                    <div className="text-sm font-semibold text-black mt-1">{s.k}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#0e46a5] mb-4">
              <span className="h-2 w-2 rounded-full bg-[#0e46a5]"></span>
              Our Programs
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e46a5] mb-4 leading-tight">
              Comprehensive Legal Development Programs
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Transform your legal education with our proven programs designed to accelerate your career.
            </p>
          </div>
          
          {/* Program Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Mentorship Program Card */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0e46a5]">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0e46a5] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0e46a5] mb-4">Mentorship Program</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  One-on-one guidance connecting students with seasoned legal professionals for personalized career development.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold text-blue-800">Key Outcome:</p>
                  <p className="text-blue-700">Build a professional network and gain career clarity</p>
                </div>
                <Link 
                  href="/programs" 
                  className="inline-block bg-[#0e46a5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a5bb8] transition-colors"
                >
                  Learn More →
                </Link>
              </div>
                </div>
                
            {/* Skill Development Card */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0e46a5]">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0e46a5] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">🛠️</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0e46a5] mb-4">Skill Development</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Hands-on sessions on research, writing, advocacy, and career readiness to build practical competencies.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold text-blue-800">Key Outcome:</p>
                  <p className="text-blue-700">Develop practical, career-ready legal skills</p>
                </div>
                <Link 
                  href="/programs" 
                  className="inline-block bg-[#0e46a5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a5bb8] transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Advocacy Training Card */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0e46a5]">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0e46a5] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">⚖️</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0e46a5] mb-4">Advocacy Training</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Moots, debates, and clinics to build confidence and courtroom skills for future legal practice.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold text-blue-800">Key Outcome:</p>
                  <p className="text-blue-700">Master effective public speaking and advocacy</p>
              </div>
                <Link 
                  href="/programs" 
                  className="inline-block bg-[#0e46a5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a5bb8] transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-16">
            <Link 
              href="/programs" 
              className="inline-flex items-center gap-3 bg-[#0e46a5] text-white px-8 py-4 rounded-full font-medium hover:bg-[#1a5bb8] transition-colors group"
            >
              <span>See All Programs</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-gradient-to-br from-[#0e46a5] via-[#1a5bb8] to-[#0e46a5] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_20%,_rgba(255,255,255,0.1),_transparent_60%),_radial-gradient(600px_300px_at_80%_80%,_rgba(255,215,0,0.1),_transparent_60%)]" aria-hidden="true"></div>
        
        <div className="container relative">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white mb-6">
              <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
              Our Impact
            </div>
            
            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Transforming Legal Education Across Nigeria
            </h2>
            
            {/* Subheading */}
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              See the measurable difference we're making in the lives of law students and the legal profession.
            </p>
          </div>
          
          {/* Impact Stats Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {[
              {
                number: "500+",
                label: "Students Mentored",
                description: "Law students across 20+ universities",
                icon: "fas fa-user-graduate",
                color: "from-yellow-400 to-yellow-500"
              },
              {
                number: "95%",
                label: "Success Rate",
                description: "Students achieving first-class degrees",
                icon: "fas fa-trophy",
                color: "from-green-400 to-green-500"
              },
              {
                number: "150+",
                label: "Job Placements",
                description: "Graduates in top law firms",
                icon: "fas fa-briefcase",
                color: "from-blue-400 to-blue-500"
              },
              {
                number: "20+",
                label: "Universities",
                description: "Partner institutions nationwide",
                icon: "fas fa-university",
                color: "from-purple-400 to-purple-500"
              }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/20 rounded-2xl p-8 text-center hover:bg-white/30 transition-all duration-300 border-2 border-white/40 h-full min-h-[200px]">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${stat.color} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                    <i className={`${stat.icon} text-2xl`} style={{ fontSize: '1.5rem', color: 'white', display: 'inline-block' }}></i>
                  </div>
                  
                  {/* Number with animation */}
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300" style={{ color: 'white', fontSize: '2.25rem', fontWeight: 'bold' }}>
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                  
                  {/* Description */}
                  <p className="text-white text-sm leading-relaxed">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Impact Stories Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {[
              {
                title: "Academic Excellence",
                description: "Students in our mentorship program show 40% improvement in academic performance",
                icon: "fas fa-chart-line",
                metric: "40% Improvement",
                color: "from-green-500 to-green-600"
              },
              {
                title: "Career Readiness",
                description: "85% of our graduates secure employment within 6 months of graduation",
                icon: "fas fa-rocket",
                metric: "85% Employment",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Leadership Development",
                description: "Over 200 students have taken on leadership roles in their universities",
                icon: "fas fa-crown",
                metric: "200+ Leaders",
                color: "from-yellow-500 to-yellow-600"
              }
            ].map((story, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full min-h-[300px]">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${story.color} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                    <i className={`${story.icon} text-xl`}></i>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0e46a5] mb-4 group-hover:text-[#1a5bb8] transition-colors">
                    {story.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {story.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Progress</span>
                      <span className="text-sm font-bold text-[#0e46a5]">{story.metric}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${story.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: story.title === "Academic Excellence" ? "40%" : 
                                 story.title === "Career Readiness" ? "85%" : "80%"
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Metric */}
                  <div className="text-2xl font-bold text-[#0e46a5]">
                    {story.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <p className="text-lg text-white/90 mb-6">
              Be part of our growing impact story
            </p>
            <Link 
              href="/programs" 
              className="inline-flex items-center gap-3 bg-white text-[#0e46a5] font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0e46a5] transition-all shadow-xl hover:shadow-2xl group"
            >
              Join Our Programs
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial/Impact Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900 mb-4">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              Testimonial
            </div>
            <h2 className="text-3xl font-bold text-blue-900">What Our Founder Says</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 text-6xl text-yellow-500 opacity-20">"</div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-blue-100">
                <blockquote className="relative">
                  <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium italic">
                    "The Republic of Scholars Initiative transforms potential into performance. Through our mentorship programs and career development initiatives, we've seen law students not just succeed academically, but emerge as confident legal professionals ready to make meaningful impact in Nigeria's legal landscape."
                  </p>
                  
                  <div className="mt-8 flex items-center gap-4">
                    {/* Circular portrait */}
                    <div className="relative">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                        <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                          <span className="text-2xl font-bold text-yellow-600">FR</span>
                        </div>
                      </div>
                      {/* Gold ring */}
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-30"></div>
                    </div>
                    
                    <div>
                      <div className="font-bold text-blue-900 text-lg">Fatudimu Oluwaseun Raphael</div>
                      <div className="text-blue-600 font-medium">Founder & Executive Director</div>
                      <div className="text-sm text-gray-600 mt-1">Republic of Scholars Initiative</div>
                    </div>
                  </div>
                </blockquote>
              </div>
              
              {/* Bottom quote icon */}
              <div className="absolute -bottom-4 -right-4 text-6xl text-yellow-500 opacity-20 transform rotate-180">"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#f0f4ff] via-[#e0e9ff] to-[#c7d6ff]">
        <div className="container">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e46a5] bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-[#0e46a5] mb-6">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              Success Stories
            </div>
            
            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e46a5] leading-tight mb-6">
              What Our Nigerian Beneficiaries Say
            </h2>
            
            {/* Subheading */}
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Hear from law students across Nigeria who have transformed their academic journey and career prospects through our programs.
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Aisha Mohammed",
                university: "University of Lagos",
                program: "Mentorship Program",
                quote: "The mentorship program connected me with a senior advocate who guided me through my final year. I secured a first-class degree and landed my dream job at a top law firm in Lagos.",
                image: "AM",
                rating: 5,
                impact: "First-class degree + Job at top law firm",
                beforeAfter: "2.8 GPA → 4.2 GPA"
              },
              {
                name: "Chinedu Okonkwo",
                university: "University of Nigeria, Nsukka",
                program: "Advocacy Training",
                quote: "The moot court training was incredible. I represented Nigeria at the international moot competition and won best speaker. The skills I gained here are invaluable.",
                image: "CO",
                rating: 5,
                impact: "International moot winner + Best speaker award",
                beforeAfter: "Shy speaker → Confident advocate"
              },
              {
                name: "Fatima Ibrahim",
                university: "Ahmadu Bello University",
                program: "Skill Development",
                quote: "The research and writing workshops transformed my academic performance. I went from struggling with legal writing to publishing my first paper in a law journal.",
                image: "FI",
                rating: 5,
                impact: "Published research + Academic recognition",
                beforeAfter: "Failed papers → Published author"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  {/* Quote */}
                  <div className="flex-1">
                    <div className="text-4xl text-yellow-500 mb-4 opacity-20">"</div>
                    <blockquote className="text-gray-700 leading-relaxed text-lg font-medium italic mb-6">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                  
                  {/* Impact Metrics */}
                  <div className="mb-6 space-y-3">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
                      <div className="text-sm font-semibold text-green-700 mb-1">Key Achievement</div>
                      <div className="text-lg font-bold text-green-800">{testimonial.impact}</div>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
                      <div className="text-sm font-semibold text-yellow-700 mb-1">Transformation</div>
                      <div className="text-lg font-bold text-yellow-800">{testimonial.beforeAfter}</div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star text-yellow-500 text-sm"></i>
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0e46a5] to-[#1a5bb8] flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-sm">{testimonial.image}</span>
                      </div>
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-20"></div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="font-bold text-[#0e46a5] text-lg">{testimonial.name}</div>
                      <div className="text-gray-600 font-medium">{testimonial.university}</div>
                      <div className="text-sm text-yellow-600 font-semibold">{testimonial.program}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-6">
              Ready to join these success stories?
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-[#0e46a5] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#1a5bb8] focus:outline-none focus:ring-2 focus:ring-[#0e46a5] focus:ring-offset-2 transition-all shadow-xl hover:shadow-2xl group"
            >
              Start Your Journey
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e46a5] bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0e46a5] mb-6">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              Our Journey
            </div>
            
            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e46a5] leading-tight mb-6">
              Milestones & Achievements
            </h2>
            
            {/* Subheading */}
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Key moments that have shaped our impact on legal education in Nigeria.
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0e46a5] via-yellow-500 to-[#0e46a5] rounded-full"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {[
                {
                  year: "2020",
                  title: "Foundation Established",
                  description: "Republic of Scholars Initiative founded with a vision to transform legal education",
                  icon: "fas fa-seedling",
                  color: "from-green-500 to-green-600",
                  side: "left"
                },
                {
                  year: "2021",
                  title: "First 100 Students",
                  description: "Reached our first milestone of mentoring 100 law students across 5 universities",
                  icon: "fas fa-users",
                  color: "from-blue-500 to-blue-600",
                  side: "right"
                },
                {
                  year: "2022",
                  title: "University Partnerships",
                  description: "Established partnerships with 15+ universities across Nigeria",
                  icon: "fas fa-handshake",
                  color: "from-purple-500 to-purple-600",
                  side: "left"
                },
                {
                  year: "2023",
                  title: "International Recognition",
                  description: "Our students won international moot court competitions and gained global recognition",
                  icon: "fas fa-trophy",
                  color: "from-yellow-500 to-yellow-600",
                  side: "right"
                },
                {
                  year: "2024",
                  title: "500+ Students Impacted",
                  description: "Reached 500+ students with 95% success rate and 150+ job placements",
                  icon: "fas fa-chart-line",
                  color: "from-red-500 to-red-600",
                  side: "left"
                }
              ].map((milestone, index) => (
                <div key={index} className={`relative flex items-center group ${milestone.side === 'left' ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline dot with animation */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#0e46a5] rounded-full z-10 group-hover:scale-125 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content card */}
                  <div className={`w-full max-w-md ${milestone.side === 'left' ? 'pr-16' : 'pl-16'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                      {/* Year */}
                      <div className="text-2xl font-bold text-[#0e46a5] mb-2">{milestone.year}</div>
                      
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${milestone.color} text-white shadow-lg mb-4`}>
                        <i className={`${milestone.icon} text-lg`}></i>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Recognition Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
        <div className="container">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e46a5] bg-white px-4 py-2 text-sm font-semibold text-[#0e46a5] mb-6">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              Trusted Partners
            </div>
            
            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e46a5] leading-tight mb-6">
              Trusted by Leading Institutions
            </h2>
            
            {/* Subheading */}
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We're proud to partner with prestigious universities, law firms, and organizations across Nigeria.
            </p>
          </div>
          
          {/* Partners Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {[
              {
                category: "Universities",
                partners: [
                  "University of Lagos",
                  "University of Nigeria, Nsukka", 
                  "Ahmadu Bello University",
                  "University of Ibadan",
                  "Lagos State University",
                  "University of Benin"
                ],
                icon: "fas fa-university",
                color: "from-blue-500 to-blue-600"
              },
              {
                category: "Law Firms",
                partners: [
                  "Templars Law Firm",
                  "Banwo & Ighodalo",
                  "Aluko & Oyebode",
                  "Udo Udoma & Belo-Osagie",
                  "G. Elias & Co",
                  "Olaniwun Ajayi LP"
                ],
                icon: "fas fa-gavel",
                color: "from-green-500 to-green-600"
              },
              {
                category: "Organizations",
                partners: [
                  "Nigerian Bar Association",
                  "International Law Students Association",
                  "Young Lawyers Forum",
                  "Legal Aid Council",
                  "Nigerian Law School",
                  "African Legal Network"
                ],
                icon: "fas fa-handshake",
                color: "from-purple-500 to-purple-600"
              }
            ].map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                    <i className={`${category.icon} text-2xl`}></i>
                  </div>
                  
                  {/* Category Title */}
                  <h3 className="text-2xl font-bold text-[#0e46a5] mb-6 group-hover:text-[#1a5bb8] transition-colors">
                    {category.category}
                  </h3>
                  
                  {/* Partners List */}
                  <div className="space-y-3">
                    {category.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="flex items-center gap-3 group/partner">
                        <div className="w-2 h-2 rounded-full bg-yellow-500 group-hover/partner:scale-125 transition-transform"></div>
                        <span className="text-gray-700 font-medium group-hover/partner:text-[#0e46a5] transition-colors">
                          {partner}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Recognition & Awards */}
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#0e46a5] mb-4">Recognition & Awards</h3>
              <p className="text-lg text-gray-600">Our commitment to excellence has been recognized by leading institutions</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  award: "Best Legal Education Initiative 2023",
                  organization: "Nigerian Bar Association",
                  icon: "fas fa-trophy",
                  color: "from-yellow-400 to-yellow-500"
                },
                {
                  award: "Excellence in Mentorship",
                  organization: "Legal Aid Council",
                  icon: "fas fa-medal",
                  color: "from-blue-400 to-blue-500"
                },
                {
                  award: "Outstanding Student Support",
                  organization: "Ministry of Education",
                  icon: "fas fa-star",
                  color: "from-green-400 to-green-500"
                },
                {
                  award: "Innovation in Legal Training",
                  organization: "African Legal Network",
                  icon: "fas fa-lightbulb",
                  color: "from-purple-400 to-purple-500"
                }
              ].map((award, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${award.color} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                    <i className={`${award.icon} text-2xl`}></i>
                  </div>
                  <h4 className="font-bold text-[#0e46a5] mb-2 text-lg">{award.award}</h4>
                  <p className="text-gray-600 text-sm">{award.organization}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-6">
              Join our network of partners and make a difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/partners" 
                className="inline-flex items-center gap-3 bg-[#0e46a5] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#1a5bb8] focus:outline-none focus:ring-2 focus:ring-[#0e46a5] focus:ring-offset-2 transition-all shadow-xl hover:shadow-2xl group"
              >
                Become a Partner
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 border-2 border-[#0e46a5] text-[#0e46a5] font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#0e46a5] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0e46a5] focus:ring-offset-2 transition-all group"
              >
                Learn More
                <i className="fas fa-info-circle group-hover:scale-110 transition-transform"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_20%,_rgba(255,255,255,0.1),_transparent_60%),_radial-gradient(600px_300px_at_80%_80%,_rgba(255,215,0,0.1),_transparent_60%)]" aria-hidden="true"></div>
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e46a5] bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-[#0e46a5] mb-6">
              <span className="h-2 w-2 rounded-full bg-[#0e46a5]"></span>
              Ready to get started?
            </div>
            
            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e46a5] leading-tight mb-6">
              Join the Republic of Scholars Initiative Today
            </h2>
            
            {/* Subheading */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
              Take the first step towards academic and career excellence. Connect with mentors, access resources, and build your legal career with confidence.
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center items-center mb-12">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-[#0e46a5] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#1a5bb8] focus:outline-none focus:ring-2 focus:ring-[#0e46a5] focus:ring-offset-2 transition-all shadow-xl hover:shadow-2xl group min-w-[200px] justify-center"
              >
                Get Started
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform"><path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}