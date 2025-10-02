export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e9ff] to-[#c7d6ff]">
      <div className="container mx-auto px-4 py-5">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-black mb-3">Let&apos;s Connect</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to join our community of scholars? We&apos;re here to help you take the next step in your academic journey.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form - Left Side */}
            <div className="order-2 lg:order-1">
              <div className="bg-transparent rounded-xl p-4 border border-white/30">
                <h2 className="text-lg font-bold text-gray-900 mb-3">Send us a message</h2>
                <p className="text-gray-600 mb-4 text-sm">We typically respond within 24 hours.</p>
                
                <form className="space-y-2">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Name</label>
                    <input 
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-[--color-brand] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm" 
                      placeholder="Your full name" 
                      type="text"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
                    <input 
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-[--color-brand] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm" 
                      placeholder="your@email.com" 
                      type="email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Message</label>
                    <textarea 
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-[--color-brand] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none text-sm" 
                      rows={3} 
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[--color-brand] to-[--color-brand-600] text-black font-semibold py-2 px-4 rounded-lg hover:from-[--color-brand-600] hover:to-[--color-brand-700] transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg text-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Cards - Right Side */}
            <div className="order-1 lg:order-2 space-y-4">
        <div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">Get in touch</h2>
                <p className="text-gray-600 text-sm">Choose your preferred way to connect with us.</p>
              </div>
              
              {/* Email Card */}
              <div className="group bg-transparent rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-[--color-brand-200]">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[--color-brand-100] to-[--color-brand-200] p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600 mb-2 text-xs">Send us an email anytime and we&apos;ll get back to you within 24 hours.</p>
                    <a 
                      href="mailto:info@republicofscholars.org" 
                      className="text-black hover:text-gray-700 font-semibold transition-colors duration-200 text-sm"
                    >
                      info@republicofscholars.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group bg-transparent rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-[--color-brand-200]">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[--color-brand-100] to-[--color-brand-200] p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600 mb-2 text-xs">Speak directly with our team during business hours.</p>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-500">Monday - Friday, 9AM - 5PM WAT</p>
                      <a 
                        href="tel:+2341234567890" 
                        className="text-black hover:text-gray-700 font-semibold transition-colors duration-200 text-sm"
                      >
                        +234 123 456 7890
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links Card */}
              <div className="group bg-transparent rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-[--color-brand-200]">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[--color-brand-100] to-[--color-brand-200] p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">Follow Us</h3>
                    <p className="text-gray-600 mb-3 text-xs">Stay connected and get the latest updates from our community.</p>
                    <div className="flex space-x-3">
                      <a 
                        href="https://twitter.com/republicofscholars" 
                        className="text-black hover:text-gray-800 transition-all duration-200 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://linkedin.com/company/republicofscholars" 
                        className="text-black hover:text-gray-800 transition-all duration-200 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://facebook.com/republicofscholars" 
                        className="text-black hover:text-gray-800 transition-all duration-200 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://instagram.com/republicofscholars" 
                        className="text-black hover:text-gray-800 transition-all duration-200 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


