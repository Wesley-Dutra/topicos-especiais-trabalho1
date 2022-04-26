import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViagensForm = (props) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target
        props.setViagem({ ...props.viagem, [name]: value })
    }
       

    return (
        <main class='app-main'>
            <form class='app-form'>
                <div class="form-row align-items-left">
                    <div class='div-form'>
                        <label >Cidade de Partida</label>
                        <input type="text" class="form-control" name='cidadePartida'
                            value={props.viagem.cidadePartida} onChange={handleInputChange} required/>
                    </div>
                    <div class='div-form'>
                        <label >UF de Partida</label>
                        <input type="text" class="form-control" name='estadoPartida' maxLength={2}
                            value={props.viagem.estadoPartida} onChange={handleInputChange} required/>
                    </div>
                    <div class='div-form'>
                        <label >Cidade de Destino</label>
                        <input type="text" class="form-control" name='cidadeDestino'
                            value={props.viagem.cidadeDestino} onChange={handleInputChange} required/>
                    </div>
                    <div class='div-form'>
                        <label >UF de Destino</label>
                        <input type="text" class="form-control" name='estadoDestino' maxLength={2}
                            value={props.viagem.estadoDestino} onChange={handleInputChange} required/>
                    </div>
                    <div class='div-form'>
                        <label >Inicio da Viagem</label>
                        <input type="date" class="form-control" name='dataInicio'
                            value={props.viagem.dataInicio} onChange={handleInputChange}/>
                    </div>
                    <div class='div-form'>
                        <label >Fim da Viagem</label>
                        <input type="date" class="form-control" name='dataFim'
                            value={props.viagem.dataFim} onChange={handleInputChange}/>
                    </div>
                    <div class='div-form'>
                        <label >Custo por Pessoa</label>
                        <input type="number" class="form-control" name='custoUnit'
                            value={props.viagem.custoUnit} onChange={handleInputChange}/>
                    </div>
                    <div class='div-form'>
                        <label >Quantidade de Passageiros</label>
                        <input type="number" class="form-control" name='passageiros'
                            value={props.viagem.passageiros} onChange={handleInputChange}/>
                    </div>
                    <div class='div-form'>
                        <label >Companhia Aérea Responsável</label>
                        <input type="text" class="form-control" name='ciaAerea'
                            value={props.viagem.ciaAerea} onChange={handleInputChange}/>
                    </div>
                </div>
                <div>
                <button onClick={props.salvar} class='btn-padrao btn-opc'>Salvar</button>
                <button onClick={props.cancelar} class='btn-padrao btn-opc'>Cancelar</button>
                </div>
            </form>
        </main>
    )
}
export default ViagensForm;