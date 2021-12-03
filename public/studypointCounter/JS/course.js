export class course {
    constructor(courseName, studypoints, estimatedHours) {
        this.CourseName = courseName;
        this.Studypoints = studypoints;
        this.EstimatedHours = estimatedHours;
        this.TimeSpent = 0;
    }

    addTime() {
        this.TimeSpent++
    }

    editTime(newTimeSpent) {
        this.TimeSpent = newTimeSpent;
    }
}