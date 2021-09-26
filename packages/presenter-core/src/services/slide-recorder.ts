import { useEffect, useState } from "react";

const recordingsKey = "recordings";
const currRecordingKey = "recordings.current";

export type SlideRecording = AutomaticSlideRecording | ManualSlideRecording;

export interface AutomaticSlideRecording {
    id: number;
    startTime: number;
    endTime: number | null;
    courseName: string;
    lessonName: string;
    slideChangeEvents: SlideChangeEvent[];
    videoOffset: number | null;
    eventTimeSchema: "offset"
}

export interface ManualSlideRecording {
    id: number;
    slideChangeEvents: SlideChangeEvent[];
    eventTimeSchema: "youtube"
}

interface SlideChangeEvent {
    time: number;
    slideNum: number;
}

export class SlideRecorderService {

    useRecorder() {

        const loadCurrentRecording = () => {
            const currRecordingStr = localStorage.getItem(currRecordingKey);
            const storedCurrRecording: AutomaticSlideRecording | null = !!currRecordingStr 
                ? JSON.parse(currRecordingStr) 
                : null;
            return storedCurrRecording
        }

        const [ currentRecording, setCurrentRecording ] = useState<AutomaticSlideRecording | null>(null);
        useEffect(() => {
            setCurrentRecording(loadCurrentRecording())
        }, [])

        const persistCurrentRecording = (recording: AutomaticSlideRecording) => {
            localStorage.setItem(currRecordingKey, JSON.stringify(recording));
            setCurrentRecording(recording)
        }

        const startRecording = (courseName: string, lessonName: string) => {
            const startTime = Date.now();
            const currRecording: AutomaticSlideRecording = {
                id: startTime,
                courseName,
                lessonName,
                slideChangeEvents: [],
                startTime,
                endTime: null,
                videoOffset: null,
                eventTimeSchema: "offset" as const
            }
            persistCurrentRecording(currRecording);
        }

        const stopRecording = () => {
            if(currentRecording) {
                this.saveNewRecording(currentRecording);
                setCurrentRecording(null);
                localStorage.removeItem(currRecordingKey);
            }
        }
    
        const slideChanged = (e: SlideChangeEvent) => {
            if(currentRecording) {
                persistCurrentRecording({
                    ...currentRecording,
                    slideChangeEvents: currentRecording.slideChangeEvents.concat(e)
                });
            }
        }

        return {
            startRecording: startRecording,
            stop: stopRecording,
            slideChanged,
            currentRecording
        }
    }

    fetchRecordings = () => {
        return this.loadSavedRecordings();
    }
    
    downloadRecording(recording: AutomaticSlideRecording) {
        const downloadLink = document.createElement("a");
        const downloadBlob = new Blob([JSON.stringify(recording, undefined, 4)], {type: "application/json"});
        downloadLink.href = URL.createObjectURL(downloadBlob);
        downloadLink.download = `${recording.courseName}-${recording.lessonName}-${recording.startTime}.json`;
        downloadLink.click();
    }
    
    clearRecording(recording: SlideRecording) {
        const recordings = this.loadSavedRecordings();
        const filteredRecordings = recordings.filter(r => r.id !== recording.id);
        this.persistRecordings(filteredRecordings);
    }
    
    
    private loadSavedRecordings() {
        const historyStr = localStorage.getItem(recordingsKey);
        const storedHistory: AutomaticSlideRecording[] = !!historyStr 
        ? JSON.parse(historyStr) 
        : [];
        return storedHistory
    }

    private saveNewRecording(recording: AutomaticSlideRecording) {
        const startTime = recording.startTime;
        const normalizedEvents = recording.slideChangeEvents.map(e => ({
            ...e,
            time: e.time - startTime
        }));
        const finalizedRecording: SlideRecording = {
            ...recording,
            slideChangeEvents: normalizedEvents,
            endTime: Date.now()
        }
        const allRecordings = this.fetchRecordings();
        this.persistRecordings(allRecordings.concat(finalizedRecording));
    }

    private persistRecordings(recordings: SlideRecording[]) {
        localStorage.setItem(recordingsKey, JSON.stringify(recordings));
    }

}

export const recorderService = new SlideRecorderService();
