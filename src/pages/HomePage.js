import CardList from "../components/CardList";
import Hero from "../components/Hero";

import img1 from "../assets/cryptoadz.png"
import img2 from "../assets/loot.png"

const DUMMY_DATA = [
  {
    id: "1",
    title: "Companion",
    image:
      img1,
    description: "companion for supDicks",
  },
  {
    id: "2",
    title: "ERC20 Token Claim",
    image: img2,
    description: "Free Claim for token",
  },
  {
    id: "3",
    title: "ERC20 Token Claim",
    image: img1,
    description: "Free Claim for token",
  },
  {
    id: "4",
    title: "ERC20 Token Claim",
    image: img2,
    description: "Free Claim for token",
  },
];


function HomePage() {
  return (
    <div>
      <div>
        <Hero />
        <CardList sectionHeader="All Upcoming Claims" dataArr={DUMMY_DATA} />
      </div>
      <div>
        <CardList sectionHeader="Claims For Your Wallet" dataArr={DUMMY_DATA} />
      </div>
    </div>
  );
}
export default HomePage;