import { Contexto } from "../../models/contexto.enum";
import { AbstractContextHandler } from "./abstract-contexto.handler";

export class BiometriaHandler extends AbstractContextHandler {

    public handle(contexto: Contexto): string {
        if (contexto === 'Biometria') {
            return 'Biometria'
        }

        return super.handle(contexto);
    }
}