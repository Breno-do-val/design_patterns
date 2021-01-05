import { Contexto } from "../models/contexto.enum";
import { AnalisePedidoHandler } from "./handlers/analise-pedido.handler";
import { BiometriaHandler } from './handlers/biometria.handler';

export class ContextoHandler {
    
    private readonly biometriaHandler: BiometriaHandler = new BiometriaHandler();
    private readonly analisePedidoHandler: AnalisePedidoHandler = new AnalisePedidoHandler();

    constructor() {
        this.analisePedidoHandler
            .setNext(this.biometriaHandler);
    }

    public handler(contexto: Contexto) {

        const contextoDefinido = this.analisePedidoHandler.handle(contexto);

        console.log(contextoDefinido)
    }
}