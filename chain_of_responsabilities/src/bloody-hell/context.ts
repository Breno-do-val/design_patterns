import { Contexto } from '../models/contexto.enum';

export class ContextoHandler {
    public definirContextos(contexto: Contexto): string {
        if (contexto === 'AnalisePedido') {
            return 'AnalisePedido';
        } else if (contexto === 'AssinaturaContrato') {
            return 'AssinaturaContrato';
        } else if (contexto === 'Biometria') {
            return 'Biometria';
        } else if (contexto === 'DadosBancarios') {
            return 'DadosBancarios';
        } else if (contexto === 'DadosEndereco') {
            return 'DadosEndereco';
        } else if (contexto === 'DadosProfissionais') {
            return 'DadosProfissionais';
        } else if (contexto === 'Documentos') {
            return 'Documentos';
        } else if (contexto === 'StatusPedido') {
            return 'StatusPedido';
        } else  {
            return 'Contexto não definido';
        }
    }
}