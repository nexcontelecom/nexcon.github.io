import dotenv from "dotenv";
dotenv.config();

export const secret = {
  serviceId: process.env.REACT_APP_SERVICE_ID,
  templateId: process.env.REACT_APP_TEMPLATE_ID,
  userId: process.env.REACT_APP_USER_ID
}