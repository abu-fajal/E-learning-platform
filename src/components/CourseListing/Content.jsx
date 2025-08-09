import React from "react";

const courses = [
  {
    title: "Introduction to Data Science",
    instructor: "Dr. Emily Carter",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5kIijR9P4BiXexJJGurLVNcHefroGZyHG4aDQQlmcx04nw7gnj_oTLxZh2EPwvGNtePLwCgjIOrgKaOsCJrmY6zD1ZOK7iwJOTdfwZw4fjUDKOCt1bibUNG1U8DE8rchsHs1rh7ZHvJ6lGwWmkLlp4DyF3-MjHHklDZ4Y1Ta6oR3_aaNaN-r8RE3F-Iux6TNFNw4H3ISRRnAbH_bH9Lf_4PIDADD0DCl_2mLuLHx8ZGwr40QX_S022sn_CltJ_Wl2-kJursqv6dI"
  },
  {
    title: "Advanced Machine Learning",
    instructor: "Prof. David Lee",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe-UNZOOYHB3hFqFrt3M5KocIPKSW6tiZEWrnUBSy9wH7GAOVL_bRp_jdCkatGia2t26YBvvOFFVmyZjyl_MvaRMyuEWPUh2tF-N_pIslUtqFIMDl03dazWCmgtS3YamRTBowNEZIotxqbh7qI966YZCUe_o7bFEOG4ZOHRxQPK0Bmklci9mzF7oe7jUvUU1XJxDOglKzms-xQYDccyuAym5yg9lyXEjFX8CH28PqjIrU9ylLOk34SMtGFce_IXnbPiCfr07-PJX0"
  }
  // Add other courses similarly...
];

const Content = () => {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Explore Courses</p>
          <p className="text-[#60748a] text-sm font-normal leading-normal">
            Browse our extensive library of courses to find the perfect fit for your learning journey.
          </p>
        </div>
      </div>
      <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div className="text-[#60748a] flex border-none bg-[#f0f2f5] items-center justify-center pl-4 rounded-l-xl">
              <SearchIcon />
            </div>
            <input
              placeholder="Search for courses"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] h-full placeholder:text-[#60748a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
            />
          </div>
        </label>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {courses.map((course, idx) => (
          <div key={idx} className="flex flex-col gap-3 pb-3">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" style={{ backgroundImage: `url(${course.image})` }}></div>
            <div>
              <p className="text-[#111418] text-base font-medium leading-normal">{course.title}</p>
              <p className="text-[#60748a] text-sm font-normal leading-normal">{course.instructor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0..." />
  </svg>
);

export default Content;
