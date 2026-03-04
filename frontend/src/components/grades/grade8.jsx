import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

const Grade8 = () => {
  const navigate = useNavigate();

  const years = useSelector((state) =>
    state.year.years.filter((y) => y.grade === "grade8")
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 tracking-tight">
          Grade 8 Past Exams
        </h1>
        <p className="text-white/70 text-center max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
          Prepare smarter for your Grade 8 exams by practicing past papers.
          Understand question formats, manage your time better, and boost your confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {years.map((yea, index) => (
            <div
              key={index}
              className="bg-white/5 border-l-4 border-indigo-600 rounded-xl p-4 cursor-pointer
                         transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-md
                         flex flex-col justify-between"
            >
              {/* Icon + Year row */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-full flex items-center justify-center text-white text-lg">
                  <FaBookOpen />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  {yea.year}
                </h2>
              </div>

              {/* Description */}
              <p className="text-white/80 text-sm line-clamp-2 mb-2">
                {yea.desc}
              </p>

              {/* Button */}
              <button
                className="mt-auto px-4 py-1 bg-indigo-600 hover:bg-indigo-700
                           text-white font-semibold rounded-full shadow-sm transition-all duration-300"
                onClick={() =>
                  navigate("/grade8/grade8courses", {
                    state: { year: yea.year },
                  })
                }
              >
                Explore →
              </button>
            </div>
          ))}

          {years.length === 0 && (
            <p className="text-white text-center col-span-full">
              No years added for Grade 8 yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Grade8;
