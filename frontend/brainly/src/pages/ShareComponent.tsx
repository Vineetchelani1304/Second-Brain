import axios from "axios";
import { useEffect, useState } from "react";

interface CardProps {
  title: string;
  type: "Youtube" | "Twitter";
  link: string;
}

const ShareCard = (props: CardProps) => {
  useEffect(() => {
    if (props.type === "Twitter") {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script); // Cleanup
      };
    }
  }, [props.type]);

  return (
    <div className="max-w-[300px] hover:scale-105 transition-all duration-300 w-full p-4 text-slate-200 bg-black rounded-2xl shadow-md border border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-xl">{props.title}</span>
      </div>

      <div className="flex justify-center items-center">
        {props.type === "Youtube" && (
          <iframe
            className="w-full h-full rounded-md"
            src={props.link.replace("watch", "embed")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {props.type === "Twitter" && (
          <blockquote className="twitter-tweet w-full">
            <a href={props.link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};

const ShareComponent = () => {
  const [shareContent, setShareContent] = useState([]);
  const link = localStorage.getItem("link");

  useEffect(() => {
    const fetchShareContent = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/content${link}`);
        // console.log("Fetched content:", response);
        setShareContent(response.data.content); // Assuming data.data is an array
      } catch (error) {
        console.error("Error fetching shared content:", error);
      }
    };

    fetchShareContent();
  }, []); // Run when `link` or `token` changes

  return (
    <div className="bg-black p-8 h-screen">
      <div className="flex flex-wrap justify-center gap-4">
        {shareContent.length > 0 ? (
          shareContent.map((item: any) => (
            <ShareCard
              title={item.title}
              link={item.link}
              type={item.type}
            />
          ))
        ) : (
          <p className="text-white">No shared content available.</p>
        )}
      </div>
    </div>
  );
};

export default ShareComponent;
