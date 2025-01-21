import styles from "./styles.module.css";
import SideBar from "../../components/SideBar";
import { arrayNameOfVoters } from "../../../../common/untils/arrayNameOfVoters";
import { NameOfVoters } from "../../../../types/NameOfVoters";
import Card from "../../components/Card";
import { VoteWorker } from "../../../../types/VoteWorker";

export default function Hero() {
  const voters = localStorage.getItem("voters");
  const votersJson = voters ? JSON.parse(voters) : ["sem votantes"];

  const votes = localStorage.getItem("votes");

  const resultOfVotes: VoteWorker[] = votes
    ? JSON.parse(votes)
    : [{ name: "sem ganhador", votes: 0 }];

  // const winner = resultOfVotes.reduce((max, current) => {
  //     return (current.votes > max.votes) ? current : max;
  // });

  const maxVotes = Math.max(...resultOfVotes.map((item) => item.votes));
  const winners = resultOfVotes.filter((item) => item.votes === maxVotes);
  let result = [];

  if (winners.length > 1) {
    result = [...winners];
  } else {
    // Um único vencedor
    result = [winners[0]];
  }

  const onView = localStorage.getItem("onView");

  const participants: NameOfVoters[] = [...arrayNameOfVoters];

  return (
    <section className={styles.hero}>
      <SideBar />
      <div className={styles.cards}>
        {onView === "participants"
          ? participants.map((participant, index) => (
              <Card
                key={index}
                nameOfWorker={participant}
                winner={false}
                votes={0}
              />
            ))
          : ""}

        {onView === "voters"
          ? votersJson.map((voter: NameOfVoters, index: number) => (
              <Card key={index} nameOfWorker={voter} winner={false} votes={0} />
            ))
          : ""}

        {onView === "results" ? (
          <>
            {result.length > 1 &&
            result.every((item) => item.votes === result[0].votes) ? (
              <h1>Empate!</h1>
            ) : null}

            {result.map((winner, index) => (
              <Card
                key={index}
                nameOfWorker={winner.name}
                votes={winner.votes}
                winner
              />
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
