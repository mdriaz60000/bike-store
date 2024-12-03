import { z } from "zod";

const productSchemaValidation = z.object({
  name: z.string().nonempty("Name is required"),
  brand: z.string().nonempty("Brand is required"),
  price: z.number().min(0, "Price must be at least 0"),
  category: z.enum(["Mountain", "Road", "Hybrid", "Electric"]),
  description: z.string().nonempty("Description is required"),
  quantity: z.number().min(0, "Quantity cannot be less than 0").default(1),
  inStock: z.boolean().default(true),
});

export default productSchemaValidation

