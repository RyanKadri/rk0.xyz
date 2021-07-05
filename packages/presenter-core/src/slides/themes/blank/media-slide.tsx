import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { PageNumber } from "../../components/page-number";
import { MediaSlideProps } from "../../slides";

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
        justifyContent: "center",
        padding: 32,
        background: "#eee",
        height: "100%"
    },
    credit: {
        position: "absolute",
        bottom: 32,
        left: 32
    }
})

export function MediaSlide({ context, Media, Title, Credit }: MediaSlideProps) {
    const classes = useStyles();
    return (
        <div className={ classes.container }>
            { typeof Title === "string"
                ? <Typography variant="h4">{ Title }</Typography>
                : <div>{ Title }</div>
            }
            <div className={ classes.media }>
                { Media }
            </div>
            { typeof Credit === "string"
                ? <Typography className={ classes.credit }
                              variant="caption">
                    { Credit }
                </Typography>
                : <div className={ classes.credit }>{ Credit }</div> 
            }
            <PageNumber context={context} />
        </div>
    )
}