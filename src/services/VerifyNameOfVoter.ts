import { NameOfVoters } from "../types/NameOfVoters";

export default class VerifyNameOfVoter {

    private namesPermition: NameOfVoters[] =
        [
            "hermeson",
            "douglas",

            "amanda",
            "ana",
            "israel",
            "eliene",
            "franklin",

            "paula",
            "joana",
            "aurinete",

            "diego",
            "erika",
            "monica",
            "jessica",

            "daline",
            "daiana",
            "brenda",

            "camila",
            "anne",

            "dimitria",
            "andreia",
            "jaqueline",
            "daisy",
            "novata",
        ]

    public VerifyNameOfVoter(voter: NameOfVoters) {

        if (this.namesPermition.includes(voter as NameOfVoters)) {
            return true
        } else {
            window.alert("você não é funcionário")
        }

    }

}