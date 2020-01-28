import { makeStyles, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";
import { PresentationContext } from "../services/types";
import { PageNumber } from "../slide-components/page-number";

const useStyles = makeStyles({
    media: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: "75%",
        width: "auto",
        maxWidth: "100%",
        "& img": {
            height: "100%"
        }
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32
    },
    credit: {
        position: "absolute",
        bottom: 32,
        left: 32
    }
})

export function MediaSlide({ context, Media, Title, Credit }: Props) {
    const classes = useStyles();
    return (
        <div className={ classes.container }>
            { typeof Title === "string"
                ? <Typography variant="h3">{ Title }</Typography>
                : <div>{ Title }</div>
            }
            <div className={ classes.media }>
                { Media }
            </div>
            { typeof Credit === "string"
                ? <Typography className={ classes.credit }
                              variant="h4">
                    { Credit }
                </Typography>
                : <div className={ classes.credit }>{ Credit }</div> 
            }
            <PageNumber context={context} />
        </div>
    )
}

interface Props {
    context: PresentationContext;
    Title?: ReactElement | string;
    Media: ReactElement;
    Credit?: ReactElement | string;
}