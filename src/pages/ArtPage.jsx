import { useLocation } from "react-router";
import arts from "../components/arts";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ArtPage = () => {
    const location = useLocation();
    const art = new URLSearchParams(location.search);
    const result = art.get("query") || "";
    const [link,setLink] = useState("");
    useEffect(() => {
        const findArt = () => {
          const matchingArt = arts.find((art) => art.id === result);
          if (matchingArt) {
            setLink(matchingArt.photo);
          }
        };
        findArt();
      }, [result]);
  return (
    <div className='art-page'>
        <Link to={"/"} className="art-page-closer">
            <svg width="448" height="448" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M224 0C100.48 0 0 100.48 0 224C0 347.52 100.48 448 224 448C347.52 448 448 347.52 448 224C448 100.48 347.52 0 224 0ZM348.448 325.824L325.824 348.448L224 246.624L122.176 348.448L99.552 325.824L201.376 224L99.552 122.176L122.176 99.552L224 201.376L325.824 99.552L348.448 122.176L246.624 224L348.448 325.824Z" fill="black"/>
            </svg>
        </Link>
        <img src={link} alt="" />
    </div>
  )
}

export default ArtPage