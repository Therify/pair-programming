import { NextApiRequest, NextApiResponse } from "next";
import { Provider } from "@/modules/care/components/CareProvider";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Provider[]>
) {
  res
    .status(200)
    .json([{ designation: "Coach", name: "Jane Doe", specialties: ["Anger"] }]);
}
