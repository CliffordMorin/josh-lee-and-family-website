import { FaHome, FaInfoCircle, FaVideo } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { TbVinyl } from "react-icons/tb";
import { BsFillCameraFill, BsCalendarEventFill } from "react-icons/bs";
import { AiFillPicture, AiFillMail } from "react-icons/ai";
import { GrDocumentDownload } from "react-icons/gr";

const navLinksDesktop = [
  { page: "Home", link: "/", id: 0, icon: FaHome },
  {
    page: "About",
    id: 1,
    icon: FaInfoCircle,
    children: [
      { page: "BIO", link: "/bio", id: 2, icon: TfiWrite },
      { page: "DISCOGRAPHY", link: "/discography", id: 3, icon: TbVinyl },
    ],
  },
  {
    page: "Media",
    id: 4,
    icon: BsFillCameraFill,
    children: [
      { page: "VIDEOS", link: "/videos", id: 5, icon: FaVideo },
      { page: "PICTURES", link: "/pictures", id: 6, icon: AiFillPicture },
      {
        page: "EPK",
        link: "https://acrobat.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Aaa557c3a-3b8c-3b52-b294-f9c70aaa92d1&viewer%21megaVerb=group-discover",
        id: 7,
        icon: GrDocumentDownload,
      },
    ],
  },
  { page: "SHOWS", link: "/calendar", id: 8, icon: BsCalendarEventFill },
  { page: "CONTACT", link: "/contact", id: 9, icon: AiFillMail },
];

export default navLinksDesktop;
