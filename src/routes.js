import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';
import { validationStoreSessionMiddleware } from './app/middlewares/validateSession';
import {
  validationStoreUserMiddleware,
  validationUpdateUserMiddleware,
} from './app/middlewares/validateUser';

const routes = new Router();

// #region

/**
 * @api {post} /login Login
 * @apiGroup User
 * @apiParamExample {json} Request-Example:
 *
 *    {
 *      "email": "joao@gmail.com",
 *      "password": "senhaProvisoria"
 *    }
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "user": {
 *                "id": 1,
 *                "name": "Joao",
 *                "email": "Joao@gmail.com",
 *              },
 *      "token": "awdiojawdoiisjvelisecaldwjljiafkamiolclc",
 *    }
 */

// #endregion

routes.post(
  '/api/login',
  validationStoreSessionMiddleware,
  SessionController.store
);

// #region

/**
 * @api {post} /newUser Novo usuário
 * @apiGroup User
 * @apiParamExample {json} Request-Example:
 *
 *    {
 *       "name": "Joao",
 *       "email": "Joao@gmail.com",
 *       "password": "senhaProvisoria"
 *    }
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "id": 1,
 *      "name": "Joao",
 *      "email": "Joao@gmail.com",
 *    }
 */

// #endregion

routes.post(
  '/api/newUser',
  validationStoreUserMiddleware,
  UserController.store
);

routes.use(authMiddleware);

// #region

/**
 * @api {put} /updateUser Atualização de usuário
 * @apiGroup User
 * @apiPermission authenticated user and must send "Bearer token"
 * @apiDescription Os Parametros de password são opcionais, envie somente caso queira alterar a senha
 * @apiParamExample {json} Request-Example:
 *
 *    {
 *      "name": "Joao Souza",
 *      "email": "JoaoSouza@gmail.com",
 *      "oldPassword": "senhaProvisoria",
 *      "password": "novaSenhaProvisoria",
 *      "confirmPassword": "novaSenhaProvisoria"
 *    }
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "id": 1,
 *      "name": "Joao",
 *      "email": "JoaoNovoEmail@gmail.com",
 *    }
 */

// #endregion

routes.put(
  '/api/updateUser',
  validationUpdateUserMiddleware,
  UserController.update
);


export default routes;
