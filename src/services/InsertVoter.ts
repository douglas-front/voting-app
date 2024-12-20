
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

            const oldVoters = localStorage.getItem("users");
            this.voters = oldVoters ? [...JSON.parse(oldVoters), voter] : this.voters = [voter];

            console.log(this.voters);

            localStorage.setItem("users", JSON.stringify(this.voters));
            this.setAccess(true)

            window.open("/worksector", "_self");

        }
        
    }

    public setAccess(value: boolean){
        value ? localStorage.setItem("accessAccepted", JSON.stringify(true)) : localStorage.setItem("accessAccepted", JSON.stringify(false))  
    }

}