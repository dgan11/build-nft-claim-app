function AboutPage(props) {
  return (
    <div className="py-12 px-5">
      <div className="font-mono">
        <h1 className="text-4xl font-bold">About Us</h1>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
          suscipit eaque
        </p>
      </div>
      <br />
      <div className="font-mono py-10">
        <div>
          <h3 className="text-3xl">Projects tracked</h3>
          <br />
          <ul className="list-inside list-disc">
            <li>Loot</li>
            <li>Loot</li>
            <li>Loot</li>
            <li>Loot</li>
            <li>Loot</li>
            <li>Loot</li>
            <li>Loot</li>
          </ul>
        </div>
      </div>
    </div>
  );

}
export default AboutPage;
