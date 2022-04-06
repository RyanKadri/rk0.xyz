import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const annotations = [
  {
    names: ["@RestController"],
    location: "Class",
    meaning: "This class will handle requests to some URLs",
  },
  {
    names: ["@GetMapping", "@PostMapping..."],
    location: "Method",
    meaning: "This method will handle requests for a particular URL/HTTP method combo",
  },
  {
    names: ["@PathVariable"],
    location: "Method Parameter",
    meaning: "This parameter should come from the URL (based on a URL template)",
  },
  {
    names: ["@RequestParam"],
    location: "Method Parameter",
    meaning: "This parameter should come from a query string parameter (by name)",
  },
  {
    names: ["@RequestBody"],
    location: "Method Parameter",
    meaning: "This parameter should come from the request body (deserialized)",
  },
  {
    names: ["@RequestHeader"],
    location: "Method Parameter",
    meaning: "This parameter should come from a request header (by name)",
  },
];

export function SpringAnnotations({ context }: Props) {
  return (
    <ContentSlide
      Title="Spring Annotations"
      context={context}
      Content={
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Annotation</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Meaning</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {annotations.map(a => (
              <TableRow>
                <TableCell>
                  {a.names.map(name => (
                    <code>{name + " "}</code>
                  ))}
                </TableCell>
                <TableCell>{a.location}</TableCell>
                <TableCell>{a.meaning}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      }
    />
  );
}

interface Props {
  context: PresentationContext;
}
