import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, createStyles, IconButton, makeStyles } from "@material-ui/core";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles(_ => createStyles({
    controlsContainer: {
        fontSize: 16
    },
    button: {
        fontSize: 20,
        "&:first-of-type": {
            marginRight: 8
        },
        "&:last-of-type": {
            marginLeft: 8
        }
    }
}));

interface Props {
    className?: string;
    previousSlide: string | null;
    nextSlide: string | null;
}

export function SlideControls({ className, previousSlide, nextSlide }: Props) {
    const classes = useStyles();
    return (
        <Card className={ `${className} ${ classes.controlsContainer }` }>
            <Link href={ previousSlide ?? "" } passHref replace shallow>
                <IconButton className={ classes.button } disabled={ previousSlide === null }>
                    <FontAwesomeIcon icon={ faChevronLeft } />
                </IconButton>
            </Link>
            <Link href={ nextSlide ?? "" } passHref replace shallow>
                <IconButton className={ classes.button } disabled={ nextSlide === null }>
                    <FontAwesomeIcon icon={ faChevronRight } />
                </IconButton>
            </Link>
        </Card>
    )
}