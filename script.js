function validar() {
    var nome = document.getElementById("nome");
    var endereco = document.getElementById("endereco");
    var numCasa = document.getElementById("numCasa");
    var cidade = document.getElementById("cidade");
    var estado = document.getElementById("estado");
    var dataNascimento = document.getElementById("dataNascimento");
    var formacaoAcad = document.getElementById("formacaoAcad");
    var experienciaPro = document.getElementById("experienciaPro");
    var cursoExtra = document.getElementById("cursoExtra");

    if (nome.value == "" || nome.value == null) {
      alert("Campos não Preenchidos... Dados não Submetidos");  
      alert("Nome não informado");
      document.getElementById("nome").required = true;
      return;
    }
    if (endereco.value == "" || endereco.value == null) {
        alert("Campos não Preenchidos... Dados não Submetidos");
        alert("Endereço não informado");
        document.getElementById("endereco").required = true;
        return;
      }
    if (numCasa.value == "" || numCasa.value == null) {
      alert("Campos não Preenchidos... Dados não Submetidos");
      alert("Número da casa não informado");
      document.getElementById("numCasa").required = true;
      return;
    }
    if (cidade.value == "" || cidade.value == null){
      alert("Campos não Preenchidos... Dados não Submetidos");
      alert("Cidade não informada");
      document.getElementById("cidade").required = true;
      return;
    }
    if (estado.value == "" || estado.value == null){
      alert("Campos não Preenchidos... Dados não Submetidos");
      alert("Estado não informado");
      document.getElementById("estado").required = true;
      return;
    }
    if (dataNascimento.value == "" || dataNascimento.value == null) {
        alert("Campos não Preenchidos... Dados não Submetidos");
        alert("Data de nascimento não informada");
        document.getElementById("dataNascimento").required = true;
        return;
    } 
    if (formacaoAcad.value == "" || formacaoAcad.value == null) {
        alert("Campos não Preenchidos... Dados não Submetidos");  
        alert("Formação Acadêmica não informada");
        document.getElementById("formacaoAcad").required = true;
        return;
    } 
    if (experienciaPro.value == "" || experienciaPro.value == null) {
      alert("Campos não Preenchidos... Dados não Submetidos");  
      alert("Experiência profissional não informada");
      document.getElementById("experienciaPro").required = true;
      return;
    } 
    if (cursoExtra.value == "" || cursoExtra.value == null) {
      alert("Campos não Preenchidos... Dados não Submetidos");  
      alert("Curso extra não informado");
      document.getElementById("cursoExtra").required = true;
      return;
    } 
      else{
          alert("Tudo Ok...Dados Submetidos");
          alert("Campos Preenchidos!");
        }
}