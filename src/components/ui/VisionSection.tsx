import React from 'react'

const VisionSection = () => {
  return (
    <div className="p-12 bg-gradient-to-br from-slate-50 to-blue-50 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 gap-6">
  {/* Left side heading - spans vertically */}
  <div className="space-y-4">
    <span className="text-blue-600 font-medium">Our Vision</span>
    <h2 className="text-4xl font-semibold text-slate-900">
      Finding health solutions<br />
      with top Experts
    </h2>
    <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm">
      About Me
    </button>
  </div>

  {/* Right side first feature */}
  <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
    <div className="flex gap-3 items-start">
      <div className="p-1 bg-blue-100 rounded-full">
        <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h3 className="font-medium text-slate-900 mb-1">Commitment to Quality Healthcare</h3>
        <p className="text-slate-600 text-sm">We aim to provide exceptional general healthcare with a focus on precision, care, and patient satisfaction.</p>
      </div>
    </div>
  </div>

  {/* Bottom row features */}
  <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
    <div className="flex gap-3 items-start">
      <div className="p-1 bg-blue-100 rounded-full">
        <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h3 className="font-medium text-slate-900 mb-1">Accessible Wellness for All</h3>
        <p className="text-slate-600 text-sm">Our goal is to ensure that quality healthcare is easily accessible to everyone, regardless of background or location.</p>
      </div>
    </div>
  </div>

  <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
    <div className="flex gap-3 items-start">
      <div className="p-1 bg-blue-100 rounded-full">
        <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h3 className="font-medium text-slate-900 mb-1">Innovation in Patient Care</h3>
        <p className="text-slate-600 text-sm">Leveraging cutting-edge technology and research to deliver progressive healthcare solutions that evolve with your needs.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default VisionSection