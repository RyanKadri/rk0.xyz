import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Toolbar, styled } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import { UserContext, UserSettings } from "../common/admin";

const NavBar = styled(AppBar)(({ theme }) => ({
  fontSize: 16,
  overflowX: "auto",
  zIndex: theme.zIndex.drawer + 500,

  "& .title": {
    marginRight: 16,
  },
  "& .homeIcon": {
    marginRight: 8,
    color: "white",
  },
  "& .link": {
    color: "white",
    padding: "0.5em",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.1)",
    },
  },
  "& .linkGroup": {
    "& a": {
      color: "white",
      padding: 8,
      borderRadius: 99,
      marginRight: 8,
    },
    "& a:hover": {
      backgroundColor: "rgba(255,255,255,0.15)",
    },
  },
  "& .externalLinks": {
    marginLeft: "auto",
  },
}));

const siteLinks = [
  { description: "Courses", link: "/courses" },
  { description: "Personal Projects", link: "/projects" },
  {
    description: "Instructor",
    link: "/instructor",
    shouldShow: (userSettings: UserSettings) => userSettings.isProfessor,
  },
];

const externalLinks = [{ description: "My GitHub", icon: faCode, link: "https://github.com/RyanKadri" }];

export function RootNav() {
  const userSettings = useContext(UserContext);

  return (
    <NavBar position="static">
      <Toolbar component="nav">
        <div className={"linkGroup"}>
          {siteLinks
            .filter(link => !link.shouldShow || link.shouldShow(userSettings))
            .map(link => (
              <Link href={link.link} key={link.link} className={"link"}>
                {link.description}
              </Link>
            ))}
        </div>
        <div className={`${"linkGroup"} ${"externalLinks"}`}>
          {externalLinks.map(link => (
            <a href={link.link} aria-label={link.description} target="_blank" key={link.link} rel="noopener">
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </Toolbar>
    </NavBar>
  );
}
