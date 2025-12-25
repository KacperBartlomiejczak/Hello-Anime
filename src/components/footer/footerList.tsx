import { data } from "./footerData";
import Link from "next/link";

export default function FooterList() {
  return (
    <div className="w-full flex flex-row justify-center md:w-1/2 md:justify-end">
      {data.map((section) => (
        <ul key={section.heading} className="flex flex-col gap-2 p-2 mb-4">
          <h3 className="font-poppins font-bold">{section.heading}</h3>
          {section.elements.map((el, index) => {
            const link = section.href[index];
            return (
              <li key={el}>
                <Link href={link}>{el}</Link>
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
}
