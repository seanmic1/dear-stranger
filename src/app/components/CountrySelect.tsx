import { getServerSession } from "next-auth";
import { css } from "../../../styled-system/css";
import countryData from "./countryData.json";
import prisma from "@/lib/prisma";

export default async function TextAreaWithCounter() {

  const session = await getServerSession()

  const user = await prisma.user.findUnique({where: {email: String(session?.user?.email)}})

  return (
    <select
      name="country"
      className={css({
        rounded: "md",
        border: "2px solid black",
        boxSizing: "border-box",
        width: "15rem",
        height: "2.5rem",
        _hover: {
          border: "2px solid black",
        },
      })}
      id="country"
      defaultValue={user?.country}
    >
      <option value="">Anonymous Country</option>
      {Object.values(countryData).map((countryName, index) => (
        <option key={index} value={countryName}>
          {countryName}
        </option>
      ))}
    </select>
  );
}
