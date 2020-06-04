import { Request, Response } from 'express';
export default {
  'POST /api/login': (req: Request, res: Response) => {
    const { password, username } = req.body;
    if (username === 'novastar' && password === '88888888') {
      res.send({
        status: 'ok',
        token: '12345678',
        currentAuthority: 'admin',
      });
      return;
    }
    if (username === 'user') {
      res.send({
        status: 'ok',
        token: '23456789',
        currentAuthority: 'user',
      });
      return;
    }

    res.send({
      status: 'error',
      currentAuthority: 'guest',
    });
  },
};
