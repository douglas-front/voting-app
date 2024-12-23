import { NameOfVoters } from "../types/NameOfVoters";
import ModalService from "./ModalService";

export default class VerifyVoter{

    private voters!: NameOfVoters[]
    private modalService: ModalService = new ModalService()

    public VerifyVoter(voter: NameOfVoters): boolean{

        const voterInLocalStorage: string | null = localStorage.getItem("voters");
        
        this.voters = voterInLocalStorage ? JSON.parse(voterInLocalStorage as NameOfVoters) : this.voters = []

        // console.log(this.voters)

        if(this.voters?.includes(voter as NameOfVoters)){
            this.modalService.modalServiceOpen()
            return true
        }

        return false
      
    }
}