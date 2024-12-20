import { NameOfVoters } from "../types/NameOfVoters";

export default class VerifyVoter{

    private voters!: NameOfVoters[]

    public VerifyVoter(voter: NameOfVoters){

        const voterInLocalStorage: string | null = localStorage.getItem("voters");
        
      this.voters = voterInLocalStorage ? JSON.parse(voterInLocalStorage as NameOfVoters) : this.voters = []

        console.log(this.voters)

        if(this.voters?.includes(voter as NameOfVoters)){
            window.alert("ja votou")
            return true
        }
      
    }
}