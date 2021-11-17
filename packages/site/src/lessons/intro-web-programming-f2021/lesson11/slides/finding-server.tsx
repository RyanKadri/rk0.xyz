
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import dnsImage from "../assets/DNS-Server.png";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 26,
        userSelect: "text"
    },
    image: {
        width: 650,
        marginLeft: "auto",
        marginRight: "auto",
        display: "block"
    }
}))

const items = [
    "To send a request to a server, you need its IP address",
    "The domain name part of a real URL corresponds to an IP address",
    "Your ISP uses the IP address to get the request to the right destination",
    "Your computer checks with a DNS server to convert a domain name into an IP"
];

export function DNSLookup({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Finding a Server" context={context} Content={<>
            <InfoList items={ items } />
            <img src={ dnsImage.src } className={ classes.image } />
        </>} />
    );
}

interface Props {
    context: PresentationContext
}