import DOCTORIMG from "@/assets/doctor.png";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const doctorInfo = {
  name: "Dr. Sunil Kamble",
  specialty: "BMMS",
  description:
    "A distinguished medical professional with over 15 years of experience in cardiology, committed to delivering exceptional patient care through evidence-based practices.",
  education: [
    "M.D. from Johns Hopkins University",
    "Cardiology Fellowship at Mayo Clinic",
    "Board Certified in Internal Medicine",
  ],
  expertise: [
    "Preventive Cardiology",
    "Heart Disease Management",
    "Cardiac Rehabilitation",
    "Interventional Procedures",
  ],
  achievements: [
    { title: "Patients Treated", value: "10,000+" },
    { title: "Years Experience", value: "15+" },
    { title: "Success Rate", value: "99%" },
    { title: "Awards Won", value: "25+" },
  ],
};

const AboutDoctor = () => {
  return (
    <section id="about" className="py-16 md:py-32 relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">
            Meet Our Expert
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mt-4 mb-3">
            Experienced Healthcare Professional
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Dedicated to providing exceptional care with a patient-centered
            approach, combining years of expertise with innovative medical
            solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            {/* Main circular image container */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-100 animate-[spin_20s_linear_infinite] animate-spin-slow spin-container" />
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-blue-200" />

              {/* Main image */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-8 border-white shadow-lg">
                <img
                  src={DOCTORIMG}
                  alt={doctorInfo.name}
                  className="w-full h-full object-cover scale-125"
                />
              </div>

              {/* Orbiting achievement cards */}
              <OrbitingCircles
                radius={Math.min(280, 0.55 * window.innerWidth)}
                path={false}
                className="absolute inset-0 w-full h-full"
              >
                {doctorInfo.achievements.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-2 sm:p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
                  >
                    <p className="text-blue-600 text-xs sm:text-sm font-medium">
                      {stat.title}
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-slate-900">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </OrbitingCircles>

              {/* Decorative blobs */}
              <div className="absolute -z-10 w-20 sm:w-32 h-20 sm:h-32 -top-4 -left-4 bg-blue-100 rounded-full opacity-50" />
              <div className="absolute -z-10 w-16 sm:w-24 h-16 sm:h-24 -bottom-2 -right-2 bg-purple-100 rounded-full opacity-50" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
                Senior Specialist
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                {doctorInfo.name}
              </h3>
              <p className="text-base sm:text-xl text-blue-600 font-medium mb-4">
                {doctorInfo.specialty}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {doctorInfo.description}
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-2 gap-4">
              {doctorInfo.expertise.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white/60 p-2 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500" />
                    </div>
                    <span className="text-slate-700 font-medium text-xs sm:text-sm">{item}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Section */}
            <div className="bg-white/50 rounded-2xl p-4 sm:p-6 shadow-sm">
              <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">
                Education & Certification
              </h4>
<ul className="list-disc space-y-2 ml-5">
  {doctorInfo.expertise.map((item, index) => (
    <li key={index} className="flex items-center gap-2">
      <svg
        className="w-4 h-4 text-blue-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      {/* Updated font size and color for consistency */}
      <span className="text-base font-medium text-slate-900">{item}</span>
    </li>
  ))}
</ul>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/2 -left-12 w-64 sm:w-96 h-64 sm:h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20" />
    </section>
  );
};

export default AboutDoctor;