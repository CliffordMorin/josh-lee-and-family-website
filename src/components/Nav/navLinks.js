import { FaHome, FaInfoCircle, FaVideo } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { TbVinyl } from "react-icons/tb";
import { BsFillCameraFill, BsCalendarEventFill } from "react-icons/bs";
import { AiFillPicture, AiFillMail } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { GrDocumentDownload } from "react-icons/gr";
import { v4 as uuidv4 } from "uuid";

const navLinksDesktop = [
  { page: "Home", link: "/", id: uuidv4(), icon: FaHome },
  {
    page: "About",
    id: uuidv4(),
    icon: FaInfoCircle,
    children: [
      { page: "BIO", link: "/bio", id: uuidv4(), icon: TfiWrite },
      {
        page: "DISCOGRAPHY",
        link: "/discography",
        id: uuidv4(),
        icon: TbVinyl,
      },
      {
        page: "THE FAMILY",
        link: "https://drive.google.com/file/d/11-YSXUvYmNAdqN3qBWu6vbRvMazxmzcn/view",
        id: uuidv4(),
        icon: HiUserGroup,
      },
    ],
  },
  {
    page: "Media",
    id: uuidv4(),
    icon: BsFillCameraFill,
    children: [
      { page: "VIDEOS", link: "/videos", id: uuidv4(), icon: FaVideo },
      {
        page: "PICTURES",
        link: "/pictures",
        id: uuidv4(),
        icon: AiFillPicture,
      },
      {
        page: "EPK",
        link: "https://acrobat.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Aaa557c3a-3b8c-3b52-b294-f9c70aaa92d1&viewer%21megaVerb=group-discover",
        id: uuidv4(),
        icon: GrDocumentDownload,
      },
    ],
  },
  { page: "SHOWS", link: "/calendar", id: uuidv4(), icon: BsCalendarEventFill },
  { page: "CONTACT", link: "/contact", id: uuidv4(), icon: AiFillMail },
];

export default navLinksDesktop;
