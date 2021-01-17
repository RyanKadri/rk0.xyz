import { Card, makeStyles, Typography } from "@material-ui/core";
import { PresentationContext } from "packages/presenter-core/src/services/types";
import React from "react";
import { ContentSlide } from "../../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles({
    container: {
        display: "flex",
        margin: "64px -112px"
    },
    card: {
        padding: "0.25em",
        margin: "0.5em",
        flexBasis: "22%",
        "&:last-of-type": {
            marginLeft: "auto"
        }
    },
    slideViewport: {
        backgroundColor: "#f0f0f0"
    }
});

export function FullStackDiagramSlide({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title='Application "Stack"' context={context} classes={ { viewport: classes.slideViewport } } Content={
            <div className={ classes.container }>
                <Card className={ classes.card }>
                    <Typography variant="h5" color="primary">Frontend</Typography>
                    <Typography variant="body2">
                        The part of the application a user/client interacts with. Often a
                        GUI application.
                    </Typography>
                </Card>
                <Card className={ classes.card }>
                    <Typography variant="h5" color="primary">Middle-Tier</Typography>
                    <Typography variant="body2">
                        Where the "business logic" of the application lives. Remember that
                        you can't trust frontend inputs! Some merge this with backend.
                    </Typography>
                </Card>
                <Card className={ classes.card }>
                    <Typography variant="h5" color="primary">Backend</Typography>
                    <Typography variant="body2">
                        The part of the application the user does not directly control. Usually
                        made up of one or more remote servers. Some consider the database to be the
                        "backend"
                    </Typography>
                </Card>
                <Card className={ classes.card }>
                    <Typography variant="h5" color="primary">Infrastructure</Typography>
                    <Typography variant="body2">
                        The servers and "hardware" that your code interacts with
                    </Typography>
                </Card>
            </div>
        } />
    );
}

interface Props {
    context: PresentationContext
}