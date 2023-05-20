import { styled } from "@mui/material";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import dnsImage from "../assets/DNS-Server.png";

const Image = styled("img")({
  width: 650,
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
});

const items = [
  "To send a request to a server, you need its IP address",
  "The domain name part of a real URL corresponds to an IP address",
  "Your ISP uses the IP address to get the request to the right destination",
  "Your computer checks with a DNS server to convert a domain name into an IP",
];

export function DNSLookup({ context }: Props) {
  return (
    <ContentSlide
      Title="Finding a Server"
      context={context}
      Content={
        <>
          <InfoList items={items} />
          <Image src={dnsImage.src} />
        </>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
