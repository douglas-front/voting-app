import { NameOfVoters } from "../types/NameOfVoters";
import { VoteWorker } from "../types/VoteWorker";

export default class InsertVote {
    
    private workers: VoteWorker[] = [];

    constructor() {
        const workersInLocalStorage = localStorage.getItem("votes");
        this.workers = workersInLocalStorage ? JSON.parse(workersInLocalStorage) : [];
    }

    public insertVote(worker: NameOfVoters): void {
        const existingWorker = this.workers.find((x) => x.name === worker);

        if (existingWorker) {
            existingWorker.votes += 1;
            window.alert(`você votou em ${worker}`);
            window.open("/", "_self")

        } else {
            this.workers.push({ name: worker, votes: 1 });
            window.alert(`você votou em ${worker}`);
            window.open("/", "_self")
        }

        localStorage.setItem("votes", JSON.stringify(this.workers));
    }
    
}
