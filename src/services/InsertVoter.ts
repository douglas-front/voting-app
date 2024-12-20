
import { NameOfVoters } from "../types/NameOfVoters";
import VerifyNameOfVoter from "./VerifyNameOfVoter";
import VerifyVoter from "./VerifyVoter";



export default class InsertVoter {


    private voters!: NameOfVoters[]

    constructor(private verifyVoter: VerifyVoter, private verifyNameOfVoter: VerifyNameOfVoter) { }

    public InsertVoter(voter: NameOfVoters) {

        const verifyNameOfNewVoter: boolean | undefined = this.verifyNameOfVoter.VerifyNameOfVoter(voter);
        const verifyNewVoter: boolean | undefined = this.verifyVoter.VerifyVoter(voter);

        if (!verifyNewVoter && verifyNameOfNewVoter) {

            const oldVoters = localStorage.getItem("voters");
            this.voters = oldVoters ? [...JSON.parse(oldVoters), voter] : this.voters = [voter];

            console.log(this.voters);

            localStorage.setItem("voters", JSON.stringify(this.voters));
            localStorage.setItem("voter", voter)
            this.setAccess(true)

            window.open("/worksector", "_self");

        }
        
    }

    public setAccess(value: boolean){
        value ? localStorage.setItem("accessAccepted", JSON.stringify(true)) : localStorage.setItem("accessAccepted", JSON.stringify(false))  
    }

}