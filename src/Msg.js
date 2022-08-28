function Msg({ pic, name }) {
  return (
    <div>
      <img height="200" src={pic} alt={name} />
      <h1> Hi {name}, how are you </h1>
    </div>
  );
}
