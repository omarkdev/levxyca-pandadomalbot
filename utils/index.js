const fs = require('fs');

module.exports = {
  salvarDados(data) {
    const obj = JSON.stringify(data);
    fs.writeFile('dados.json', obj, 'utf8', (erro) => {
      if (erro) {
        // eslint-disable-next-line no-console
        console.log(erro);
      } else {
        // eslint-disable-next-line no-console
        console.log('salvo');
      }
    });
  },
  lerDados() {
    let dados = {};
    try {
      const conteudoArquivo = fs.readFileSync('dados.json');
      if (!conteudoArquivo) return;
      dados = JSON.parse(conteudoArquivo);

      return dados;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('Deu erro no arquivo');
    } finally {
      return dados;
    }
  },
  lerSubs() {
    let subs = [];
    try {
      const data = fs.readFileSync('subs.txt', 'utf8');
      if (!data) return;
      
      const lines = data.split(/\r?\n/);

      lines.forEach((line) => {
        subs.push(line);
      });
    } finally {
      return subs;
    }
  },
  lerPontos() {
    try {
      const conteudoArquivo = fs.readFileSync('pontos.json');
      if (!conteudoArquivo) return;
      dados = JSON.parse(conteudoArquivo);

      return dados;
    } finally {
      return dados;
    }
  },
  salvaPontos(data) {
    const obj = JSON.stringify(data);
    fs.writeFile('pontos.json', obj, 'utf8', (erro) => {
      if (erro) {
        // eslint-disable-next-line no-console
        console.log(erro);
      } else {
        // eslint-disable-next-line no-console
        console.log('salvo');
      }
    });
  },
  lerLoja() {
    try {
      const conteudoArquivo = fs.readFileSync('loja.json');
      if (!conteudoArquivo) return;
      dados = JSON.parse(conteudoArquivo);

      return dados;
    } finally {
      return dados;
    }
  },
  salvaLoja(data) {
    const obj = JSON.stringify(data);
    fs.writeFile('loja.json', obj, 'utf8', (erro) => {
      if (erro) {
        // eslint-disable-next-line no-console
        console.log(erro);
      } else {
        // eslint-disable-next-line no-console
        console.log('salvo');
      }
    });
  }
};