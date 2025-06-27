import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  box-shadow: 0 0 10px #ccc;
  border-radius: 10px;
  margin-top: 2rem;
`;

const Title = styled.h1`
  color: #174873;
`;

const Section = styled.section`
  margin-bottom: 1.5rem;
`;

export default function Landing() {
  return (
    <Container>
      <Title>Centro Pop</Title>
      <Section>
        <p>
          O Centro de Referência Especializado para População em Situação de Rua é uma parceria
          público-privada entre a Prefeitura Municipal de Passos e o Educandário Senhor Bom Jesus dos Passos,
          oferecendo atendimento especializado para pessoas em situação de rua no município.
        </p>
        <p>
          Pode ser acessado de forma espontânea, por encaminhamento do Serviço Especializado em Abordagem Social
          ou por outros serviços socioassistenciais da rede municipal.
        </p>
      </Section>

      <Section>
        <h3>Serviços Ofertados</h3>
        <ul>
          <li>Atendimentos psicossociais (individuais e coletivos)</li>
          <li>Encaminhamentos para emissão de documentação (RG, CPF, certidões, fotos)</li>
          <li>Realização de Cadastro Único</li>
          <li>Solicitação de benefícios: aluguel, funeral, cesta básica</li>
          <li>Oficinas e atividades de convivência</li>
          <li>Reinserção familiar e social</li>
        </ul>
      </Section>

      <Section>
        <h3>Contato</h3>
        <p>Avenida Arlindo Figueiredo, Nº 931 – Bairro São Francisco</p>
        <p>Celular/WhatsApp: (35) 9 8403-4923</p>
        <p>E-mail: centropop@passos.mg.gov.br</p>
        <p>Atendimento: 08:00 às 17:00 horas</p>
      </Section>

      <Section>
  <h3>Como Contribuir</h3>
  <p>
    A comunidade local pode contribuir com o Centro Pop por meio de doações financeiras. Toda ajuda é bem-vinda e contribui para o fortalecimento das ações voltadas à população em situação de rua.
  </p>
  <p><strong>Chave Pix:</strong> (35) 9 8403-4923</p>
</Section>
    </Container>
  );
}
