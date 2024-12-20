import { NameOfVoters } from "../types/NameOfVoters";
import { VoteWorker } from "../types/VoteWorker";
import ModalService from "./ModalService";

export default class InsertVote {
    
    private workers: VoteWorker[] = [];
    private modalService: ModalService = new ModalService()

    constructor() {
       
        const workersInLocalStorage = localStorage.getItem("votes");
        this.workers = workersInLocalStorage ? JSON.parse(workersInLocalStorage) : [];
    }

    public insertVote(worker: NameOfVoters): void {

        const existingWorker = this.workers.find((x) => x.name === worker);
        const voter = localStorage.getItem("voter")
    

        if(voter === worker){
            window.alert("você não pode votar em si mesmo")
            return
        }

        if (existingWorker) {

            existingWorker.votes += 1;
            this.modalService.modalServiceOpen()


            setInterval(() => {
                window.open("/", "_self")
            }, 1000);

        } else {
            this.workers.push({ name: worker, votes: 1 });
            this.modalService.modalServiceOpen()

            setInterval(() => {
                window.open("/", "_self")
            }, 1000);
        }

        localStorage.setItem("votes", JSON.stringify(this.workers));
    }
    
}
