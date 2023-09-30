"use client";

import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import { useEffect, useState } from "react";
import countryData from './countryData.json';

export default function TextAreaWithCounter() {
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        const countrySelect = document.getElementById("country") as HTMLSelectElement;
    
        if (countrySelect) {
          countrySelect.addEventListener("change", handleCountryChange);
        }
    
        // Clean up the event listener when the component unmounts
        return () => {
          if (countrySelect) {
            countrySelect.removeEventListener("change", handleCountryChange);
          }
        };
      }, []);

    function handleCountryChange(event: Event) { // Change the event type to Event
        const target = event.target as HTMLSelectElement;
        setSelectedCountry(target.value);
    }

  return (
    <div>
    <select className={css({
        rounded: "md",
        border: "2px solid black",
        boxSizing: "border-box",
        width: "60%",
        height: "2.5rem",
        _hover: {
          border: "2px solid black",
      }
    })}
    id="country"
    name="country"
    value={selectedCountry}>
    <option value="">Anonymous Country</option>
        {Object.values(countryData).map((countryName, index) => (
          <option key={index} value={countryName}>
            {countryName}
        </option>
    ))}
    </select>
    </div>
  );
}
