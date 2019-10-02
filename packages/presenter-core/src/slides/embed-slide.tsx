import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React, { ReactElement } from "react";
import { PresentationContext } from "../services/types";

const styles = () => createStyles({
    container: {
        padding: "0"
    }
})

const _FullSlide = ({ classes, Content }: Props) => (
    <div className={ classes.container }>
        { Content }
    </div>
)

export const FullSlide = withStyles(styles)(_FullSlide)

interface Props extends WithStyles<typeof styles> {
    Content: ReactElement;
    context: PresentationContext;
}