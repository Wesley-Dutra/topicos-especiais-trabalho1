import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const ViagensList = (props) => (
    <main class='app-main'>
        <div class='div-table'>    
            <table className="table table-striped table-dark">
                <thead>
                    <tr><th>Index</th><th>Editar/Excluir</th><th>Partida</th><th>UF partida</th><th>Destino</th><th>UF Destino</th><th>Inicio</th><th>Fim</th><th>Custo(un)</th><th>Passageiros</th><th>CIA Aérea</th></tr>
                </thead>
                <tbody>
                    {props.viagens.length > 0 ? (props.viagens.map((o, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>
                                <button onClick={() => props.editar(o._id)} class='btn-op'>Editar</button>
                                <button onClick={() => props.excluir(o._id)} class='btn-op'>Excluir</button>
                            </td>
                            <td>{o.cidadePartida}</td>
                            <td>{o.estadoPartida}</td>
                            <td>{o.cidadeDestino}</td>
                            <td>{o.estadoDestino}</td>
                            <td>{o.dataInicio}</td>
                            <td>{o.dataFim}</td>
                            <td>{o.custoUnit}</td>
                            <td>{o.passageiros}</td>
                            <td>{o.ciaAerea}</td>
                        </tr>
                    ))) : (
                        <tr> <td colSpan={11}>Nenhuma informação.</td> </tr>
                    )}
                </tbody>
            </table>
        </div>
        <button onClick={props.inserir} class='btn-padrao'>Adicionar viagem</button>
    </main>    
)
export default ViagensList;