import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, createStyles, makeStyles, Toolbar } from "@material-ui/core";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles(createStyles({
    title: { 
        marginRight: 16
    },
    homeIcon: {
        marginRight: 8,
        color: "white"
    },
    link: {
        color: "white",
        padding: "0.5em",
        textDecoration: "none",
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)"
        }
    },
    navBar: {
        fontSize: 16,
        overflowX: "auto",
    },
    linkGroup: {
        "& a": {
            color: "white",
            padding: 8,
            borderRadius: 99,
            marginRight: 8
        },
        "& a:hover": {
            backgroundColor: "rgba(255,255,255,0.15)"
        }
    },
    externalLinks: {
        marginLeft: "auto"
    }
}))

const siteLinks = [
    { description: "Courses", link: "/courses" },
    { description: "Personal Projects", link: "/projects" }
];

const externalLinks = [
    { description: "Code", icon: faCode, link: "https://github.com/RyanKadri" }
]

export function RootNav() {
    const classes = useStyles()
    return (
        <AppBar position="static" className={ classes.navBar }>
            <Toolbar component="nav">
                <div className={ classes.linkGroup }>
                    { siteLinks.map(link => (
                        <Link href={link.link} key={link.link} passHref>
                            <a className={classes.link}>
                                { link.description }
                            </a>
                        </Link>
                    ))}
                </div>
                <div className={ `${classes.linkGroup} ${classes.externalLinks}` }>
                    { externalLinks.map(link => (
                        <a href={ link.link } aria-label={link.description} target="_blank" key={link.link} rel="noopener">
                            <FontAwesomeIcon icon={ link.icon } />
                        </a>
                    ))}
                </div>
            </Toolbar>
        </AppBar>
    )
}
