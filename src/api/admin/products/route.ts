import {
    MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"

export const GET = async (
    req: MedusaRequest,
    res: MedusaResponse
  ) => {
    const query = req.scope.resolve("query")
    
    const { data: product } = await query.graph({
      entity: "products",
      fields: ["*"],
    //   filters:{
    //     id: "prod_01JP4J0HA6YP8K0DNS0MK6BGMK",
    //   }
    })
    res.json({product})
  }