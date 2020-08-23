import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, createStyles, IconButton, makeStyles } from "@material-ui/core";
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
    onPreviousSlide(): void;
    onNextSlide(): void;
}

export function SlideControls({ className, onPreviousSlide, onNextSlide }: Props) {
    const classes = useStyles();
    return (
        <Card className={ `${className} ${ classes.controlsContainer }` }>
            <IconButton className={ classes.button } onClick={ onPreviousSlide }>
                <FontAwesomeIcon icon={ faChevronLeft } />
            </IconButton>
            <IconButton className={ classes.button } onClick={ onNextSlide }>
                <FontAwesomeIcon icon={ faChevronRight } />
            </IconButton>
        </Card>
    )
}