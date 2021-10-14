import Photo from "../assets/landscape.jpg"
import Card from "./Card";


function CardList(props) {
  return (
    <div className=" rounded-lg">
      <div className="px-2">
        <h1 className="mt-10 text-3xl pt-6 font-mono">{props.sectionHeader}</h1>
      </div>
      <div className="flex flex-row flex-wrap  justify-center">
        {/* <Card />
        <Card />
        <Card /> */}

        <ul className="flex flex-row flex-wrap py-3 justify-left font-mono">
          {props.dataArr.map((data) => (
            <Card
              key={data.id}
              // id={meetup.id}
              image={data.image}
              title={data.title}
              description={data.description}
              // meetup={meetup}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default CardList;