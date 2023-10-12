import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
})
export class HomePage {


  isLoading: boolean = false
  funcionarios: any
  editingFuncionario: any = null
  editingFuncionarioCodFun: any
  checkboxValue:string = ''
  inputFilter:string = ''
  disabledBtn:boolean = true

  handleOpen: {[index:string]: boolean} = {};

  selectedCheckbox(value:string){
    this.checkboxValue = value
    if(this.checkboxValue.length < 1){
      this.disabledBtn = true
    }
    this.disabledBtn = false
  }

  insertValueInFilter(e:any){
    const value = e.target!.value
    this.inputFilter = value
    if(this.inputFilter.length < 1){
      this.disabledBtn = true
    }
    this.disabledBtn = false
  }

  handlerFilter(){
    
  }

  toggleEdit(codFun: string) {
    this.editingFuncionarioCodFun = codFun
    this.handleOpen[codFun] = !this.handleOpen[codFun];
    this.editingFuncionario = true
  }

  edit(funcionario:any) {
    console.log(funcionario)
    if (this.editingFuncionario) {
      this.updateFuncionario(
      funcionario.CodFun,
      funcionario.Sobrenome,
      funcionario.Nome,
      funcionario.Cargo,
      funcionario.DataNasc,
      funcionario.Endereco,
      funcionario.Cidade,
      funcionario.CEP,
      funcionario.Pais,
      funcionario.Fone,
      funcionario.Salario
      );
      this.handleOpen[funcionario.CodFun] = false;
    }
  }


  getFuncionarios() {
    this.isLoading = true;
    fetch('http://localhost/api/func/listar_funcionarios.php')
      .then(response => response.json())
      .then(data => {
        if (data.funcionarios) {
          console.log(data.funcionarios);
          this.funcionarios = data.funcionarios;
        } else {
          console.error('A resposta da API não contém funcionários.');
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }


  updateFuncionario(
    CodFun: string,
    sobrenome: string,
    nome: string,
    cargo: string,
    dataNasc: string,
    endereco: string,
    cidade: string,
    cep: string,
    pais: string,
    fone: string,
    salario: string
  ) {
    this.isLoading = true;
    fetch('http://localhost/api/func/atualizar_funcionarios.php', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        CodFun: CodFun,
        Sobrenome: sobrenome,
        Nome: nome,
        Cargo: cargo,
        DataNasc: dataNasc,
        Endereco: endereco,
        Cidade: cidade,
        CEP: cep,
        Pais: pais,
        Fone: fone,
        Salario: salario,
      }),
    })
      .then(resp => resp.json())
      .then(res => {
        this.editingFuncionario = null;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  removeFuncionario(CodFun: string) {
    this.isLoading = true;
    fetch('http://localhost/api/func/remover_funcionario.php', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ CodFun: CodFun }),
    })
      .then(resp => resp.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  addFuncionario(
    sobrenome: string,
    nome: string,
    cargo: string,
    dataNasc: string,
    endereco: string,
    cidade: string,
    cep: string,
    pais: string,
    fone: string,
    salario: string
  ) {
    this.isLoading = true;
    fetch('http://localhost/api/func/inserir_funcionario.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Sobrenome: sobrenome,
        Nome: nome,
        Cargo: cargo,
        DataNasc: dataNasc,
        Endereco: endereco,
        Cidade: cidade,
        CEP: cep,
        Pais: pais,
        Fone: fone,
        Salario: salario,
      }),
    })
      .then(resp => resp.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
  filterByArgs(value:string, args:string){
    this.isLoading = true;
    fetch('http://localhost/api/func/inserir_funcionario.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        
      }),
    })
      .then(resp => resp.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }


  constructor() {}
}
