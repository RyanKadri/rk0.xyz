import { useEffect, useState } from "react";

const recordingsKey = "recordings";
const currRecordingKey = "recordings.current";

export interface SlideRecording {
    id: number;
    startTime: number;
    endTime: number | null;
    courseName: string;
    lessonName: string;
    slideChangeEvents: SlideChangeEvent[];
    videoOffset: number | null;
}

interface SlideChangeEvent {
    time: number;
    slideNum: number;
}

export class SlideRecorderService {

    useRecorder() {

        const loadCurrentRecording = () => {
            const currRecordingStr = localStorage.getItem(currRecordingKey);
            const storedCurrRecording: SlideRecording | null = !!currRecordingStr 
                ? JSON.parse(currRecordingStr) 
                : null;
            return storedCurrRecording
        }

        const [ currentRecording, setCurrentRecording ] = useState<SlideRecording | null>(null);
        useEffect(() => {
            setCurrentRecording(loadCurrentRecording())
        }, [])

        const persistCurrentRecording = (recording: SlideRecording) => {
            localStorage.setItem(currRecordingKey, JSON.stringify(recording));
            setCurrentRecording(recording)
        }

        const startRecording = (courseName: string, lessonName: string) => {
            const startTime = Date.now();
            const currRecording = {
                id: startTime,
                courseName,
                lessonName,
                slideChangeEvents: [],
                startTime,
                endTime: null,
                videoOffset: null
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
    
    downloadRecording(recording: SlideRecording) {
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
        const storedHistory: SlideRecording[] = !!historyStr 
        ? JSON.parse(historyStr) 
        : [];
        return storedHistory
    }

    private saveNewRecording(recording: SlideRecording) {
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
