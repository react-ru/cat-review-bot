import { Request } from '../../../model/Request.mjs'
import { ListResponse } from '../../../lib/classes/ListResponse.mjs'

export const list = async (req, res) => {
  const requests = await Request.find({})
  res.json(new ListResponse(requests))
}
