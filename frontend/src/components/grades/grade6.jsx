import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Grade6 = () => {
  const navigate = useNavigate();

  // Filter years for Grade 6
  const years = useSelector((state) =>
    state.year.years.filter((y) => y.grade === "grade6")
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 tracking-wide">
          Grade 6 Past Exams
        </h1>
        <p className="text-white/80 text-center max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
            Start your exam journey with confidence.
            Explore Grade 6 past papers to practice, learn, and succeed with ease.
          </p>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {years.map((yea, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-xl border border-white/30
                         rounded-2xl p-8 text-center cursor-pointer
                         transform transition-all duration-300
                         hover:scale-105 hover:bg-white/30
                         hover:shadow-2xl hover:ring-2 hover:ring-white/50"
            >
              <h2 className="text-4xl font-bold text-white mb-3">
                {yea.year}
              </h2>

              <p className="text-white/90 text-sm md:text-base mb-2">
                {yea.desc}
              </p>

              <button
                className="mt-6 px-6 py-2 bg-white text-indigo-600
             rounded-full font-semibold transition-all duration-300
             hover:bg-indigo-600 hover:text-white"
                onClick={() =>
                  navigate("/grade6/grade6courses", {
                    state: { year: yea.year },
                  })
                }
              >
               Explore Exams →
              </button>
            </div>
          ))}

          {years.length === 0 && (
            <p className="text-white text-center col-span-full">
              No years added for Grade 6 yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Grade6;
