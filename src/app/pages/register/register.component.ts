import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  apiUrl = 'http://200.145.148.202:8082';
  registerForm: FormGroup;
  submitted = false;
  verify = false;
  usuario: Usuario;
  verifiedText: number;

  /** Google maps  */
  title: string = 'My first AGM project';
  lat: number = -22.344374;
  lng: number =  -49.029391;

  constructor(
    private formBuilder: FormBuilder, 
    private httpClient: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      ddd: ['', Validators.required],
      telefone: ['', Validators.required],
      cep: ['', Validators.required],
      end: ['', Validators.required],
      num: ['', Validators.required],
      comp: [''],
      cidade: ['', Validators.required],
      estado: ['', Validators.required]
  });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }
    try{
      this.httpClient.post(`${this.apiUrl}/usuario`, this.parseFormToDto()).subscribe(res => {
        // Houve sucesso, então espera pela confirmação 
        setTimeout(() => {
          this.verify = !this.verify;
        }, 1000);
        console.log(res)
      });
    } catch(e) {
        alert("Erro de conexão");
    }    
  }

  parseFormToDto() {
    this.usuario = new Usuario();
    this.usuario.nome = this.f.nome.value;
    this.usuario.telefone = '55' + this.f.ddd.value + this.f.telefone.value;
    this.usuario.endereco = this.f.end.value;
    this.usuario.numero = this.f.num.value;
    this.usuario.cep = this.f.cep.value;
    if (this.f.complemento === undefined)
      this.usuario.complemento;
    else 
      this.usuario.complemento = this.f.complemento.value;

    return this.usuario;
  }

  SendConfirmationText () {
      console.log(`Chave digitada: ${this.verifiedText}`);
      this.usuario = this.parseFormToDto();
      this.usuario.seguranca = this.verifiedText;
      this.httpClient.post(`${this.apiUrl}/usuario`, this.usuario).subscribe(res => {
        
        setTimeout(() => {
          this.verify = !this.verify;
        }, 1000);
        console.log(res)
      }, err => console.log(err));
      // Envia texto de confirmação 
      this.router.navigate(['/'])
  }

}
