import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export const contact_details = [
  {
    icon: <PhoneInTalkIcon color="primary" />,
    primary: "+91 8272649102",
    secondary: "Phone line",
  },
  {
    icon: <MailIcon color="primary" />,
    primary: "info@domain.com",
    secondary: "Email address",
  },
  {
    icon: <LocationOnOutlinedIcon color="primary" />,
    primary: "20, chappar wala pull, USA",
    secondary: "Visit us",
  },
];

export const footerLinks = [
  "Our Projects",
  "About us",
  "New Campaign",
  "Upcoming Events",
  "Volunteers",
];

export const icons = [
  <FacebookOutlinedIcon sx={{ color: "#a9a9a9" }} />,
  <TwitterIcon sx={{ color: "#a9a9a9" }} />,
  <InstagramIcon sx={{ color: "#a9a9a9" }} />,
];
