import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, createStyles, IconButton, makeStyles } from "@material-ui/core";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles(theme => createStyles({
    controlsContainer: {
        fontSize: 16,
        display: "flex",
        gap: 8,
        padding: 4,
        opacity: 0.1,
        transition: "opacity 100ms ease-in-out",
        backgroundColor: "#111",
        "&:hover": {
            opacity: 0.9
        }
    },
    button: {
        fontSize: 20,
        [theme.breakpoints.down("sm")]: {
            fontSize: 14
        }
    }
}));

interface Props {
    className?: string;
    courseUrl: string;
    previousSlide: string | null;
    nextSlide: string | null;
}

export function SlideControls({ className, previousSlide, nextSlide, courseUrl }: Props) {
    const classes = useStyles();
    return (
        <Card className={ `${className} ${ classes.controlsContainer }` }>
            <Link href={ courseUrl } passHref>
                <Button className={ classes.button } size="small">
                    Back to Class
                </Button>
            </Link>
            { !!previousSlide 
                ? (
                    <Link href={ previousSlide } passHref replace shallow aria-label="Next Slide">
                        <IconButton className={ classes.button }>
                            <FontAwesomeIcon icon={ faChevronLeft } />
                        </IconButton>
                    </Link>
                ) : (
                    <IconButton className={ classes.button } disabled aria-label="Next Slide">
                        <FontAwesomeIcon icon={ faChevronLeft } />
                    </IconButton>
            )}
            { !!nextSlide
                ? (
                    <Link href={ nextSlide } passHref replace shallow>
                        <IconButton className={ classes.button } aria-label="Previous Slide">
                            <FontAwesomeIcon icon={ faChevronRight } />
                        </IconButton>
                    </Link>
                ) : (
                    <IconButton className={ classes.button } disabled aria-label="Previous Slide">
                        <FontAwesomeIcon icon={ faChevronRight } />
                    </IconButton>
                )}
        </Card>
    )
}