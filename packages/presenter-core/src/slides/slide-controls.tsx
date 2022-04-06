import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import { faSquare } from "@fortawesome/free-solid-svg-icons/faSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  createStyles,
  Hidden,
  IconButton,
  Link as MaterialLink,
  makeStyles,
  Menu,
  MenuItem,
  NoSsr,
} from "@material-ui/core";
import c from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { isProfessor } from "../../../site/src/common/admin";
import { AutomaticSlideRecording, SlideRecording } from "../services/slide-recorder";
import { Presentation, RecordingDefinition } from "../services/types";

const useStyles = makeStyles(theme =>
  createStyles({
    controlsContainer: {
      fontSize: 16,
      display: "flex",
      justifyContent: "space-between",
      gap: 8,
      padding: "8px 16px",
      transition: "opacity 100ms ease-in-out",
      backgroundColor: theme.palette.grey["900"],
      color: theme.palette.text.primary,
    },
    button: {
      fontSize: 20,
      [theme.breakpoints.down("sm")]: {
        fontSize: 18,
      },
    },
    controlButtonGroup: {
      display: "flex",
      alignItems: "center",
      gap: 8,
    },
    textLinkGroup: {
      gap: 32,
    },
    menuItem: {
      fontSize: 16,
    },
  })
);

interface Props {
  className?: string;
  courseUrl: string;
  currSlide: number;
  previousSlideLink: string | null;
  nextSlideLink: string | null;
  onRecord(): void;
  onStop(): void;
  lesson: Presentation;
  recording: SlideRecording | null;
}

export function SlideControls({
  className,
  currSlide,
  previousSlideLink,
  nextSlideLink,
  courseUrl,
  onRecord,
  onStop,
  lesson,
  recording,
}: Props) {
  const classes = useStyles();
  const [_, setVersion] = useState(Date.now());
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setVersion(Date.now());
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={c(className, classes.controlsContainer)}>
      <Hidden smDown>
        <div className={c(classes.controlButtonGroup, classes.textLinkGroup)}>
          <Link href={courseUrl} passHref>
            <MaterialLink>Back to Class</MaterialLink>
          </Link>
          {!!lesson.recording && (
            <MaterialLink href={generateRecordingLink(lesson.recording, currSlide)} target="__blank">
              View Recording
            </MaterialLink>
          )}
        </div>
      </Hidden>
      <Hidden mdUp>
        <div className={c(classes.controlButtonGroup, classes.textLinkGroup)}>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            className={classes.button}
            onClick={e => setAnchorEl(e.currentTarget)}
          >
            <FontAwesomeIcon icon={faEllipsisV} />
          </IconButton>
          <Menu id="slide-controls" anchorEl={anchorEl} open={!!anchorEl} onClose={() => setAnchorEl(null)} keepMounted>
            {/* TODO - Fix styling */}
            <MenuItem
              className={classes.menuItem}
              onClick={() => {
                setAnchorEl(null);
                router.push(courseUrl);
              }}
            >
              Back to Class
            </MenuItem>
            {!!lesson.recording && (
              <MenuItem
                className={classes.menuItem}
                onClick={() => {
                  setAnchorEl(null);
                  window.location.href = generateRecordingLink(lesson.recording!, currSlide);
                }}
              >
                View Recording
              </MenuItem>
            )}
          </Menu>
        </div>
      </Hidden>
      <NoSsr>
        {!lesson.recording?.slideTimings && isProfessor() && (
          <div className={classes.controlButtonGroup}>
            {!recording ? (
              <IconButton className={classes.button} color="secondary" onClick={onRecord}>
                <FontAwesomeIcon icon={faCircle} />
              </IconButton>
            ) : (
              <>
                <IconButton className={classes.button} color="secondary" onClick={onStop}>
                  <FontAwesomeIcon icon={faSquare} />
                </IconButton>
                <span>{renderRecordingTime(Date.now() - (recording as AutomaticSlideRecording).startTime)}</span>
              </>
            )}
          </div>
        )}
      </NoSsr>
      <div className={classes.controlButtonGroup}>
        <LinkOrDisabledButton href={previousSlideLink} icon={faChevronLeft} label="Previous Slide" />
        <LinkOrDisabledButton href={nextSlideLink} icon={faChevronRight} label="Next Slide" />
      </div>
    </div>
  );
}

interface LinkProps {
  label: string;
  icon: IconDefinition;
  href: string | null;
}
function LinkOrDisabledButton({ label, icon, href }: LinkProps) {
  const classes = useStyles();
  /* This next part looks weird because NextJS does not like disabled buttons embedded in a link */
  return !!href ? (
    <Link href={href} passHref replace shallow aria-label={label}>
      <IconButton className={classes.button}>
        <FontAwesomeIcon icon={icon} />
      </IconButton>
    </Link>
  ) : (
    <IconButton className={classes.button} disabled aria-label={label}>
      <FontAwesomeIcon icon={icon} />
    </IconButton>
  );
}

function renderRecordingTime(timeInMillis) {
  const time = Math.floor(timeInMillis / 1000);
  const seconds = time % 60;
  const minutes = Math.floor(time / 60);
  const hours = Math.floor(minutes / 60);
  const minutesRemaining = ("" + (minutes % 60)).padStart(2, "0");
  const secondsRemaining = ("" + (seconds % 60)).padStart(2, "0");
  return `${hours}:${minutesRemaining}:${secondsRemaining}`;
}

function generateRecordingLink(recording: RecordingDefinition, slide: number) {
  const baseUrl = recording.link;
  const firstSlideChange = (recording.slideTimings?.slideChangeEvents ?? []).find(event => event.slideNum === slide);
  if (!firstSlideChange) {
    return baseUrl;
  } else {
    if (recording.slideTimings?.eventTimeSchema === "offset") {
      const startTimeSecs = Math.floor(firstSlideChange.time / 1000);
      const offset = (recording.slideTimings?.videoOffset ?? 0) / 1000;
      return `${baseUrl}?t=${Math.round(startTimeSecs + offset)}`;
    } else {
      return `${baseUrl}?t=${firstSlideChange.time}`;
    }
  }
}
