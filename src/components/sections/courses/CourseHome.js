"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Star, ArrowRight, Sparkles, Clock, User, Tag } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FALLBACK_COURSES = [
  {
    course_id: "c1",
    course_name: "Full-Stack Web Development Mastery (React & Node.js)",
    category: "Development",
    instructor: "Sarah Jenkins",
    description: "Build production-grade web applications with modern frontend frameworks and scalable backend APIs.",
    price: 49,
    oldPrice: 99,
    rating: 4.9,
    lessons: 48,
    duration: "12 hrs",
    course_image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80",
  },
  {
    course_id: "c2",
    course_name: "AI & Machine Learning Engineering Blueprint",
    category: "AI & Data",
    instructor: "Dr. Alex Rivera",
    description: "Master Python, TensorFlow, and Large Language Models with real-world industry projects.",
    price: 69,
    oldPrice: 129,
    rating: 4.95,
    lessons: 64,
    duration: "18 hrs",
    course_image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop&q=80",
  },
  {
    course_id: "c3",
    course_name: "UI/UX Product Design & Figma System Masterclass",
    category: "UI & UX Design",
    instructor: "Elena Rostova",
    description: "Design stunning user experiences, interactive prototypes, and scalable design systems.",
    price: 39,
    oldPrice: 79,
    rating: 4.85,
    lessons: 36,
    duration: "10 hrs",
    course_image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&auto=format&fit=crop&q=80",
  },
  {
    course_id: "c4",
    course_name: "Digital Marketing & Growth Hacking Strategies",
    category: "Business",
    instructor: "Marcus Vance",
    description: "Drive explosive customer acquisition, SEO positioning, and viral social media campaigns.",
    price: 29,
    oldPrice: 59,
    rating: 4.8,
    lessons: 30,
    duration: "8 hrs",
    course_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
  },
];

const CATEGORIES = ["All Courses", "Development", "AI & Data", "UI & UX Design", "Business"];

const CourseHome = () => {
  const [courses, setCourses] = useState(FALLBACK_COURSES);
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [topicsCount, setTopicsCount] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("https://readgro-backend.onrender.com/getallcourses")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.courses) && data.courses.length > 0) {
          setCourses(data.courses);
          data.courses.forEach((course) => {
            fetchTopicsCount(course.course_id);
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("Using static course catalog fallback:", error);
        setLoading(false);
      });
  }, []);

  const fetchTopicsCount = (courseId) => {
    fetch(`https://readgro-backend.onrender.com/gettopics/${courseId}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.topics)) {
          setTopicsCount((prevCounts) => ({
            ...prevCounts,
            [courseId]: data.topics.length,
          }));
        }
      })
      .catch(() => {});
  };

  const filteredCourses = activeCategory === "All Courses"
    ? courses
    : courses.filter((c) => (c.category || "").toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Pills Header */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 scale-105"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="pb-14 px-2"
      >
        {filteredCourses.map((course, idx) => {
          const courseId = course.course_id || course.id || idx;
          const imageSrc = course.course_image || FALLBACK_COURSES[idx % FALLBACK_COURSES.length].course_image;
          const lessons = topicsCount[courseId] || course.lessons || 24;

          return (
            <SwiperSlide key={courseId}>
              <div
                onClick={() => router.push(`/courses/${courseId}`)}
                className="group rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800 overflow-hidden cursor-pointer h-full flex flex-col hover-lift transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                {/* Course Image & Badges */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={course.course_name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-xs font-bold text-indigo-600 dark:text-indigo-400 shadow-md">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{course.category || "Certified"}</span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/90 text-white text-xs font-extrabold backdrop-blur-md shadow-md">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>{course.rating || "4.9"}</span>
                  </div>
                </div>

                {/* Course Body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {course.course_name}
                    </h3>
                    
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                      {course.description || "Master essential tools and real-world projects with step-by-step guided instructions."}
                    </p>
                  </div>

                  {/* Meta Stats Row */}
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 py-3 border-t border-b border-slate-100 dark:border-slate-800 mb-4 font-medium">
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-indigo-500" />
                        <span>{lessons} Lessons</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-emerald-500" />
                        <span>{course.duration || "Self Paced"}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4 text-purple-500" />
                        <span>{course.instructor ? course.instructor.split(" ")[0] : "Expert"}</span>
                      </div>
                    </div>

                    {/* Price & CTA Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                          ${course.price || 49}
                        </span>
                        {course.oldPrice && (
                          <span className="text-xs text-slate-400 line-through font-medium">
                            ${course.oldPrice}
                          </span>
                        )}
                      </div>

                      <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 font-bold text-xs group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <span>Enroll Now</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CourseHome;
