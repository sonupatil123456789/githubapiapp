import React from "react";
import useFetch from "./CoustomFetch";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const Card2 = () => {
  const [data, loading] = useFetch("https://api.github.com/users/wycats/repos");

  let navigate = useNavigate()



  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        data &&
        data.map((mydata, index) => {
          const navigateDetails = ()=> {
            navigate("/Allpage/details", {state :{
              name : `${mydata.full_name}` ,
              description : `${mydata.description == null ? "this is dummy discription discription is not presentin some field so for empty discription i replaces the text with this  " :  mydata.description}` ,
              visibility : `${mydata.visibility}` ,
              followers : `${mydata.size}` ,
              stargazers_count : `${mydata.stargazers_count}` ,
              watchers_count : `${mydata.watchers_count}` ,
              avatar : `${mydata.owner.avatar_url}` ,
              id : `${mydata.id}` ,
              language : `${mydata.language == null ? "Dart":mydata.language}` ,
              html_url : `${mydata.owner.html_url}` ,
              
            } } );
           }

          return (
            //  <Link to="/Allpage/details" >
             <div className="py-8 flex flex-wrap md:flex-nowrap" style={{courser:"pointer"}} key={index} onClick={
              navigateDetails
             }>
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  {mydata.language == null ? "Dart":mydata.language}
                </span>
                <span className="mt-1 text-gray-500 text-sm">{mydata.id}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  {mydata.full_name}
                </h2>
                <p className="leading-relaxed">
               { mydata.description == null ? "this is dummy discription discription is not presentin some field so for empty discription i replaces the text with this  " :  mydata.description}
                </p>
                <a
                  href="/"
                  className="text-indigo-500 inline-flex items-center mt-4"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          //  </Link>
          );
        })
      )}
    </>
  );
};

export default Card2;
