import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Typography, styled } from "@mui/material";
import { recorderService } from "../packages/presenter-core/src/services/slide-recorder";
import { useClientSideValue } from "../packages/site/src/common/functional-utils";

const Container = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: 600,
}));

export default function InstructorView() {
  const recordings = useClientSideValue(recorderService.fetchRecordings, []);
  return (
    <Container>
      <Typography variant="h4" component="h1">
        Recordings
      </Typography>
      {recordings.length === 0 ? (
        <Typography>There are no recordings yet. Get to work!</Typography>
      ) : (
        <List>
          {recordings.map(recording => (
            <ListItem key={recording.startTime}>
              <ListItemText
                primary={new Date(recording.startTime).toLocaleString()}
                secondary={`${recording.courseName} - - ${recording.lessonName}`}
              />
              <ListItemSecondaryAction>
                <IconButton onClick={() => recorderService.downloadRecording(recording)}>
                  <FontAwesomeIcon icon={faDownload} />
                </IconButton>
                <IconButton onClick={() => recorderService.clearRecording(recording)}>
                  <FontAwesomeIcon icon={faTrash} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}
