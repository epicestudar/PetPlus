import { Component } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CarrinhoService]
})
export class HomeComponent {
  carrinhoItens: any[] = [];
  total: number = 0;
  carrinhoAberto: boolean = false;

  produtos: any[] = [
    // Adicione todos os produtos aqui
    { nome: 'Ração Premiatta', descricao: 'Cuide da saúde e bem-estar do seu fiel companheiro com a Ração Premiatta, uma escolha premium para nutrição completa e equilibrada', preco: 263.99, parcelas: 'ou 3x de R$ 88,00', imagem: 'assets/img/imgcards/racaopremiata.jpg' },
    { nome: 'Refeição Natural Zee.Dog Kitchen', descricao: 'Proporcione uma experiência culinária excepcional para o seu animal de estimação com a Refeição Natural, uma opção nutritiva e deliciosa que combina o sabor irresistível com benefícios para a saúde', preco: 32.99, parcelas: 'ou 2x de R$ 16,49', imagem: 'assets/img/imgcards/racao.jpg' },
    { nome: 'Perfume Pet Clean', descricao: 'Transforme o cuidado do seu pet em uma experiência luxuosa com o Perfume Pet Clean, uma fragrância especialmente formulada para envolver seu animal de estimação em uma aura de frescor e limpeza.', preco: 19.99, parcelas: 'ou 2x de R$ 9,99', imagem: 'assets/img/imgcards/perfume.jpg' },
    { nome: 'Ração Mandaí cat', descricao: 'Proporcione ao seu felino uma experiência gastronômica excepcional com a Ração Mandaí Cat, uma fórmula cuidadosamente elaborada para atender às necessidades nutricionais específicas dos gatos.', preco: 44.99, parcelas: 'ou 2x de R$ 22,45', imagem: 'assets/img/imgcards/racaogato.png' },
    { nome: 'Vermífugo Drontal Gatos', descricao: 'Mantenha seu felino protegido e saudável com o Vermífugo Drontal para Gatos, uma solução eficaz e confiável para o controle de vermes intestinais.', preco: 54.99, parcelas: 'ou 2x de R$ 27,45', imagem: 'assets/img/imgcards/remediogato.jpg' },
    { nome: 'Brinquedo para Gatos e Cachorros', descricao: 'Explore o mundo do entretenimento animal com nossos Brinquedos para Cachorros e Gatos, uma coleção cuidadosamente selecionada para manter seus amigos peludos entretidos e felizes.', preco: 32.99, parcelas: 'ou 2x de R$ 16,00', imagem: 'assets/img/imgcards/brinquedo.png' },
    { nome: 'Casa para Gato', descricao: 'Proporcione ao seu felino um refúgio acolhedor e encantador com a Casinha para Gatos, o lugar perfeito para descanso e relaxamento.', preco: 485.99, parcelas: 'ou 4x de R$ 121,25', imagem: 'assets/img/imgcards/casagato.jpg' },
    { nome: 'Casa para Cachorro', descricao: 'Ofereça ao seu fiel companheiro um lar dentro do lar com a Casinha para Cachorros, um refúgio aconchegante e seguro que atende às necessidades do seu amigo peludo.', preco: 350.99, parcelas: 'ou 4x de R$ 87,50', imagem: 'assets/img/imgcards/casacachorro.jpg' },
    { nome: 'Petiscos para seu animal', descricao: 'Delicie seus amigos peludos com nossos irresistíveis Petiscos para Gatos e Cachorros, uma seleção de agrados saborosos e saudáveis que farão a alegria dos seus animais de estimação.', preco: 12.99, parcelas: 'ou 2x de R$ 6,25', imagem: 'assets/img/imgcards/petiscos.jpg' }
  ];

  constructor(private carrinhoService: CarrinhoService) {
    this.carrinhoService.carrinhoItems$.subscribe(items => {
      this.carrinhoItens = items;
      this.atualizarTotal();
    });

    this.carrinhoService.carrinhoAberto$.subscribe(aberto => {
      this.carrinhoAberto = aberto;
    });
  }

  abrirCarrinho() {
    this.carrinhoService.toggleCarrinho();
  }

  adicionarProdutoAoCarrinho(produto: any) {
    this.carrinhoService.adicionarProdutoAoCarrinho(produto);
}

  fecharCarrinho() {
    this.carrinhoService.toggleCarrinho();
  }

  finalizarCompra() {
    // Lógica para finalizar a compra
  }

  private atualizarTotal() {
    this.total = this.carrinhoItens.reduce((acc, item) => acc + item.preco, 0);
  }

  removerDoCarrinho(index: number) {
    this.carrinhoService.removerDoCarrinho(index);
  }
}
