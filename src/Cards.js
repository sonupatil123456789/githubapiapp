import React from "react";
import useFetch from "./CoustomFetch";
import Loading from "./Loading";

const Cards = () => {
  const [githubuser, loading] = useFetch(
    "https://api.github.com/users?page=2&per_page=12"
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        githubuser &&
        githubuser.map((githubuser, index) => {
          return (
              <div className="w-full p-2 lg:w-1/3 md:w-1/2 mt-5 " key={index}>
                {/* <Link to="" >  */}
              <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
                <img
                  alt="team"
                  className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full"
                  src={githubuser.avatar_url}
                />
                <div className="flex-grow">
                  <h2 className="font-medium text-gray-900 title-font">
                    {githubuser.login}
                  </h2>
                  <p className="text-gray-500">{}</p>
                </div>
                <a href={githubuser.html_url}>
                  <button className="inline-flex items-center px-3 py-1 mt-4 text-sm bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0">
                    Button
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </a>
              </div>
              {/* </Link> */}
            </div>
          );
        })
      )}
    </>
  );
};

export default Cards;
