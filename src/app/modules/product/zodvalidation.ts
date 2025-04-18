import { z } from "zod";

const productSchemaValidation = z.object({
  productName: z.string(),
  brand: z.string().nonempty("Brand is required"),
  img: z.string().nonempty("img is required"),
  price: z.number().min(0, "Price must be at least 0"),
  category: z.enum(["Mountain", "Road", "Hybrid", "Electric"]),
  description: z.string().nonempty("Description is required"),
  quantity: z.number().default(0),
  inStock: z.boolean().default(true),
  isDeleted :z.boolean().default(true)
});

export default productSchemaValidation

