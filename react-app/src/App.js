import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViagensList from './ViagensList';
import ViagensForm from './ViagensForm';
import ViagensSrv from './services/ViagensSrv';

function App() {

  const [viagens, setViagens] = useState([])
    useEffect(() => {
    onClickAtualizar(); // ao inicializar executa método para atualizar
  }, []); 

  //método para atualizar os valores da tabela
  const onClickAtualizar = () => {
    ViagensSrv.listar().then(response => {
      setViagens(response.data);
      console.log("Viagens atualizadas");
    }).catch(e => { 
      console.log("Erro: "+e.message);
    });
  }

  //Declaração de variável e hooks
  const initialState = { id: null, cidadePartida: '', estadoPartida: '', cidadeDestino: '', estadoDestino: '', dataInicio: null, dataFim: null, custoUnit: null, passageiros: null, ciaAerea: ''};
  const [viagem, setViagem] = useState(initialState); //hook para inserir ou alterar algum item da lista
  const [editando, setEditando] = useState(false); //hook para determinar se está sendo executado algum comando

  const editar = (id) => {
    setViagem(viagens.filter((viagem) => viagem._id === id)[0]);
    onClickAtualizar();
    setEditando(true);
  }

  //Método para excluir um item da tabela
  const excluir = (_id) => {
    ViagensSrv.excluir(_id).then(response => {
      onClickAtualizar();
      console.log('excluido')
    })
  }

  //Método ara inserir dados na tabela
  const inserir = () => {
    setViagem(initialState);
    setEditando(true);
  }

  //Método para salvar e incluir os itens na tabela
  const salvar = () => {
    if (viagem._id == null) { // inclussão
      ViagensSrv.incluir(viagem).then(response => {
      setEditando(false);
      console.log('Salvo');
    })} else { // alteração
      ViagensSrv.alterar(viagem).then(response => {
        setEditando(true);
        console.log('Salvo');
      })
    }
  }

  //Método para cancelar a inclusão
  const cancelar = () => {
    console.log('Cancelou ...');
    setEditando(false);
  }

  if (!editando) {
    return (
      <div className="App">
        <header class='app-header'>
          <p>Controle de Viagens</p>
        </header>
        <ViagensList 
          viagens={viagens}
          inserir={inserir}
          excluir={excluir}
          editar={editar}/>
          <footer class='app-footer'>
            <p>Projeto de API para controlar viagens</p>
            <p>Wesley Dutra Paiz</p>
          </footer>
      </div>
    ) } else {
      return (
        <div className="App">
          <header class='app-header'>
            <p>Adicionar Viagem</p>
          </header>
          <ViagensForm viagem={viagem} setViagem={setViagem} salvar={salvar} cancelar={cancelar} />
          <footer class='app-footer'>
            <p>Projeto de API para controlar viagens</p>
            <p>Wesley Dutra Paiz</p>
          </footer>
        </div>
      );
    }
}

export default App;
