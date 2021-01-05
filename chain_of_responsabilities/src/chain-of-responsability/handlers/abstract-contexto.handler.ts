import { Contexto } from "../../models/contexto.enum";
import { IContextoHandler } from "../interface/icontexto.handler";

export abstract class AbstractContextHandler implements IContextoHandler {

    private nextHandle: IContextoHandler;

    public setNext(handler: IContextoHandler): IContextoHandler {
        this.nextHandle = handler;

        return handler;
    }

    public handle(contexto: Contexto): string {
        if (this.nextHandle) {
            return this.nextHandle.handle(contexto);
        }
        return 'Contexto não definido'
    }
}