export default function App() {
  return (
    <div style={{padding:'20px', fontFamily:'Arial'}}>
      <h1>H.J EMPREENDIMENTO</h1>

      <h2>Painel do Patrão</h2>

      <ul>
        <li>Obras</li>
        <li>Trabalhadores</li>
        <li>Presenças</li>
        <li>Pagamentos</li>
      </ul>

      <hr />

      <h2>Painel do Trabalhador</h2>

      <p>Obra Atual: Residencial Primavera</p>

      <button>Dia Completo</button>
      <button style={{marginLeft:'10px'}}>Meio Período</button>
      <button style={{marginLeft:'10px'}}>Falta</button>
    </div>
  )
}
