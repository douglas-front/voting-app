import { arrayNameOfVoters } from "../common/untils/arrayNameOfVoters";
import { NameOfVoters } from "../types/NameOfVoters";

export default class VerifyNameOfVoter {

    private namesPermition: NameOfVoters[] = [...arrayNameOfVoters]

    public VerifyNameOfVoter(voter: NameOfVoters) {

        if (this.namesPermition.includes(voter as NameOfVoters)) {
            return true
        }

    }

}