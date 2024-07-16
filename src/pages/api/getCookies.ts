import type { NextApiRequest, NextApiResponse } from 'next';

export default function(req: NextApiRequest, res: NextApiResponse) {
    const {_user_session, _table_session} = req.cookies;
    console.log({_user_session, _table_session})
    res.status(200).json({_user_session, _table_session});
}