import { Contexto } from './models/contexto.enum';
import { ContextoHandler } from './chain-of-responsability/contexto-handler';

const contexto = new ContextoHandler();

contexto.handler(Contexto.AnalisePedido);
contexto.handler(Contexto.Biometria);

