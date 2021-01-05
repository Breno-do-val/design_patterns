import { ContextoHandler } from "../../bloody-hell/context";
import { Contexto } from "../../models/contexto.enum";
import { AbstractContextHandler } from "./abstract-contexto.handler";

export class AnalisePedidoHandler extends AbstractContextHandler {

    public handle(contexto: Contexto): string {
        if (contexto === 'AnalisePedido') {
            return 'AnalisePedido'
        }

        return super.handle(contexto);
    }
}