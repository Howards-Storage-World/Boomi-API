import type { NextApiHandler } from 'next'

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

const handler: NextApiHandler = async (req, res) => {
    res.status(200).json({msg: "Recieved"});
};

export default handler;