const Contador = function () {
  const [Contador, setContador] = React.useState(0);
  const Aumentar = () => setContador(Contador + 1);
  const desminuir = () => setContador(Contador - 1);
  class Homa {}

  return (
    <div>
      <h1 className={Contador < 0 ? "menor" : "mayor"}>Contador: {Contador}</h1>
      <hr />
      <button type="button" className="btn btn-success" onClick={Aumentar}>
        Aumentar
      </button>
      <button type="button" className="btn btn-danger" onClick={desminuir}>
        Disminuir
      </button>
    </div>
  );
};
