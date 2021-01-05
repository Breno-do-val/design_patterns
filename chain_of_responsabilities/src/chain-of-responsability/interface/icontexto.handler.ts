import { Contexto } from "../../models/contexto.enum";

export interface IContextoHandler {
    setNext(handle: IContextoHandler): IContextoHandler;
    handle(contexto: Contexto): string;
}