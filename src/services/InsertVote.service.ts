import { NameOfVoters } from "../types/NameOfVoters";
import { VoteWorker } from "../types/VoteWorker";
import ModalService from "./ModalService.service";

export default class InsertVote {

    private workers: VoteWorker[] = [];
    private modalService: ModalService = new ModalService()

    constructor() {

        const workersInLocalStorage = localStorage.getItem("votes");
        this.workers = workersInLocalStorage ? JSON.parse(workersInLocalStorage) : [];
    }

    public insertVote(worker: NameOfVoters): void {

        const existingWorker = this.workers.find((x) => x.name === worker);

        if (existingWorker) {

            existingWorker.votes += 1;

            setInterval(() => {
                window.open("/", "_self")
            }, 1000);
            this.modalService.modalServiceOpen()

        } 
        else {
            this.workers.push({ name: worker, votes: 1 });


            setInterval(() => {
                window.open("/", "_self")
            }, 1000);
            this.modalService.modalServiceOpen()

        }

        localStorage.setItem("votes", JSON.stringify(this.workers));

    }

}
