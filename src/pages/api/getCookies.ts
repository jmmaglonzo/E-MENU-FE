import type { NextApiRequest, NextApiResponse } from 'next';

export default function(req: NextApiRequest, res: NextApiResponse) {
    const {_user_session, _table_session, _table_no} = req.cookies;
    console.log({_user_session, _table_session, _table_no})
    res.status(200).json({_user_session, _table_session, _table_no});
}