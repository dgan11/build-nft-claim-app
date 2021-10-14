

function Card(props) {
  return (
    <div className="w-full md:w-6/12 lg:w-4/12 xl:w-4/12 mb-5 px-3 py-3">
      <div className="bg-white ">
        <div>
          <img src={props.image} className="w-full" alt="card" />
        </div>

        <div>
          <ul className="px-2 py-1">
            <li className="list-none">
              <span className="font-bold text-base">{props.title}</span>
            </li>

            <li className="list-none">
              <span className="text-base">{props.description}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Card;
